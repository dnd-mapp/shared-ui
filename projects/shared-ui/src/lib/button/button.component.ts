import { Component, input } from '@angular/core';
import { buttonColorAttribute, DEFAULT_BUTTON_COLOR } from './button-color';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[dma-button]',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    host: {
        '[attr.dma-button]': 'color()',
    },
    imports: [],
})
export class ButtonComponent {
    public readonly color = input(DEFAULT_BUTTON_COLOR, { transform: buttonColorAttribute, alias: 'dma-button' });
}
