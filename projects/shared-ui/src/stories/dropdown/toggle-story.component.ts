import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
    ButtonComponent,
    CircleUserIcon,
    DropdownAnchorDirective,
    DropdownContainerComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-toggle-story',
    templateUrl: './toggle-story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-4 bg-neutral-50 h-[8rem]',
    },
    imports: [ButtonComponent, CircleUserIcon, DropdownAnchorDirective, DropdownContainerComponent],
})
export class ToggleStoryComponent {
    public readonly logout = output<void>();

    public readonly dropdownShown = output<boolean>();
}
