import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block',
    },
    imports: [],
})
export class NavbarMenuComponent {}
