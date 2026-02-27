import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent, CircleUserIcon } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-leading-icon-story',
    templateUrl: './leading-icon-story.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block p-4 bg-neutral-100',
    },
    imports: [ButtonComponent, CircleUserIcon],
})
export class LeadingIconStoryComponent {}
