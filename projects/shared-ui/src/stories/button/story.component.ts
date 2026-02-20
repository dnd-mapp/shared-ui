import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { buttonColorAttribute, ButtonColors, ButtonComponent, CircleUserIcon } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: `./story.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-4 bg-neutral-100',
    },
    imports: [ButtonComponent, CircleUserIcon],
})
export class StoryComponent {
    public readonly color = input(ButtonColors.BASE, { transform: buttonColorAttribute });

    public readonly label = input.required<string>();

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    public readonly onButtonClick = output<PointerEvent>();
}
