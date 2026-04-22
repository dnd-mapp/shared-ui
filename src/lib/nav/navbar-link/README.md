[← Back to Library Overview](../../../../README.md#-component-library)

---

# NavbarLink

A navigation-aware component designed for use within navigation bars. It handles active state detection using Angular's functional `isActive` utility and provides a consistent visual experience for routing.

The `NavbarLinkComponent` integrates with the Angular Router to automatically determine its active state. It manages navigation both through a standard `[routerLink]` directive for accessibility (allowing right-clicks/middle-clicks) and a programmatic `onClick` handler.

---

## 🏰 Overview

- **Selector:** `dma-navbar-link`
- **Format:** Angular Standalone Component
- **Change Detection:** `OnPush`

---

## 🚀 Usage

To use the `NavbarLinkComponent`, import it into your standalone component and add it to your template.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-nav-container',
    template: `
        <nav>
            <dma-navbar-link label="Dashboard" route="/dashboard" />
            <dma-navbar-link label="Settings" route="/settings" />
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush, 
    imports: [NavbarLinkComponent],
})
export class NavContainerComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name    | Type     | Required | Description                                                                  |
|---------|----------|----------|------------------------------------------------------------------------------|
| `label` | `string` | **Yes**  | The text label passed to the internal active marker.                         |
| `route` | `string` | **Yes**  | The destination URL path used for both navigation and active state matching. |

### Active State Logic

The component uses a `Signal<boolean>` to track the active state. It is considered active if the current URL matches the `route` input based on the following criteria:

- **Paths:** `subset` (Matches if the route is a prefix of the current URL).
- **Query Params:** `subset`.
- **Fragments/Matrix Params:** `ignored`.

---

## 🧪 Examples

### Basic Navigation

```html
<dma-navbar-link label="Home" route="/home" />
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` library, released under the [MIT License](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE).
