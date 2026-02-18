[← Back to Library Overview](../../../README.md#-ui-components)

---

# Button Component (`dma-button`)

The `ButtonComponent` is a versatile, high-performance UI element built with **Angular 21 signals** and **Tailwind CSS v4**. It is designed as an attribute selector for standard HTML `<button>` elements, ensuring native accessibility and browser behavior while applying the **D&D Mapp** design system.

## 🏰 Overview

- **Type**: Standalone Component.
- **Selector**: `button[dma-button]`
- **Styling**: Tailwind CSS v4 (via Host Bindings).
- **Logic**: 100% Signal-based (Inputs & Computed state).

---

## 🚀 Usage

### 1. Import

Add `ButtonComponent` to your standalone component's `imports` array:

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-encounter-action',
    template: `
        <!-- Defaults to 'base' -->
        <button dma-button>Base Action</button>
        
        <!-- Explicit 'primary' -->
        <button dma-button="primary">Roll Initiative</button>
    `,
    imports: [ButtonComponent]
})
export class EncounterActionComponent {}
```

### 2. Styles Requirement

Ensure Tailwind CSS v4 is configured in your project to process the utility classes defined in the component host metadata.

---

## 🎨 API Reference

### Inputs

| Input   | Attribute    | Type           | Default  | Description                                |
|---------|--------------|----------------|----------|--------------------------------------------|
| `color` | `dma-button` | `ButtonColors` | `'base'` | Determines the visual style of the button. |

### Color Variants

The component leverages `computed` signals to toggle Tailwind classes dynamically:

1.  **Base (`base`)**
    - **Trigger**: `<button dma-button>` or `<button dma-button="base">`
    - **Styles**: Light neutral background (`bg-neutral-100`), dark text (`text-neutral-900`).
    - **States**: Subtle darkening on hover/active.

2.  **Primary (`primary`)**
    - **Trigger**: `<button dma-button="primary">`
    - **Styles**: Blue background (`bg-blue-400`), light text (`text-neutral-100`).
    - **States**: Vibrant blue scaling (`hover:bg-blue-500`, `active:bg-blue-600`).

---

## 🛠 Technical Details

### Signal Implementation

The component uses modern Angular Signals for reactive state management:

- **`input()`**: Uses a `transform` function (`buttonColorAttribute`) to sanitize input values and an `alias` to support the shorthand attribute syntax.
- **`computed()`**: Derive boolean states (`isBase`, `isPrimary`) for highly efficient change detection.

### Tailwind Integration

Styles are applied directly to the host element using high-performance class bindings:

```ts
host: {
    '[class]': `'font-semibold cursor-pointer py-2 px-4 rounded-md'`,
    '[class.bg-blue-400]': 'isPrimary()',
    // ... other conditional classes
}
```

### Attribute Shorthand & Transformation

The `dma-button` alias allows the attribute itself to serve as the input. If an empty string or invalid value is provided, the `buttonColorAttribute` transformer ensures it safely falls back to `DEFAULT_BUTTON_COLOR`.

---

## 🧪 Examples

### Primary Action (Natural 20 Style)

```html
<button dma-button="primary" (click)="rollDice()">Attack!</button>
```

### Secondary / Cancel Action

```html
<button dma-button (click)="closeModal()">Dismiss</button>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
