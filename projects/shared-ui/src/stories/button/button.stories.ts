import { ButtonColors } from '@dnd-mapp/shared-ui';
import { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { StoryComponent } from './story.component';

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
