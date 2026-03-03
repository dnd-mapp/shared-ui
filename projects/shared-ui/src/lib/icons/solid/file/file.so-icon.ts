import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'dma-icon[dma-file-so-icon]',
    templateUrl: './file.so-icon.svg',
    styleUrl: '../../icon.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSoIcon {}
