import { ButtonColors } from '@dnd-mapp/shared-ui';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { LeadingIconStoryComponent } from './leading-icon-story.component';
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
        label: {
            description:
                'The content projected into the button. Accepts plain text, HTML strings, or nested components.',
            table: {
                category: 'Contents',
                type: {
                    summary: 'string | HTMLElement',
                    detail: 'Can be a simple string or any valid HTML/Angular template content.',
                },
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
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<button type="button" dma-button="primary" (click)="onAttack()">Attack!</button>`,
            },
        },
    },
};

export const Base: Story = {
    args: {
        color: ButtonColors.BASE,
        label: 'Dismiss',
    },
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<button type="button" dma-button (click)="onDismiss()">Dismiss</button>`,
            },
        },
    },
};

export const LeadingIcon: Story = {
    decorators: [moduleMetadata({ imports: [LeadingIconStoryComponent] })],
    render: (args) => ({
        props: args,
        component: LeadingIconStoryComponent,
        template: `<dma-leading-icon-story />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `
                    <button type="button" dma-button>
                        <dma-icon dma-circle-user-icon />
                        NoNamer777
                    </button>
                `,
            },
        },
    },
};
