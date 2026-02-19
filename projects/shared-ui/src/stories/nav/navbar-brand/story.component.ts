import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: './story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-3 bg-neutral-100',
    },
    imports: [NavbarBrandComponent],
})
export class StoryComponent {
    public readonly brandName = input<string>();
}
