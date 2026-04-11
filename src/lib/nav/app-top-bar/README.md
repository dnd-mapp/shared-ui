[← Back to Library Overview](../../../../README.md#-component-library)

---

# App Top Bar

A flexible and layout-oriented header component designed to host navigation, branding, and action elements. It uses a composition-based approach with dedicated sections to ensure consistent spacing and alignment across the application.

## 🏰 Overview

The `AppTopBarComponent` acts as a flexbox container that provides a specific slot for `AppTopBarSectionComponent` instances. It handles the top-level layout, background colors, and borders, while the sections handle internal alignment and spacing.

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
            <dma-app-top-bar-section>
                <span>Logo</span>
            </dma-app-top-bar-section>
            
            <dma-app-top-bar-section position="end">
                <button>Profile</button>
            </dma-app-top-bar-section>
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

| Slot                      | Description                                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `dma-app-top-bar-section` | Selects components of type `dma-app-top-bar-section` to define alignment groups. |

---

### AppTopBarSectionComponent

#### Inputs

| Name         | Type               | Default   | Description                                                                                                                               |
|--------------|--------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `[position]` | `'start' \| 'end'` | `'start'` | Determines the alignment. Sections with `position="start"` will `flex-grow` to fill available space, pushing "end" sections to the right. |

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
    <dma-app-top-bar-section>
        Start section
    </dma-app-top-bar-section>

    <dma-app-top-bar-section position="end">
        End Section
    </dma-app-top-bar-section>
</dma-app-top-bar>
```

---

## 📜 License

Internal Proprietary Library – All Rights Reserved.
