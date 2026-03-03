import { ButtonColors, ButtonComponent } from '@dnd-mapp/shared-ui';
import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LeadingIconStoryComponent } from './leading-icon-story.component';
import { StoryComponent } from './story.component';

const meta: Meta<ButtonComponent> = {
    title: 'Button',
    component: ButtonComponent,
    argTypes: {
        color: {
            name: 'color (`dma-button`)',
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

export const Primary: StoryObj<StoryComponent> = {
    args: {
        color: ButtonColors.PRIMARY,
        label: 'Attack!',
    },
    decorators: [moduleMetadata({ imports: [StoryComponent] })],
    render: (args) => ({
        props: args,
        component: StoryComponent,
        template: `<dma-story ${argsToTemplate(args)} />`,
    }),
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

export const Base: StoryObj<StoryComponent> = {
    args: {
        color: ButtonColors.BASE,
        label: 'Dismiss',
    },
    decorators: [moduleMetadata({ imports: [StoryComponent] })],
    render: (args) => ({
        props: args,
        component: StoryComponent,
        template: `<dma-story ${argsToTemplate(args)} />`,
    }),
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

export const Danger: StoryObj<StoryComponent> = {
    args: {
        color: ButtonColors.DANGER,
        label: 'Log out',
    },
    decorators: [moduleMetadata({ imports: [StoryComponent] })],
    render: (args) => ({
        props: args,
        component: StoryComponent,
        template: `<dma-story ${argsToTemplate(args)} />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<button type="button" dma-button="danger" (click)="onLogout()">Log out</button>`,
            },
        },
    },
};

export const LeadingIcon: StoryObj<LeadingIconStoryComponent> = {
    decorators: [moduleMetadata({ imports: [LeadingIconStoryComponent] })],
    render: (args) => ({
        props: args,
        component: LeadingIconStoryComponent,
        template: `<dma-leading-icon-story ${argsToTemplate(args)} />`,
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
