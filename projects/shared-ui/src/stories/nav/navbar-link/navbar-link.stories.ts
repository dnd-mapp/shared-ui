import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { StoryComponent } from './story.component';

@Component({ template: '' })
class NoopComponent {}

const mockRoutes: Routes = ['my-route'].map((path) => ({
    path: path,
    component: NoopComponent,
}));

const meta: Meta<StoryComponent> = {
    title: 'nav/NavbarLink',
    component: StoryComponent,
    decorators: [
        applicationConfig({
            providers: [provideRouter(mockRoutes, withHashLocation())],
        }),
    ],
    args: {
        label: 'My route',
        route: 'my-route',
    },
    argTypes: {
        label: {
            description: 'The text to be displayed inside the link.',
            type: {
                name: 'string',
                required: true,
            },
            table: {
                category: 'Inputs',
            },
        },
        route: {
            description: 'The destination URL path (passed to `routerLink`).',
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

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
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
