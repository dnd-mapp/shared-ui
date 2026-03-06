import { InputComponent } from '@dnd-mapp/shared-ui';
import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DefaultStoryComponent } from './default/default-story.component';
import { FormsStoryComponent } from './forms/forms-story.component';
import { ReadonlyStoryComponent } from './readonly/readonly-story.component';

const meta: Meta<InputComponent> = {
    component: InputComponent,
    title: 'Forms/Input',
    argTypes: {
        inputId: {
            description: 'The unique ID for the internal input and label association.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
        label: {
            description: 'The text label displayed above the input field.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
        placeholder: {
            description: 'The hint text displayed when the input is empty.',
            type: {
                name: 'string',
            },
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
            },
        },
        readonly: {
            description: 'If true, the input is present but non-editable.',
            type: {
                name: 'boolean',
            },
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        disabled: {
            description: 'Controls the disabled state. Automatically handled by Reactive Forms.',
            type: {
                name: 'boolean',
            },
            table: {
                category: 'Models (Two-way Data Binding)',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        value: {
            description: 'The current text value.',
            type: {
                name: 'string',
            },
            table: {
                category: 'Models (Two-way Data Binding)',
                defaultValue: {
                    summary: '',
                },
            },
        },
    },
};

export default meta;

export const Default: StoryObj<DefaultStoryComponent> = {
    args: {
        inputId: 'spell-name-input',
        label: 'Spell Name',
        value: 'Lightning Bolt',
        placeholder: 'Fireball',
        disabled: false,
        readonly: false,
        valueChange: fn(),
    },
    argTypes: {
        valueChange: {
            action: 'valueChange',
        },
    },
    decorators: [moduleMetadata({ imports: [DefaultStoryComponent] })],
    render: (args) => ({
        props: args,
        component: DefaultStoryComponent,
        template: `<dma-story ${argsToTemplate(args)} />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `
                    <dma-input
                        inputId="input-field"
                        label="Input Label"
                        placeholder="Input placeholder"
                        [value]="value()"
                        (valueChange)="onValueChange($event)"
                    />
                `,
            },
        },
    },
};

export const Readonly: StoryObj<ReadonlyStoryComponent> = {
    decorators: [moduleMetadata({ imports: [ReadonlyStoryComponent] })],
    render: (args) => ({
        props: args,
        component: ReadonlyStoryComponent,
        template: `<dma-readonly-story />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<dma-input inputId="id-field" label="ID" value="" readonly />`,
            },
        },
    },
};

export const Forms: StoryObj<FormsStoryComponent> = {
    args: {
        inputId: 'spell-name-input',
        label: 'Spell Name',
        placeholder: 'Fireball',
    },
    decorators: [moduleMetadata({ imports: [FormsStoryComponent] })],
    render: (args) => ({
        props: args,
        component: FormsStoryComponent,
        template: `<dma-forms-story ${argsToTemplate(args)} />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `
                    <dma-input
                        inputId="name-field"
                        label="Spell name"
                        placeholder="Fireball"
                        formControlName="input"
                    />`,
            },
        },
    },
};
