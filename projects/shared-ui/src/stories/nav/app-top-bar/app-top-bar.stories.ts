import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import {
    AppTopBarComponent,
    AppTopBarSectionComponent,
    DEFAULT_SECTION_POSITION,
    SectionPositions,
} from '@dnd-mapp/shared-ui';
import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AuthenticatedStoryComponent } from './authenticated-story.component';
import { UnauthenticatedStoryComponent } from './unauthenticated-story.component';

@Component({
    template: '',
})
class NoopComponent {}

const mockRoutes: Routes = [
    {
        path: 'characters',
        component: NoopComponent,
    },
    {
        path: 'campaigns',
        component: NoopComponent,
    },
    {
        path: 'knowledge-center',
        component: NoopComponent,
        children: [
            {
                path: 'game-mechanics',
                component: NoopComponent,
            },
            {
                path: 'spells',
                component: NoopComponent,
            },
            {
                path: 'monsters',
                component: NoopComponent,
            },
        ],
    },
];

const meta: Meta<AppTopBarComponent & AppTopBarSectionComponent> = {
    title: 'nav/AppTopBar',
    component: AuthenticatedStoryComponent,
    argTypes: {
        position: {
            description:
                "Determines the alignment. `'start'` sections will grow to fill available space if applicable.",
            table: {
                category: 'AppTopBarSectionComponent',
                subcategory: 'Inputs',
                defaultValue: {
                    summary: `'${DEFAULT_SECTION_POSITION}'`,
                },
                type: {
                    summary: 'SectionPosition',
                    detail: Object.values(SectionPositions)
                        .map((position) => `'${position}'`)
                        .join(' | '),
                },
            },
        },
    },
    decorators: [
        applicationConfig({
            providers: [provideRouter(mockRoutes, withHashLocation())],
        }),
    ],
};

export default meta;

type Story = StoryObj<AuthenticatedStoryComponent>;

export const Authenticated: Story = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [AuthenticatedStoryComponent] }),
    ],
    render: (args) => ({
        props: args,
        component: AuthenticatedStoryComponent,
        template: `<dma-authenticated-story />`,
    }),
};

export const Unauthenticated: Story = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [UnauthenticatedStoryComponent] }),
    ],
    render: (args) => ({
        props: args,
        component: UnauthenticatedStoryComponent,
        template: `<dma-unauthenticated-story />`,
    }),
};
