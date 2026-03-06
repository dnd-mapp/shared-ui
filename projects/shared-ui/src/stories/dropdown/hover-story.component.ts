import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
    ButtonComponent,
    DropdownAnchorDirective,
    DropdownContainerComponent,
    NavbarLinkComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-hover-story',
    templateUrl: './hover-story.component.html',
    styleUrl: './hover-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ButtonComponent,
        DropdownAnchorDirective,
        DropdownContainerComponent,
        NavbarLinkComponent,
        DropdownContainerComponent,
    ],
})
export class HoverStoryComponent {
    public readonly logout = output<void>();

    public readonly dropdownShown = output<boolean>();
}
