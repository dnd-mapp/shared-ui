import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isActive, Router, RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { ActiveMarkerComponent } from '../active-marker/active-marker.component';

@Component({
    selector: 'dma-navbar-link',
    templateUrl: './navbar-link.component.html',
    styleUrl: './navbar-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(click)': 'onClick()',
    },
    imports: [RouterLink, ActiveMarkerComponent],
})
export class NavbarLinkComponent implements OnInit {
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

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

    protected onClick() {
        from(this.router.navigateByUrl(this.route())).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
}
