import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { StoryComponent } from './story.component';

@Component({
    template: '',
})
class NoopComponent {}

const mockRoutes: Routes = ['', 'characters', 'campaigns'].map((path) => ({
    path: path,
    component: NoopComponent,
}));

const meta: Meta<StoryComponent> = {
    title: 'nav/AppTopBar',
    component: StoryComponent,
    args: {
        authenticated: false,
        login: fn(),
        signup: fn(),
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
    },
    decorators: [
        applicationConfig({
            providers: [provideRouter(mockRoutes, withHashLocation())],
        }),
    ],
};

export default meta;

type Story = StoryObj<StoryComponent>;

export const Unauthenticated: Story = {};

export const Authenticated: Story = {};
