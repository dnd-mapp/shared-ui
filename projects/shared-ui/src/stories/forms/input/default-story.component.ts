import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { InputComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: './default-story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'bg-neutral-50 p-4 block',
    },
    imports: [InputComponent],
})
export class DefaultStoryComponent {
    public readonly label = input('Spell Name');

    public readonly inputId = input('spell-name-input');

    public readonly value = input('Lightning Bolt');

    public readonly valueChange = output<string>();

    public readonly placeholder = input('Fireball');

    public readonly disabled = input(false);

    public readonly readonly = input(false);

    protected onValueChange(value: string) {
        this.valueChange.emit(value);
    }
}
