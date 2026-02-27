import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { isActive, Router } from '@angular/router';
import {
    ActiveMarkerComponent,
    AppTopBarComponent,
    AppTopBarSectionComponent,
    ButtonComponent,
    CircleUserIcon,
    NavbarBrandComponent,
    NavbarComponent,
    NavbarLinkComponent,
    NavbarMenuComponent,
    VerticalRuleComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-authenticated-story',
    templateUrl: `./authenticated-story.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AppTopBarComponent,
        AppTopBarSectionComponent,
        NavbarBrandComponent,
        NavbarComponent,
        VerticalRuleComponent,
        NavbarLinkComponent,
        ButtonComponent,
        CircleUserIcon,
        NavbarMenuComponent,
        ActiveMarkerComponent,
    ],
})
export class AuthenticatedStoryComponent {
    private readonly router = inject(Router);

    public readonly logout = output<void>();

    protected readonly authenticatedUser = { username: 'NoNamer777' };

    protected readonly knowledgeCenterIsActive = isActive('/knowledge-center', this.router, {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
    });
}
