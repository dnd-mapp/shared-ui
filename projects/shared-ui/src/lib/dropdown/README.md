[← Back to Library Overview](../../../README.md#-component-library)

---

# Dropdown Anchor

The `DropdownAnchor` is a powerful directive that provides a flexible way to attach and manage overlays (dropdowns, menus, or tooltips) to any DOM element. It leverages the `@angular/cdk/overlay` to handle complex positioning and lifecycle management.

While it is often used in conjunction with the `DropdownContainerComponent` for a consistent look and feel, it can be used with any `TemplateRef`.

## 🏰 Overview

- **Selector:** `[dmaDropdownAnchor]`
- **Export As:** `dmaDropdownAnchor`
- **Format:** Angular Attribute Directive

## Installation

The component is part of the `@dnd-mapp/shared-ui` library.

```typescript
import { DropdownAnchorDirective, DropdownContainerComponent } from '@dnd-mapp/shared-ui';
```

## 🚀 Usage

To use the dropdown, define a template for your content and attach the `dmaDropdownAnchor` directive to your trigger element (like a button).

### Basic Template Usage

```html
<!-- The Trigger -->
<button [dmaDropdownAnchor]="myDropdown">Click me</button>

<!-- The Dropdown Content -->
<ng-template #myDropdown>
    <dma-dropdown-container>
        <ul>
            <li>Option 1</li>
            <li>Option 2</li>
        </ul>
    </dma-dropdown-container>
</ng-template>
```

### Hover Mode

The `DropdownAnchor` supports a hover-to-open mode. It includes a built-in 100ms debounce timer to prevent the dropdown from flickering or closing immediately when moving the mouse between the anchor and the container.

```html
<button [dmaDropdownAnchor]="myDropdown" [toggleOnHover]="true" #anchor="dmaDropdownAnchor">Hover me</button>

<ng-template #myDropdown>
   <!-- 
       The DropdownContainer provides the (hover) output 
       to help keep the anchor open while interacting with the menu 
   -->
   <dma-dropdown-container (hover)="anchor.scheduleHide(!$event)">
       <p>Hovering over this element keeps the menu open!</p>
   </dma-dropdown-container>
</ng-template>
```

## 🎨 API Reference

### DropdownAnchorDirective

#### Inputs

| Name                | Type                   | Default                      | Description                                                 |
|---------------------|------------------------|------------------------------|-------------------------------------------------------------|
| `dmaDropdownAnchor` | `TemplateRef<unknown>` | *Required*                   | The template to be rendered inside the overlay.             |
| `positions`         | `ConnectedPosition[]`  | `DEFAULT_DROPDOWN_POSITIONS` | Array of preferred positions for the overlay.               |
| `toggleOnHover`     | `boolean`              | `false`                      | Whether the dropdown should open on hover instead of click. |

#### Outputs

| Name             | Type      | Description                                                      |
|------------------|-----------|------------------------------------------------------------------|
| `dropdownToggle` | `boolean` | Emits `true` when the dropdown opens and `false` when it closes. |

#### Methods

| Name                                | Parameters | Description                                                                   |
|-------------------------------------|------------|-------------------------------------------------------------------------------|
| `show()`                            | None       | Programmatically opens the dropdown.                                          |
| `scheduleHide(shouldHide: boolean)` | `boolean`  | Schedules a hide action with a 500ms debounce. Useful for hover interactions. |

---

### DropdownContainerComponent

A presentational component with predefined styling (shadows, borders, and background).

#### Outputs

| Name    | Type      | Description                                               |
|---------|-----------|-----------------------------------------------------------|
| `hover` | `boolean` | Emits `true` on `mouseenter` and `false` on `mouseleave`. |

## 🧪 Examples

### Custom Positioning

You can pass a custom configuration to control where the dropdown appears relative to the anchor.

```typescript
import { ConnectedPosition } from '@angular/cdk/overlay';

export const MY_CUSTOM_POSITION: ConnectedPosition[] = [
    { 
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
        offsetX: 10
    }
];
```

```html
<button [dmaDropdownAnchor]="myDropdown" [positions]="MY_CUSTOM_POSITION">Right Aligned</button>
```

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
