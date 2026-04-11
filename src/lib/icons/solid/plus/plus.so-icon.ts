import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-plus-so-icon]',
    templateUrl: './plus.so-icon.svg',
    styleUrl: '../../icon.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlusSoIcon {}
