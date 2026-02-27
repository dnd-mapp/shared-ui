import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
    selector: 'dma-dropdown-container',
    template: `<ng-content />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'block w-full shadow-md border border-neutral-200 rounded-md bg-neutral-50 p-1',
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
