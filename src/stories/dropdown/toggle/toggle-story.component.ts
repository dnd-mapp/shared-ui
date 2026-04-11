import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
    ButtonComponent,
    CircleUserSoIcon,
    DropdownAnchorDirective,
    DropdownContainerComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-toggle-story',
    templateUrl: './toggle-story.component.html',
    styleUrl: './toggle-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, CircleUserSoIcon, DropdownAnchorDirective, DropdownContainerComponent],
})
export class ToggleStoryComponent {
    public readonly logout = output<void>();

    public readonly dropdownToggle = output<boolean>();
}
