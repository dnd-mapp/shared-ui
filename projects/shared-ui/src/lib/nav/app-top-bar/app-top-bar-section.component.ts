import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { sectionPositionAttribute, SectionPositions } from './section-position';

@Component({
    selector: 'dma-app-top-bar-section',
    template: `<ng-content />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'flex items-center gap-3',
        '[class.grow-1]': 'positionedAtStart()',
    },
    imports: [],
})
export class AppTopBarSectionComponent {
    public readonly position = input(SectionPositions.START, { transform: sectionPositionAttribute });

    protected readonly positionedAtStart = computed(() => this.position() === SectionPositions.START);
}
