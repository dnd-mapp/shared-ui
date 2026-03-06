import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'dma-active-marker',
    templateUrl: './active-marker.component.html',
    styleUrl: './active-marker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.active]': 'active()',
    },
    imports: [],
})
export class ActiveMarkerComponent {
    public readonly label = input.required<string>();

    public readonly active = input(false, { transform: booleanAttribute });
}
