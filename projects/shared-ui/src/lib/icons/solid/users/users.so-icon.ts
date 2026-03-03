import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-users-so-icon]',
    templateUrl: './users.so-icon.svg',
    styleUrl: '../../icon.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSoIcon {}
