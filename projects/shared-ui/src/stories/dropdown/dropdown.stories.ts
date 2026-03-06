import { Component } from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { DEFAULT_DROPDOWN_POSITIONS, DropdownAnchorDirective, DropdownContainerComponent } from '@dnd-mapp/shared-ui';
import { applicationConfig, argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { HoverStoryComponent } from './hover/hover-story.component';
import { ToggleStoryComponent } from './toggle/toggle-story.component';

const meta: Meta<DropdownAnchorDirective & DropdownContainerComponent> = {
    title: 'Dropdown',
    component: ToggleStoryComponent,
    argTypes: {
        dropdownContainerTemplateRef: {
            name: 'dmaAnchorDropdown',
            description: 'The template to be rendered inside the overlay.',
            type: {
                name: 'literal',
                value: undefined,
                required: true,
            },
            table: {
                type: {
                    summary: 'TemplateRef<unknown>',
                },
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Inputs',
            },
        },
        positions: {
            description: 'Array of preferred positions for the overlay. ',
            table: {
                type: {
                    summary: 'ConnectionPosition[]',
                    detail: `{\n\toriginX: 'start' | 'center' | 'end';\n\toriginY: 'top' | 'center' | 'bottom';\n\toverlayX: 'start' | 'center' | 'end';\n\toverlayY: 'top' | 'center' | 'bottom';\n\tweight?: number; offsetX?: number;\n\toffsetY?: number; panelClass?: string | string[];\n}[]`,
                },
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
        open: {
            description: 'Programmatically opens the dropdown.',
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Methods',
                type: {
                    summary: '() => void',
                },
            },
        },
        close: {
            description: 'Programmatically closes the dropdown and disposes of the overlay.',
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Methods',
                type: {
                    summary: '() => void',
                },
            },
        },
        scheduleClose: {
            description: 'Schedules a close action with a 100ms debounce. Useful for hover interactions.',
            table: {
                category: 'DmaDropdownAnchorDirective',
                subcategory: 'Methods',
                type: {
                    summary: '(shouldClose: boolean) => void',
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

export const Toggle: StoryObj<ToggleStoryComponent> = {
    decorators: [moduleMetadata({ imports: [ToggleStoryComponent] })],
    args: {
        dropdownToggle: fn(),
        logout: fn(),
    },
    argTypes: {
        dropdownToggle: { action: 'dropdownToggle' },
        logout: { action: 'logout' },
    },
    render: (args) => ({
        component: ToggleStoryComponent,
        props: args,
        template: `<dma-toggle-story ${argsToTemplate(args)} />`,
    }),
};

export const Hover: StoryObj<HoverStoryComponent> = {
    decorators: [
        applicationConfig({ providers: [provideRouter(mockRoutes, withHashLocation())] }),
        moduleMetadata({ imports: [HoverStoryComponent] }),
    ],
    args: {
        dropdownToggle: fn(),
    },
    argTypes: {
        dropdownToggle: { action: 'dropdownToggle' },
    },
    render: (args) => ({
        component: HoverStoryComponent,
        props: args,
        template: `<dma-hover-story ${argsToTemplate(args)} />`,
    }),
};
