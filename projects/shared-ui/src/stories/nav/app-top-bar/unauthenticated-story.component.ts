import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { isActive, Router } from '@angular/router';
import {
    ActiveMarkerComponent,
    AppTopBarComponent,
    AppTopBarSectionComponent,
    ButtonComponent,
    NavbarBrandComponent,
    NavbarComponent,
    NavbarLinkComponent,
    NavbarMenuComponent,
    VerticalRuleComponent,
} from '@dnd-mapp/shared-ui';

@Component({
    selector: 'dma-unauthenticated-story',
    templateUrl: `./unauthenticated-story.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AppTopBarComponent,
        AppTopBarSectionComponent,
        NavbarBrandComponent,
        NavbarComponent,
        VerticalRuleComponent,
        NavbarLinkComponent,
        ButtonComponent,
        NavbarMenuComponent,
        ActiveMarkerComponent,
    ],
})
export class UnauthenticatedStoryComponent {
    private readonly router = inject(Router);

    public readonly login = output<void>();

    public readonly signup = output<void>();

    protected readonly knowledgeCenterIsActive = isActive('/knowledge-center', this.router, {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
    });
}
