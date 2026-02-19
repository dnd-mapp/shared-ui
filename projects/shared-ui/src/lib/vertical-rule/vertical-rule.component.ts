import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-vr',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'inline-block h-[stretch] border-s border-s-neutral-500',
    },
    imports: [],
})
export class VerticalRuleComponent {}
