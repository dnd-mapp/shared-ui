import { Component, computed, input } from '@angular/core';
import { buttonColorAttribute, ButtonColors, DEFAULT_BUTTON_COLOR } from './button-color';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    host: {
        'class': 'font-semibold cursor-pointer py-2 px-4 rounded-md',
        '[class.text-neutral-900]': 'isBase()',
        '[class.bg-neutral-100]': 'isBase()',
        '[class.hover:bg-neutral-200]': 'isBase()',
        '[class.active:bg-neutral-300]': 'isBase()',
        '[class.text-neutral-100]': 'isPrimary()',
        '[class.bg-blue-400]': 'isPrimary()',
        '[class.hover:bg-blue-500]': 'isPrimary()',
        '[class.active:bg-blue-600]': 'isPrimary()',
    },
    imports: [],
})
export class ButtonComponent {
    public readonly color = input(DEFAULT_BUTTON_COLOR, { transform: buttonColorAttribute, alias: 'dma-button' });

    protected readonly isBase = computed(() => this.color() === ButtonColors.BASE);

    protected readonly isPrimary = computed(() => this.color() === ButtonColors.PRIMARY);
}
