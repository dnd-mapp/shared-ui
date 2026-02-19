[← Back to Library Overview](../../../README.md#-component-library)

---

# Vertical Rule Component (`dma-vr`)

The `VerticalRuleComponent` is a structural utility component designed to provide a consistent vertical divider for separating content within layouts, such as navigation bars, toolbars, or flex containers.

## 🏰 Overview

- **Selector**: `dma-vr`
- **Use Case**: Visual separation of inline elements.
- **Compatibility**: Designed for use within flexbox or grid containers.

---

## 🚀 Usage

### 1. Import

Add `VerticalRuleComponent` to your standalone component's `imports` array:

```ts
import { Component } from '@angular/core';
import { VerticalRuleComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-toolbar',
    template: `
        <div class="flex h-10 items-center gap-4">
            <button dma-button>Save</button>
            
            <!-- Vertical Divider -->
            <dma-vr />
            
            <button dma-button>Delete</button>
        </div>
    `,
    imports: [VerticalRuleComponent]
})
export class ToolbarComponent {}
```

### 2. Styles Requirement

For the divider to display correctly, the parent container should have a defined height or use a flex layout. The component is designed to automatically stretch to the height of its container.

---

## 🎨 API Reference

### Selector

`dma-vr`

### Visual Behavior

- **Orientation**: Vertical.
- **Color**: Preset to the design system's neutral palette.
- **Thickness**: Single-pixel border (start-aligned).

---

## 🧪 Examples

### Navigation Header

The divider is ideal for separating text links or icons in a header navigation.

```html
<nav class="flex items-center gap-2 p-4">
  <span>Character Sheet</span>
  <dma-vr />
  <span>Inventory</span>
  <dma-vr />
  <span>Spells</span>
</nav>
```

### Action Group

Use it to group related actions within a toolbar while maintaining a clear visual distinction between different functional sets.

```html
<div class="flex h-8 items-center gap-3">
  <dma-icon-button icon="edit" />
  <dma-icon-button icon="copy" />
  <dma-vr />
  <dma-icon-button icon="trash" />
</div>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
