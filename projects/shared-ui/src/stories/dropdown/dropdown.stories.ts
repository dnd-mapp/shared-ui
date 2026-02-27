import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { DEFAULT_DROPDOWN_POSITIONS, DropdownAnchorDirective, DropdownContainerComponent } from '@dnd-mapp/shared-ui';
import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HoverStoryComponent } from './hover-story.component';
import { ToggleStoryComponent } from './toggle-story.component';

@Component({
    selector: 'dma-noop',
    template: '',
})
class NoopComponent {}

const mockRoutes: Routes = [
    {
        path: 'knowledge',
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
                path: 'monster-stats',
                component: NoopComponent,
            },
        ],
    },
];

const meta: Meta<ToggleStoryComponent & DropdownAnchorDirective & DropdownContainerComponent> = {
    title: 'Dropdown',
    component: ToggleStoryComponent,
    argTypes: {
        dropdownContainerTemplateRef: {
            name: 'dmaAnchorDropdown',
            description: 'The template to be rendered inside the overlay.',
            type: {
                name: 'literal',
                value: 'TemplateRef<unknown>',
                required: true,
            },
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Inputs',
            },
        },
        positions: {
            description: 'Array of preferred positions for the overlay. ',
            type: {
                name: 'array',
                value: {
                    name: 'literal',
                    value: 'ConnectedPosition',
                },
            },
            table: {
                defaultValue: {
                    summary: 'DEFAULT_DROPDOWN_POSITIONS',
                    detail: JSON.stringify(DEFAULT_DROPDOWN_POSITIONS, null, 2),
                },
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Inputs',
            },
        },
        toggleOnHover: {
            description: 'Whether the dropdown should open on hover instead of click.',
            type: {
                name: 'boolean',
            },
            table: {
                defaultValue: {
                    summary: 'false',
                },
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Inputs',
            },
        },
        dropdownToggle: {
            description: 'Emits `true` when the dropdown opens and `false` when it closes.',
            type: {
                name: 'boolean',
            },
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Outputs',
            },
        },
        show: {
            description: 'Programmatically opens the dropdown.',
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Methods',
                type: {
                    summary: '() => void',
                },
            },
        },
        scheduleHide: {
            description: 'Schedules a hide action with a 100ms debounce. Useful for hover interactions.',
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Methods',
                type: {
                    summary: '(shouldHide: boolean) => void',
                },
            },
        },
        hover: {
            description: 'Emits `true` on `mouseenter` and `false` on `mouseleave`.',
            table: {
                category: 'DropdownContainerComponent',
                subcategory: 'Outputs',
                type: {
                    summary: '() => boolean',
                },
            },
        },
    },
};

export default meta;

type Story = StoryObj<ToggleStoryComponent>;

export const Toggle: Story = {};

export const Hover: Story = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [HoverStoryComponent] }),
    ],
    render: (args) => ({
        component: HoverStoryComponent,
        props: args,
        template: `<dma-hover-story />`,
    }),
};
