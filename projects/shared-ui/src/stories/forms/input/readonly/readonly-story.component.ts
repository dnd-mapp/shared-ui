import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-readonly-story',
    templateUrl: './readonly-story.component.html',
    styleUrl: './readonly-story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InputComponent],
})
export class ReadonlyStoryComponent {}
