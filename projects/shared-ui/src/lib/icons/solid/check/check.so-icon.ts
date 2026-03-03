import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-check-so-icon]',
    templateUrl: './check.so-icon.svg',
    styleUrl: '../../icon.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckSoIcon {}
