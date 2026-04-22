[← Back to Library Overview](../../../../README.md#-component-library)

---

# Navbar Menu `dma-navbar-menu`

The `Navbar Menu` is a specialized navigation component designed to trigger dropdown menus within a navigation bar. It integrates the library's button and dropdown systems into a cohesive unit, supporting both click-based and hover-based interactions.

## 🏰 Overview

- **Selector**: `dma-navbar-menu`
- **Format**: Standalone Component
- **Change Detection**: `OnPush`
- **Dependencies**: `ButtonComponent`, `DropdownAnchorDirective`, `DropdownContainerComponent`

---

## 🚀 Usage

The component uses content projection to separate the trigger element from the dropdown content. The trigger is automatically wrapped in a button using the `dma-button` directive.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownMenuDirective, DropdownTriggerDirective, NavbarMenuComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-nav',
    template: `
        <dma-navbar-menu toggleOnHover>
            <span dmaDropdownTrigger>Products</span>
            
            <nav dmaDropdownMenu>
                <a href="/link-1">Feature A</a>
                <a href="/link-2">Feature B</a>
            </nav>
        </dma-navbar-menu>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarMenuComponent, DropdownTriggerDirective, DropdownMenuDirective],
})
export class NavComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name            | Type      | Default | Description                                                                                                                                |
|-----------------|-----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `toggleOnHover` | `boolean` | `false` | When enabled, the dropdown opens on mouse enter and closes on mouse leave. Uses `booleanAttribute` transform for shorthand property usage. |

### Content Projection Slots

| Selector               | Description                                                                                                  |
|------------------------|--------------------------------------------------------------------------------------------------------------|
| `[dmaDropdownTrigger]` | Projected into the main navbar button. This element serves as the label for the dropdown toggle.             |
| `[dmaDropdownMenu]`    | Projected into the `dma-dropdown-container`. Contains the list of links or actions to display when expanded. |

---

## 🧪 Examples

### Basic Click Toggle

By default, the menu requires a click interaction. This is the recommended approach for accessibility and mobile compatibility.

```html
<dma-navbar-menu>
    <span dmaDropdownTrigger>Settings</span>
    <div dmaDropdownMenu>
        <dma-dropdown-item>Profile</dma-dropdown-item>
        <dma-dropdown-item>Security</dma-dropdown-item>
    </div>
</dma-navbar-menu>
```

### Hover Activation

Apply the `toggleOnHover` attribute to enable "mega-menu" style interactions where the menu appears on hover. The component includes logic via the `#anchor` reference to handle scheduling closures when the mouse leaves the container.

```html
<dma-navbar-menu toggleOnHover>
    <ng-container dmaDropdownTrigger>
        Resources
    </ng-container>
    <ul dmaDropdownMenu>
        <li><a href="/docs">Documentation</a></li>
        <li><a href="/api">API Reference</a></li>
    </ul>
</dma-navbar-menu>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` library, released under the [MIT License](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE).
