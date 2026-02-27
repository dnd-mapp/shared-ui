[← Back to Library Overview](../../../../README.md#-component-library)

---

# Navbar Menu `dma-navbar-menu`

The `Navbar Menu` is a specialized navigation component designed to trigger dropdown menus within a navigation bar. It integrates seamlessly with the library's dropdown system, supporting both click-based and hover-based interactions for improved user experience.

## 🏰 Overview

| Feature              | Details              |
|----------------------|----------------------|
| **Selector**         | `dma-navbar-menu`    |
| **Format**           | Standalone Component |
| **Change Detection** | `OnPush`             |

---

## 🚀 Usage

The component uses content projection to separate the trigger element from the dropdown content.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarMenuComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-nav',
    template: `
        <dma-navbar-menu [toggleOnHover]="true">
            <ng-container ngProjectAs="dropdown-trigger">
                <span>Products</span>
            </ng-container>
            <ng-container ngProjectAs="dropdown-menu">
                <a href="/link-1">Feature A</a>
                <a href="/link-2">Feature B</a>
            </ng-container>
        </dma-navbar-menu>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarMenuComponent],
})
export class NavComponent {
}
```

---

## 🎨 API Reference

### Inputs

| Name            | Type      | Default | Description                                                                                                |
|-----------------|-----------|---------|------------------------------------------------------------------------------------------------------------|
| `toggleOnHover` | `boolean` | `false` | Whether the dropdown should open and close automatically when the mouse enters or leaves the trigger area. |

### Content Projection Slots

| Selector           | Description                                               |
|--------------------|-----------------------------------------------------------|
| `dropdown-trigger` | The element that acts as the button to toggle the menu.   |
| `dropdown-menu`    | The container holding the navigation links or menu items. |

---

## 🧪 Examples

### Basic Click Toggle

By default, the menu requires a click interaction to open, which is ideal for mobile-responsive headers or complex navigation.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarMenuComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-basic-nav',
    template: `
        <dma-navbar-menu>
            <dropdown-trigger>Settings</dropdown-trigger>
            <dropdown-menu>
                <ul>
                    <li>Profile</li>
                    <li>Security</li>
                </ul>
            </dropdown-menu>
        </dma-navbar-menu>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarMenuComponent],
})
export class BasicNavComponent {
}
```

### Hover Activation

Use the `toggleOnHover` input to create a more fluid desktop navigation experience where menus appear instantly on mouseenter.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarMenuComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-hover-nav',
    template: `
        <dma-navbar-menu toggleOnHover>
            <ng-container ngProjectAs="dropdown-trigger">Resources</ng-container>
            <ng-container ngProjectAs="dropdown-menu">
                <nav-item>Documentation</nav-item>
                <nav-item>API Reference</nav-item>
            </ng-container>
        </dma-navbar-menu>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarMenuComponent],
})
export class HoverNavComponent {}
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` internal library. All rights reserved. Proprietary and confidential.
