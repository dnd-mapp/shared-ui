import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from './button.component';
import type { User } from './user';

@Component({
    selector: 'dma-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class HeaderComponent {
    public readonly user = input<User | null>(null);

    public readonly login = output<Event>();

    public readonly logout = output<Event>();

    public readonly createAccount = output<Event>();
}
