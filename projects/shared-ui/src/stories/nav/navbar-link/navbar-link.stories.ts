import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';
import { applicationConfig, argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DefaultStoryComponent } from './default/default-story.component';

const meta: Meta<NavbarLinkComponent> = {
    title: 'nav/NavbarLink',
    component: NavbarLinkComponent,
    args: {
        label: 'My route',
        route: 'my-route',
    },
    argTypes: {
        label: {
            description: 'The text label passed to the internal active marker.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
        route: {
            description: 'The destination URL path used for both navigation and active state matching.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
    },
};

export default meta;

@Component({ template: '' })
class NoopComponent {}

const mockRoutes: Routes = [
    {
        path: 'my-route',
        component: NoopComponent,
    },
];

export const Default: StoryObj<DefaultStoryComponent> = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [DefaultStoryComponent] }),
    ],
    render: (args) => ({
        props: args,
        template: `<dma-default-story ${argsToTemplate(args)} />`,
    }),
    parameters: {
        docs: {
            source: {
                type: 'code',
                language: 'html',
                code: `<dma-navbar-link route="my-route" label="My route" />`,
            },
        },
    },
};
