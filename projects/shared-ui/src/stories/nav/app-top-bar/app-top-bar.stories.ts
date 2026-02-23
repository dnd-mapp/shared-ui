import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { StoryComponent } from './story.component';

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

const meta: Meta<StoryComponent> = {
    title: 'nav/AppTopBar',
    component: StoryComponent,
    args: {
        authenticated: false,
        login: fn(),
        signup: fn(),
        logout: fn(),
    },
    argTypes: {
        login: {
            action: 'login',
            table: {
                disable: true,
            },
        },
        signup: {
            action: 'signup',
            table: {
                disable: true,
            },
        },
        logout: {
            action: 'logout',
            table: {
                disable: true,
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

type Story = StoryObj<StoryComponent>;

export const Default: Story = {};
