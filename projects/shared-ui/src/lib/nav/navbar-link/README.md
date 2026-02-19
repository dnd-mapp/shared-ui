[← Back to Library Overview](../../../../README.md#-component-library)

---

# NavbarLink Component (`dma-navbar-link`)

A lightweight, navigation-aware component designed for use within navigation bars. It handles active state detection automatically, ensuring that the link is visually highlighted when the current route matches its destination.

The `NavbarLinkComponent` provides a wrapper around Angular's `RouterLink`. A key feature of this component is its layout stability: it uses a hidden "bold" placeholder to pre-calculate the space required for its active state. This prevents the "shaking" or layout shifting effect that often occurs when a font weight changes from normal to bold upon selection.

---

## 🏰 Overview

- **Selector:** `dma-navbar-link`
- **Format:** Angular Standalone Component
- **Library:** `@dnd-mapp/shared-ui`

---

## 🚀 Usage

To use the `NavbarLinkComponent`, import it into your standalone component or Angular module and add it to your template.

```ts
import { NavbarLinkComponent } from '@dnd-mapp/shared-ui';

@Component({ 
    selector: 'app-nav-container', 
    template: `
        <nav>
            <dma-navbar-link label="Dashboard" route="/dashboard" />
            <dma-navbar-link label="Settings" route="/settings" />
        </nav>
    `,
  imports: [NavbarLinkComponent],
})
export class NavContainerComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name    | Type     | Required | Description                                                                 |
|---------|----------|----------|-----------------------------------------------------------------------------|
| `label` | `string` | Yes      | The text to be displayed inside the link.                                   |
| `route` | `string` | Yes      | The destination URL path (passed to `routerLink`).                          |

---

## 🧪 Examples

### Basic Navigation

```html
<dma-navbar-link label="Home" route="/home" />
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
