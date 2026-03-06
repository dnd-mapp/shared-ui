import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: './story.component.html',
    styleUrl: './story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarBrandComponent],
})
export class StoryComponent {
    public readonly brandName = input<string>();
}
