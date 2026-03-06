import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nav[dma-navbar]',
    template: `<ng-content />`,
    styleUrl: './navbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
})
export class NavbarComponent {}
