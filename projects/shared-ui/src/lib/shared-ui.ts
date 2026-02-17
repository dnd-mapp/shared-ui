import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-shared-ui',
    template: `<p>shared-ui works!</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
})
export class SharedUi {}
