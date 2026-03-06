import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: './story.component.html',
    styleUrl: './story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarLinkComponent],
})
export class StoryComponent {
    public readonly label = input('My route');

    public readonly route = input('/my-route');
}
