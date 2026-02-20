import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import {
    AppTopBarComponent,
    AppTopBarSectionComponent,
    ButtonComponent,
    CircleUserIcon,
    DropdownContainerComponent,
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
        DropdownContainerComponent,
    ],
})
export class StoryComponent {
    public readonly authenticated = input(false);

    protected readonly authenticatedUser = computed(() => (this.authenticated() ? { username: 'NoNamer777' } : null));

    public readonly login = output<void>();

    public readonly signup = output<void>();
}
