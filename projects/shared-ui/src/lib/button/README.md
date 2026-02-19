[← Back to Library Overview](../../../README.md#-ui-components)

---

# Button Component (`dma-button`)

The `ButtonComponent` is a versatile UI element designed for the **D&D Mapp** design system. It is implemented as an attribute selector for standard HTML `<button>` elements, ensuring native accessibility and browser behavior while providing consistent styling.

## 🏰 Overview

- **Selector**: `button[dma-button]`
- **Format**: Attribute-based standalone component.
- **Compatibility**: Works with all standard HTML button attributes (e.g., `type`, `disabled`, `(click)`).

---

## 🚀 Usage

Add `ButtonComponent` to your standalone component's `imports` array:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-encounter-action',
    template: `
        <!-- Defaults to 'base' style -->
        <button dma-button>Base Action</button>

        <!-- Explicit 'primary' style -->
        <button dma-button="primary">Roll Initiative</button>
    `,
    imports: [ButtonComponent],
})
export class EncounterActionComponent {}
```

---

## 🎨 API Reference

### Inputs

| Input         | Attribute    | Type                  | Default  | Description                                |
|---------------|--------------|-----------------------|----------|--------------------------------------------|
| `buttonColor` | `dma-button` | `'base' \| 'primary'` | `'base'` | Determines the visual style of the button. |

### Color Variants

1. **Base (`base`)**
   - **Usage**: `<button dma-button>` or `<button dma-button="base">`
   - **Description**: A neutral style for secondary actions or standard UI tasks.
   - **Appearance**: Light neutral background with dark text and subtle hover states.

2. **Primary (`primary`)**
   - **Usage**: `<button dma-button="primary">`
   - **Description**: High-emphasis style for main actions and "Call to Action" buttons.
   - **Appearance**: Vibrant blue background with light text and distinct interaction states.

---

## 🧪 Examples

### Primary Action (Attack)

Use the `primary` variant for the main action in a view.

```html
<button dma-button="primary" (click)="rollDice()">Attack!</button>
```

### Secondary Action (Cancel)

Use the default `base` variant for less prominent actions.

```html
<button dma-button (click)="closeModal()">Dismiss</button>
```

### Standard Button Behavior

Since this is an attribute selector, you can use all standard button features like `type="submit"` or the `disabled` state:

```html
<button type="submit" dma-button="primary" [disabled]="isSubmitting()">Save Character</button>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
