import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@dnd-mapp/shared-ui';
import { Observable } from 'rxjs';

@Component({
    selector: 'dma-forms-story',
    templateUrl: './forms-story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'bg-neutral-50 p-4 block',
    },
    imports: [InputComponent, ReactiveFormsModule, JsonPipe, AsyncPipe],
})
export class FormsStoryComponent {
    private readonly formBuilder = inject(FormBuilder);

    protected readonly form = this.formBuilder.group({
        input: this.formBuilder.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
    });

    protected readonly formValue: Observable<Partial<{ input: string }>> =
        this.form.valueChanges.pipe(takeUntilDestroyed());

    public readonly label = input('Spell Name');

    public readonly inputId = input('spell-name-input');

    public readonly placeholder = input('Fireball');
}
