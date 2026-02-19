import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-app-top-bar',
    template: `<ng-content select="dma-app-top-bar-section" />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'px-3 py-2 flex justify-between items-center border-b border-b-neutral-200 bg-neutral-100',
    },
    imports: [],
})
export class AppTopBarComponent {}
