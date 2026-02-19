import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    AppTopBarComponent,
    AppTopBarSectionComponent,
    NavbarBrandComponent,
    NavbarComponent,
    NavbarLinkComponent,
    VerticalRuleComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-story',
    templateUrl: `./story.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AppTopBarComponent,
        AppTopBarSectionComponent,
        NavbarBrandComponent,
        NavbarComponent,
        VerticalRuleComponent,
        NavbarLinkComponent,
    ],
})
export class StoryComponent {}
