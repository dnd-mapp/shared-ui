[← Back to Library Overview](../../../../README.md#-component-library)

---

# Active Marker

A specialized text component designed to prevent layout shifts (CLS) when toggling between normal and bold font weights. It achieves this by rendering an invisible, bold version of the label to reserve the maximum required space in the DOM grid.

## 🏰 Overview

| Feature              | Details              |
|----------------------|----------------------|
| **Selector**         | `dma-active-marker`  |
| **Format**           | Standalone Component |
| **Change Detection** | `OnPush`             |

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

| Name     | Type      | Default    | Description                                                            |
|----------|-----------|------------|------------------------------------------------------------------------|
| `label`  | `string`  | `required` | The text content to be displayed.                                      |
| `active` | `boolean` | `false`    | Controls the active (bold) state. Uses `booleanAttribute` transformer. |

---

## 🧪 Examples

### Navigation Menu

Use the component in a sidebar or menu to highlight the current route without causing the menu width to "jitter" when the font weight increases.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveMarkerComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-nav-list',
    template: `
        <nav>
            @for (item of menuItems; track item.id) {
                <a (click)="select(item.id)">
                    <dma-active-marker [label]="item.name" [active]="selectedId === item.id" />
                </a>
            }
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ActiveMarkerComponent],
})
export class NavListComponent {
    protected selectedId = 1;
    protected menuItems = [
        { id: 1, name: 'Overview' },
        { id: 2, name: 'Analytics' },
        { id: 3, name: 'Settings' }
    ];

    protected select(id: number) {
        this.selectedId = id;
    }
}
```

### Tab Indicators

Ideal for tab headers where centered text must remain perfectly centered regardless of its active state.

```html
<div class="flex gap-4">
  <dma-active-marker label="Profile" [active]="tab === 'profile'" />
  <dma-active-marker label="Security" [active]="tab === 'security'" />
</div>
```

---

## 📜 License

Internal use only. Copyright © 2026 DnD Mapp. All rights reserved.

[← Back to Library Overview](../../../../README.md#-component-library)
