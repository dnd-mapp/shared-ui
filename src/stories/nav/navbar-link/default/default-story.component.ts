import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-default-story',
    templateUrl: './default-story.component.html',
    styleUrl: './default-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarLinkComponent],
})
export class DefaultStoryComponent {
    public readonly label = input('My route');

    public readonly route = input('/my-route');
}
