[← Back to Library Overview](../../../../README.md#-component-library)

---

# Navbar Brand Component (`dma-navbar-brand`)

The `NavbarBrandComponent` is a foundational UI element for application navigation bars. It provides a standardized way to display a brand logo alongside a brand name, automatically linking back to the application root.

---

## 🏰 Overview

- **Selector:** `dma-navbar-brand`
- **Format:** Angular Standalone Component
- **Change Detection:** `OnPush`

---

## 🚀 Usage

To use the `NavbarBrandComponent`, import it into your standalone component or Angular module, and then add it to your template.

```ts
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-layout',
    template: `<dma-navbar-brand imgSrc="assets/logo.svg" brandName="D&D Mapp" />`,
    imports: [NavbarBrandComponent],
})
export class LayoutComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name        | Type     | Required | Description                                        |
|-------------|----------|----------|----------------------------------------------------|
| `imgSrc`    | `string` | Yes      | The source URL for the brand logo image.           |
| `brandName` | `string` | Yes      | The text string to be displayed as the brand name. |

### Routing

The component internally uses `RouterLink` and is hardcoded to navigate to the root path (`/`). Ensure that the `provideRouter` or `RouterModule` is configured in your application.

---

## 🧪 Examples

### Basic Branding

```html
<dma-navbar-brand 
    imgSrc="/favicon.ico" 
    brandName="My Application" 
/>
```

### Dynamic Branding

If your brand information comes from a configuration object or a signal:

```html
<dma-navbar-brand 
    [imgSrc]="config.logoPath" 
    [brandName]="config.appName" 
/>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
