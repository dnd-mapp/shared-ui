import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
    booleanAttribute,
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
    private readonly elementRef = inject(ElementRef);
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly destroyRef = inject(DestroyRef);

    public readonly dropdownContainerTemplateRef = input.required<TemplateRef<unknown>>({ alias: 'dmaDropdownAnchor' });

    public readonly positions = input<ConnectedPosition[]>(DEFAULT_DROPDOWN_POSITIONS);

    public readonly toggleOnHover = input(false, { transform: booleanAttribute });

    public readonly dropdownToggle = output<boolean>();

    private readonly hideScheduler = new Subject<boolean>();

    private overlayRef: OverlayRef = null;

    constructor() {
        this.hideScheduler
            .asObservable()
            .pipe(debounceTime(100), filter(Boolean), takeUntilDestroyed())
            .subscribe({
                next: () => {
                    if (!this.toggleOnHover()) return;
                    this.hide();
                },
            });
    }

    public show() {
        this.hideScheduler.next(false);
        if (this.overlayRef) return;

        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
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
                next: () => this.hide(),
            });

        this.dropdownToggle.emit(true);
    }

    public scheduleHide(shouldHide: boolean) {
        this.hideScheduler.next(shouldHide);
    }

    protected onClick() {
        if (this.toggleOnHover()) return;
        this.toggle();
    }

    protected onMouseenter() {
        if (!this.toggleOnHover()) return;
        this.show();
    }

    protected onMouseleave() {
        if (!this.toggleOnHover()) return;
        this.hideScheduler.next(true);
    }

    private toggle() {
        if (this.overlayRef) this.hide();
        else this.show();
    }

    private hide() {
        if (this.overlayRef === null) return;
        this.overlayRef.dispose();
        this.overlayRef = null;

        this.dropdownToggle.emit(false);
    }
}
