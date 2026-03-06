import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { buttonColorAttribute, ButtonColors, ButtonComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: `./default-story.component.html`,
    styleUrl: './default-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class DefaultStoryComponent {
    public readonly color = input(ButtonColors.BASE, { transform: buttonColorAttribute });

    public readonly label = input.required<string>();

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    public readonly onButtonClick = output<PointerEvent>();
}
