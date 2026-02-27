import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'dma-active-marker',
    templateUrl: './active-marker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'block',
        '[class.text-neutral-600]': 'inactive()',
        '[class.font-normal]': 'inactive()',
        '[class.font-semibold]': 'active()',
    },
    imports: [],
})
export class ActiveMarkerComponent {
    public readonly label = input.required<string>();

    public readonly active = input(false, { transform: booleanAttribute });

    protected readonly inactive = computed(() => !this.active());
}
