import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
    selector: 'dma-dropdown-container',
    template: `<ng-content />`,
    styleUrl: './dropdown-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(mouseenter)': 'onMouseenter()',
        '(mouseleave)': 'onMouseleave()',
    },
})
export class DropdownContainerComponent {
    public readonly hover = output<boolean>();

    protected onMouseenter() {
        this.hover.emit(true);
    }

    protected onMouseleave() {
        this.hover.emit(false);
    }
}
