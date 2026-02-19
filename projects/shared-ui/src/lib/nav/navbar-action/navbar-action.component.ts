import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-navbar-action',
    templateUrl: './navbar-action.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block',
    },
    imports: [],
})
export class NavbarActionComponent {}
