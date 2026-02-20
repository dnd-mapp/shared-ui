import { ChangeDetectionStrategy, Component, inject, input, OnInit, Signal } from '@angular/core';
import { isActive, Router, RouterLink } from '@angular/router';

@Component({
    selector: 'dma-navbar-link',
    templateUrl: './navbar-link.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'block hover:text-neutral-900',
        '[class.text-neutral-600]': '!isActive()',
        '[class.font-semibold]': 'isActive()',
    },
    imports: [RouterLink],
})
export class NavbarLinkComponent implements OnInit {
    private readonly router = inject(Router);

    public readonly label = input.required<string>();

    public readonly route = input.required<string>();

    protected isActive: Signal<boolean>;

    public ngOnInit() {
        this.isActive = isActive(this.route(), this.router, {
            paths: 'subset',
            queryParams: 'subset',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
