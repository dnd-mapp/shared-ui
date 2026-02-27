[← Back to Library Overview](../../../../README.md#-component-library)

---

# Navbar Component `nav[dma-navbar]`

## 🏰 Overview

The `NavbarComponent` serves as a semantic navigation container for the `@dnd-mapp/shared-ui` library. It uses an attribute selector on the standard HTML `<nav>` element to provide consistent layout styling while maintaining accessibility and SEO standards.

Designed for high-performance applications, it utilizes `OnPush` change detection and leverages Tailwind CSS for a flexible, horizontal flexbox layout with standardized spacing.

| Feature              | Details                                |
|----------------------|----------------------------------------|
| **Selector**         | `nav[dma-navbar]`                      |
| **Format**           | Standalone Component (Attribute-based) |
| **Change Detection** | `ChangeDetectionStrategy.OnPush`       |

---

## 🚀 Usage

Apply the `dma-navbar` attribute to a `<nav>` element. Use content projection to include your navigation links or branding elements.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: `<nav dma-navbar><!-- Content is projected here --></nav>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarComponent],
})
export class RootComponent {
}
```

---

## 🎨 API Reference

### Content Projection

| Slot           | Description                                                  |
|----------------|--------------------------------------------------------------|
| `<ng-content>` | Default slot for navigation links, logos, or action buttons. |

### Host Bindings

| Property | Value                     | Description                                       |
|----------|---------------------------|---------------------------------------------------|
| `class`  | `flex items-center gap-4` | Applies horizontal alignment and default spacing. |

---

## 🧪 Examples

### Basic Navigation

A simple implementation featuring a logo and primary navigation links.

```html
<nav dma-navbar>
    <img src="logo.svg" alt="App Logo" class="h-8" />
    <a href="/dashboard">Dashboard</a>
    <a href="/settings">Settings</a>
</nav>
```

### Navbar with Action Buttons

Using the flex layout to separate navigation items from a call-to-action button.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-header',
    template: `
        <nav dma-navbar>
            <span class="font-bold">D&D Mapp</span>
            <div class="flex-1"></div>
            <button class="btn-primary">Logout</button>
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarComponent],
})
export class HeaderComponent {}
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` internal library. All rights reserved. Proprietary and confidential.
