import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../../button';
import { DropdownAnchorDirective, DropdownContainerComponent } from '../../dropdown';

@Component({
    selector: 'dma-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, DropdownAnchorDirective, DropdownContainerComponent],
})
export class NavbarMenuComponent {
    public readonly toggleOnHover = input(false, { transform: booleanAttribute });
}
