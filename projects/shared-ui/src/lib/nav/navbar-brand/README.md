[← Back to Library Overview](../../../../README.md#-component-library)

---

# Navbar Brand

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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-layout',
    template: `<dma-navbar-brand imgSrc="assets/logo.svg" brandName="D&D Mapp" />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarBrandComponent],
})
export class LayoutComponent {}
```

---

## 🎨 API Reference

### Inputs

The component uses Angular Signals for its input properties.

| Name        | Type     | Required | Description                                        |
|-------------|----------|----------|----------------------------------------------------|
| `imgSrc`    | `string` | Yes      | The source URL for the brand logo image.           |
| `brandName` | `string` | Yes      | The text string to be displayed as the brand name. |

### Routing

The component internally uses `RouterLink` and is hardcoded to navigate to the root path (`/`). Ensure that `provideRouter` is configured in your application bootstrap.

---

## 🧪 Examples

### Basic Branding

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: '<dma-navbar-brand imgSrc="/favicon.ico" brandName="My Application" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarBrandComponent],
})
export class RootComponent {}
```

### Dynamic Branding

Since the component uses Signal inputs, you can pass values from other Signals or standard properties:

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarBrandComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: '<dma-navbar-brand [imgSrc]="logo()" [brandName]="name()" />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavbarBrandComponent],
})
export class RootComponent {
    protected readonly logo = signal('assets/dynamic-logo.svg');
    protected readonly name = signal('Prototyping App');
}
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
