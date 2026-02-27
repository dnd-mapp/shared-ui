[← Back to Library Overview](../../../../README.md#-component-library)

---

# App Top Bar `dma-app-top-bar`

A flexible and layout-oriented header component designed to host navigation, branding, and action elements. It uses a composition-based approach with dedicated sections to ensure consistent spacing and alignment across the application.

## 🏰 Overview

The `AppTopBarComponent` acts as a container that leverages Tailwind CSS for layout and provides a specific slot for `AppTopBarSectionComponent` instances. This allows developers to easily group elements at the start or end of the bar.

- **Selector**: `dma-app-top-bar`
- **Format**: Standalone Component
- **Change Detection**: `OnPush`

---

## 🚀 Usage

```ts
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppTopBarComponent, AppTopBarSectionComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: `
        <dma-app-top-bar>
            <dma-app-top-bar-section position="start"><span>Logo</span></dma-app-top-bar-section>
            <dma-app-top-bar-section position="end"><button>Profile</button></dma-app-top-bar-section>
        </dma-app-top-bar>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AppTopBarComponent, AppTopBarSectionComponent],
})
export class RootComponent {}
```

---

## 🎨 API Reference

### AppTopBarComponent

#### Content Projection

| Slot                      | Description                                         |
|:--------------------------|:----------------------------------------------------|
| `dma-app-top-bar-section` | Used to define alignment groups within the top bar. |

---

### AppTopBarSectionComponent

#### Inputs

| Name         | Type               | Default   | Description                                                                                   |
|--------------|--------------------|-----------|-----------------------------------------------------------------------------------------------|
| `[position]` | `'start' \| 'end'` | `'start'` | Determines the alignment. `'start'` sections will grow to fill available space if applicable. |

#### Content Projection

| Slot         | Description                                                            |
|--------------|------------------------------------------------------------------------|
| `ng-content` | The elements (links, buttons, text) to be rendered within the section. |

---

## 🧪 Examples

### Basic Branding and Navigation

A standard layout with a title on the left and a single action on the right.

```html
<dma-app-top-bar>
    <dma-app-top-bar-section position="start">
        <img src="logo.png" alt="Logo" class="h-6" />
        <h1 class="text-lg font-bold">D&D Mapp</h1>
    </dma-app-top-bar-section>

    <dma-app-top-bar-section position="end">
        <button class="btn-primary">Logout</button>
    </dma-app-top-bar-section>
</dma-app-top-bar>
```

### Complex Action Bar

Using multiple items within the sections to create a rich interface.

```html
<dma-app-top-bar>
    <dma-app-top-bar-section position="start">
        <dma-icon dma-bars-icon />
        <nav>
            <a href="#">Dashboard</a>
            <a href="#">Campaigns</a>
        </nav>
    </dma-app-top-bar-section>

    <dma-app-top-bar-section position="end">
        <dma-search-input />
        <dma-avatar user="Oscar" />
    </dma-app-top-bar-section>
</dma-app-top-bar>
```

---

## 📜 License

Internal Proprietary Library – All Rights Reserved.
