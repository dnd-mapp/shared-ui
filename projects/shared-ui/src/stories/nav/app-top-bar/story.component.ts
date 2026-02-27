import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
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
        ButtonComponent,
        CircleUserIcon,
        NavbarMenuComponent,
        ActiveMarkerComponent,
    ],
})
export class StoryComponent {
    private readonly router = inject(Router);

    public readonly authenticated = input(false);

    public readonly login = output<void>();

    public readonly signup = output<void>();

    public readonly logout = output<void>();

    protected readonly authenticatedUser = computed(() => (this.authenticated() ? { username: 'NoNamer777' } : null));

    protected readonly knowledgeCenterIsActive = isActive('/knowledge-center', this.router, {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
    });
}
