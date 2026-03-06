import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-clone-re-icon]',
    templateUrl: './clone.re-icon.svg',
    styleUrl: '../../icon.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloneReIcon {}
