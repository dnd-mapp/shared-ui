import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import {
    AppTopBarComponent,
    AppTopBarSectionComponent,
    DEFAULT_SECTION_POSITION,
    SectionPositions,
} from '@dnd-mapp/shared-ui';
import { applicationConfig, argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AuthenticatedStoryComponent } from './authenticated/authenticated-story.component';
import { UnauthenticatedStoryComponent } from './unauthenticated/unauthenticated-story.component';

const meta: Meta<AppTopBarComponent & AppTopBarSectionComponent> = {
    title: 'nav/AppTopBar',
    component: AuthenticatedStoryComponent,
    argTypes: {
        position: {
            description:
                'Determines the alignment. Sections with `position="start"` will `flex-grow` to fill available space, pushing "end" sections to the right.',
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
};

export default meta;

@Component({ template: '' })
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

export const Authenticated: StoryObj<AuthenticatedStoryComponent> = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [AuthenticatedStoryComponent] }),
    ],
    args: {
        logout: fn(),
    },
    argTypes: {
        logout: { action: 'logout' },
    },
    render: (args) => ({
        props: args,
        component: AuthenticatedStoryComponent,
        template: `<dma-authenticated-story ${argsToTemplate(args)} />`,
    }),
};

export const Unauthenticated: StoryObj<UnauthenticatedStoryComponent> = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [UnauthenticatedStoryComponent] }),
    ],
    args: {
        login: fn(),
        signup: fn(),
    },
    argTypes: {
        login: { action: 'login' },
        signup: { action: 'signup' },
    },
    render: (args) => ({
        props: args,
        component: UnauthenticatedStoryComponent,
        template: `<dma-unauthenticated-story ${argsToTemplate(args)} />`,
    }),
};
