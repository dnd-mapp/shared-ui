import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'dma-navbar-brand',
    templateUrl: './navbar-brand.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
})
export class NavbarBrandComponent {
    public readonly imgSrc = input.required<string>();

    public readonly brandName = input.required<string>();
}
