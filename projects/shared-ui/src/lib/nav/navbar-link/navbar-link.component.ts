import { ChangeDetectionStrategy, Component, inject, input, OnInit, Signal } from '@angular/core';
import { isActive, Router, RouterLink } from '@angular/router';
import { ActiveMarkerComponent } from '../active-marker/active-marker.component';

@Component({
    selector: 'dma-navbar-link',
    templateUrl: './navbar-link.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'block rounded-md p-2 hover:bg-neutral-200 hover:text-neutral-900 active:bg-neutral-300 cursor-pointer',
    },
    imports: [RouterLink, ActiveMarkerComponent],
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
