import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
    booleanAttribute,
    computed,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    input,
    output,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, Subject } from 'rxjs';
import { DEFAULT_DROPDOWN_POSITIONS } from './positions';

@Directive({
    selector: '[dmaDropdownAnchor]',
    exportAs: 'dmaDropdownAnchor',
    host: {
        '(click)': 'onClick()',
        '(mouseenter)': 'onMouseenter()',
        '(mouseleave)': 'onMouseleave()',
    },
})
export class DropdownAnchorDirective {
    private readonly overlay = inject(Overlay);
    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly destroyRef = inject(DestroyRef);

    public readonly dropdownContainerTemplateRef = input.required<TemplateRef<unknown>>({ alias: 'dmaDropdownAnchor' });

    public readonly positions = input<ConnectedPosition[]>(DEFAULT_DROPDOWN_POSITIONS);

    public readonly toggleOnHover = input(false, { transform: booleanAttribute });

    public readonly dropdownToggle = output<boolean>();

    public readonly dropdownOpen = computed(() => Boolean(this.overlayRef));

    private readonly closeScheduler = new Subject<boolean>();

    private overlayRef: OverlayRef | null = null;

    constructor() {
        this.closeScheduler
            .asObservable()
            .pipe(debounceTime(100), filter(Boolean), takeUntilDestroyed())
            .subscribe({
                next: () => {
                    if (!this.toggleOnHover()) return;
                    this.close();
                },
            });
    }

    public open() {
        this.closeScheduler.next(false);
        if (this.overlayRef) return;

        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef)
            .withPositions(this.positions());

        this.overlayRef = this.overlay.create({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            disposeOnNavigation: true,
            width: getComputedStyle(this.elementRef.nativeElement).width,
        });

        this.overlayRef.attach(new TemplatePortal(this.dropdownContainerTemplateRef(), this.viewContainerRef));

        this.overlayRef
            .detachments()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => this.close(),
            });

        this.dropdownToggle.emit(true);
    }

    public close() {
        if (this.overlayRef === null) return;
        this.overlayRef.dispose();
        this.overlayRef = null;

        this.dropdownToggle.emit(false);
    }

    public scheduleClose(shouldClose: boolean) {
        this.closeScheduler.next(shouldClose);
    }

    protected onClick() {
        if (this.toggleOnHover()) return;
        this.toggle();
    }

    protected onMouseenter() {
        if (!this.toggleOnHover()) return;
        this.open();
    }

    protected onMouseleave() {
        if (!this.toggleOnHover()) return;
        this.closeScheduler.next(true);
    }

    private toggle() {
        if (this.overlayRef) this.close();
        else this.open();
    }
}
