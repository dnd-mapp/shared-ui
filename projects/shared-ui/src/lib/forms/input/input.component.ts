import { booleanAttribute, ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { NgOnChange, NgOnTouched, provideValueAccessor } from '../value-accessor';

@Component({
    selector: 'dma-input',
    templateUrl: './input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'group',
    },
    imports: [],
    providers: [provideValueAccessor(InputComponent)],
})
export class InputComponent implements ControlValueAccessor {
    public readonly inputId = input.required<string>();

    public readonly label = input.required<string>();

    public readonly placeholder = input<string>('');

    public readonly readonly = input(false, { transform: booleanAttribute });

    public readonly value = model<string>('');

    public readonly disabled = model<boolean>(false);

    private readonly inputSubject = new Subject<string>();

    private ngOnTouched: NgOnTouched;

    private ngOnChange: NgOnChange<string>;

    constructor() {
        this.inputSubject
            .asObservable()
            .pipe(debounceTime(500), takeUntilDestroyed())
            .subscribe({
                next: (value) => this.onChange(value),
            });
    }

    public writeValue(value: string) {
        this.value.set(value);
    }

    public registerOnChange(fn: NgOnChange<string>) {
        this.ngOnChange = fn;
    }

    public registerOnTouched(fn: NgOnTouched) {
        this.ngOnTouched = fn;
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled.set(isDisabled);
    }

    protected onInput(value: string) {
        this.inputSubject.next(value);
    }

    protected onFocus() {
        if (!this.ngOnTouched) return;
        this.ngOnTouched();
    }

    private onChange(value: string) {
        this.value.set(value);

        if (this.ngOnChange) {
            this.ngOnChange(value);
        }
    }
}
