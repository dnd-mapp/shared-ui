import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import type { User } from './user';

@Component({
    selector: 'dma-page',
    templateUrl: './page.component.html',
    styleUrl: './page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HeaderComponent],
})
export class PageComponent {
    public user: User | null = null;

    protected onLogout() {
        this.user = null;
    }

    protected onLogin() {
        this.user = { name: 'Jane Doe' };
    }

    protected onCreateAccount() {
        this.user = { name: 'Jane Doe' };
    }
}
