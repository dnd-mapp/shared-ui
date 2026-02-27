import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: './story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-3 bg-neutral-100',
    },
    imports: [NavbarLinkComponent],
})
export class StoryComponent {
    public readonly label = input('My route');

    public readonly route = input('/my-route');
}
