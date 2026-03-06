import { provideRouter, withHashLocation } from '@angular/router';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';
import { applicationConfig, argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DefaultStoryComponent } from './default/default-story.component';

const meta: Meta<NavbarBrandComponent> = {
    title: 'nav/NavbarBrand',
    component: NavbarBrandComponent,
    args: {
        brandName: 'D&D Mapp',
    },
    argTypes: {
        imgSrc: {
            description: 'The source URL for the brand logo image.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
        brandName: {
            description: 'The text string to be displayed as the brand name.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
    },
    decorators: [
        applicationConfig({
            providers: [provideRouter([], withHashLocation())],
        }),
    ],
};

export default meta;

export const Default: StoryObj<DefaultStoryComponent> = {
    decorators: [moduleMetadata({ imports: [DefaultStoryComponent] })],
    render: (args) => ({
        props: args,
        template: `<dma-default-story ${argsToTemplate(args)} />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<dma-navbar-brand imgSrc="assets/images/favicon-32.png" brandName="D&D Mapp" />`,
            },
        },
    },
};
