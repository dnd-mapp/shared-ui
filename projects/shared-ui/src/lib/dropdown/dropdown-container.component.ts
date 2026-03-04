import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
    selector: 'dma-dropdown-container',
    template: `<ng-content />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class':
            'block w-full shadow-sm border border-neutral-200 rounded-lg bg-neutral-50 scrollbar scrollbar-w-2 scrollbar-thumb-rounded-sm scrollbar-thumb-neutral-400',
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
