import { provideRouter, withHashLocation } from '@angular/router';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { StoryComponent } from './story.component';

const meta: Meta<StoryComponent & NavbarBrandComponent> = {
    title: 'nav/NavbarBrand',
    component: StoryComponent,
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

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
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
