import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent, buttonColorAttribute } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: `./story.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class StoryComponent {
    public readonly color = input.required({ transform: buttonColorAttribute });

    public readonly label = input.required<string>();

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    public readonly onButtonClick = output<PointerEvent>();
}
