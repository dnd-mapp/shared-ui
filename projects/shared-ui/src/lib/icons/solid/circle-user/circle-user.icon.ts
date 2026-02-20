import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-circle-user-icon]',
    templateUrl: './circle-user.icon.svg',
    styleUrl: '../../icon.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleUserIcon {}
