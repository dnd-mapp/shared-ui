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
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-4 bg-neutral-50 h-[13rem]',
    },
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
