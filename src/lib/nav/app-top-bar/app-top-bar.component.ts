import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-app-top-bar',
    template: `<ng-content select="dma-app-top-bar-section" />`,
    styleUrl: './app-top-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
})
export class AppTopBarComponent {}
