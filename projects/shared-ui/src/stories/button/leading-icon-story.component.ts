import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent, CircleUserSoIcon } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-leading-icon-story',
    templateUrl: './leading-icon-story.component.html',
    styleUrl: './story.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, CircleUserSoIcon],
})
export class LeadingIconStoryComponent {}
