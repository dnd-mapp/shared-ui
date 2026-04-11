[← Back to Library Overview](../../../../README.md#-component-library)

---

# Active Marker

A specialized text component designed to prevent layout shifts (CLS) when toggling between normal and bold font weights. It achieves this by using a CSS Grid-based "ghosting" technique: rendering an invisible, bold version of the label to reserve the maximum required space, ensuring the container dimensions remain constant regardless of the active state.

## 🏰 Overview

- **Selector**: `dma-active-marker`
- **Format**: Standalone Component
- **Change Detection**: `ChangeDetectionStrategy.OnPush`
- **Styling**: Scoped SCSS (BEM-less)

---

## 🚀 Usage

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveMarkerComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: `<dma-active-marker label="Dashboard" active />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ActiveMarkerComponent],
})
export class RootComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name     | Type      | Required | Default | Description                                                                                                            |
|----------|-----------|----------|---------|------------------------------------------------------------------------------------------------------------------------|
| `label`  | `string`  | Yes      | -       | The text content to be displayed.                                                                                      |
| `active` | `boolean` | No       | `false` | Controls the active state. Uses `booleanAttribute` for flexible template usage (e.g., `<dma-active-marker active />`). |

### Host Classes

| Class     | Condition          | Result                                                                      |
|-----------|--------------------|-----------------------------------------------------------------------------|
| `.active` | `active()` is true | Changes color to `$neutral-900` and font-weight to `$font-weight-semibold`. |

---

## 🛠️ Implementation Details

### Layout Shift Prevention

The component uses `display: grid` on the host. Both the visible label and the "spacer" label are assigned to `grid-column: 1` and `grid-row: 1`.

1. **`.label-spacer`**: Always rendered with `visibility: hidden` and `font-weight: $font-weight-semibold`. This forces the grid cell to always be wide enough for the boldest version of the text.
2. **Visible Span**: Layers directly on top of the spacer. Its weight and color toggle based on the `.active` host class.

---

## 🧪 Examples

### Navigation Menu

Use the component in a sidebar or menu to highlight the current route without causing the menu width to "jitter" when the font weight increases.

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActiveMarkerComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-nav-list',
    template: `
        <nav>
            @for (item of menuItems; track item.id) {
                <button (click)="selectedId.set(item.id)">
                    <dma-active-marker [label]="item.name" [active]="selectedId() === item.id" />
                </button>
            }
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ActiveMarkerComponent],
})
export class NavListComponent {
    protected readonly selectedId = signal(1);

    protected readonly menuItems = [
        { id: 1, name: 'Overview' },
        { id: 2, name: 'Analytics' },
        { id: 3, name: 'Settings' }
    ];
}
```

### Tab Indicators

Ideal for tab headers where centered text must remain perfectly centered regardless of its active state.

```html
<div class="flex gap-4">
  <dma-active-marker label="Profile" [active]="currentTab === 'profile'" />
  <dma-active-marker label="Security" [active]="currentTab === 'security'" />
</div>
```

---

## 📜 License

Internal use only. Copyright © 2026 DnD Mapp. All rights reserved.

[← Back to Library Overview](../../../../README.md#-component-library)
