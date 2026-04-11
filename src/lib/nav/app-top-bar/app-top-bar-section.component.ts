import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { sectionPositionAttribute, SectionPositions } from './section-position';

@Component({
    selector: 'dma-app-top-bar-section',
    template: `<ng-content />`,
    styleUrl: './app-top-bar-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.position]': 'position()',
    },
    imports: [],
})
export class AppTopBarSectionComponent {
    public readonly position = input(SectionPositions.START, { transform: sectionPositionAttribute });
}
