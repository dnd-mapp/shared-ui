[← Back to Library Overview](../../../README.md#-component-library)

---

# Button Component (`dma-button`)

The `ButtonComponent` is a versatile UI element designed for the **D&D Mapp** design system. It is implemented as an attribute selector for standard HTML `<button>` elements, ensuring native accessibility and browser behavior while providing consistent styling and flexbox-based content alignment.

## 🏰 Overview

- **Selector**: `button[dma-button]`
- **Format**: Attribute-based standalone component.
- **Compatibility**: Works with all standard HTML button attributes (e.g., `type`, `disabled`, `(click)`).
- **Features**:
  - Supports a leading icon via content projection.
  - Automatic flex alignment for icons and text.
  - Responsive states (hover/active) for all variants.
  - Full-width support when nested inside a `dma-dropdown-container`.

---

## 🚀 Usage

Add `ButtonComponent` to your standalone component's `imports` array:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, LeadingIconDirective } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-encounter-action',
    template: `
        <!-- Defaults to 'base' style -->
        <button type="button" dma-button>Base Action</button>

        <!-- Explicit 'primary' style -->
        <button type="button" dma-button="primary">Roll Initiative</button>

        <!-- Danger style -->
        <button type="button" dma-button="danger">Delete Character</button>

        <!-- With a leading icon -->
        <button type="button" dma-button>
            <dma-icon dma-user-circle-icon dmaLeadingIcon />
            Username
        </button>
    `,
    imports: [ButtonComponent, LeadingIconDirective],
})
export class EncounterActionComponent {}
```

---

## 🎨 API Reference

### Inputs

| Input   | Attribute    | Type                              | Default  | Description                                |
|---------|--------------|-----------------------------------|----------|--------------------------------------------|
| `color` | `dma-button` | `'base' \| 'primary' \| 'danger'` | `'base'` | Determines the visual style of the button. |

> [!NOTE]
> The `dma-button` attribute acts as both the component selector and the input for the color variant.

### Content Projection

The component wraps content in a `.button-content` container with a predefined layout and alignment:

- **`[dmaLeadingIcon]`**: Use this element directive to project an icon at the start.
- **Default Slot**: Any other content provided inside the button tag will be rendered as the button label.

---

## 🌈 Color Variants

1. **Base (`base`)**
   - **Usage**: `<button dma-button>` or `<button dma-button="base">`
   - **Appearance**: Standard neutral styling for secondary actions.
   - **States**: Includes visual feedback for hover and active interactions.

2. **Primary (`primary`)**
   - **Usage**: `<button dma-button="primary">`
   - **Appearance**: High-contrast brand coloring to highlight the main action.
   - **States**: Shifts in tone to indicate interaction.

3. **Danger (`danger`)**
   - **Usage**: `<button dma-button="danger">`
   - **Appearance**: Semantic warning styling to highlight destructive intent.
   - **States**: Subtle highlights to indicate destructive potential without overwhelming the UI.

---

## 🧪 Examples

### Leading Icon (Profile)

Project a specialized icon directive into the `[dmaLeadingIcon]` slot. The component automatically handles the spacing between the icon and the text.

```html
<button type="button" dma-button>
    <dma-icon dma-user-circle-icon dmaLeadingIcon />
    Username
</button>
```

### Layout Behavior

When a `dma-button` is placed inside a component or element with the `dma-dropdown-container` attribute, it will automatically expand to fill the container width.

### Standard Button Behavior

Since this is an attribute selector, you can use all standard button features:

```html
<button 
    type="submit" 
    dma-button="primary" 
    [disabled]="isSubmitting()"
>
    Save Character
</button>
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. Refer to the root [LICENSE](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE) for usage restrictions.
