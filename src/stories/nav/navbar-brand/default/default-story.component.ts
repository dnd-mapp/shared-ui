import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-default-story',
    templateUrl: './default-story.component.html',
    styleUrl: './default-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarBrandComponent],
})
export class DefaultStoryComponent {
    public readonly brandName = input<string>();
}
