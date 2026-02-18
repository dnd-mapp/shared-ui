import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonColors, ButtonComponent, buttonColorAttribute } from '@dnd-mapp/shared-ui';
import { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

@Component({
    selector: 'dma-story',
    template: `<button type="button" [dma-button]="color()" (click)="onButtonClick.emit($event)">
        {{ label() }}
    </button>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class StoryComponent {
    public readonly color = input.required({ transform: buttonColorAttribute });

    public readonly label = input.required<string>();

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    public readonly onButtonClick = output<PointerEvent>();
}

const meta: Meta<StoryComponent> = {
    title: 'Button',
    component: StoryComponent,
    args: {
        onButtonClick: fn(),
    },
    argTypes: {
        onButtonClick: {
            action: 'onButtonClick',
            table: {
                disable: true,
            },
        },
        color: {
            name: 'dma-button',
            description: 'Determines the visual style of the button.',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'base',
                },
                type: {
                    summary: 'ButtonColor',
                    detail: Object.values(ButtonColors).join(' | '),
                },
            },
            control: 'select',
            options: Object.values(ButtonColors),
        },
    },
};

export default meta;

type Story = StoryObj<StoryComponent>;

export const Primary: Story = {
    args: {
        color: ButtonColors.PRIMARY,
        label: 'Attack!',
    },
};

export const Base: Story = {
    args: {
        color: ButtonColors.BASE,
        label: 'Dismiss',
    },
};
