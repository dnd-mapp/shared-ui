[← Back to Library Overview](../../../../README.md#-component-library)

---

# Input Component `dma-input`

A versatile, accessible text input component designed for the `@dnd-mapp` ecosystem. It features built-in support for Angular Forms (ControlValueAccessor), custom validation styling, and debounced input handling to optimize performance.

## 🏰 Overview

The `InputComponent` provides a styled wrapper around the native HTML input element. It includes integrated label handling, status-based border coloring (valid/invalid/touched), and a 500 ms debounce on value changes to prevent excessive form updates during rapid typing.

- **Selector**: `dma-input`
- **Format**: Standalone Component
- **Change Detection**: OnPush

---

## 🚀 Usage

```ts
import { InputComponent } from '@dnd-mapp/shared-ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `      
        <dma-input
            inputId="username"
            label="Username"
            placeholder="Enter your character name"
            [(value)]="userName"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InputComponent],
})
export class MyComponent {}
```

---

## 🎨 API Reference

### Inputs

| Name          | Type      | Default    | Description                                                 |
|---------------|-----------|------------|-------------------------------------------------------------|
| `inputId`     | `string`  | `required` | The unique ID for the internal input and label association. |
| `label`       | `string`  | `required` | The text label displayed above the input field.             |
| `placeholder` | `string`  | `''`       | The hint text displayed when the input is empty.            |
| `readonly`    | `boolean` | `false`    | If true, the input is present but non-editable.             |

### Models (Two-way Data Binding)

| Name       | Type      | Default | Description                                                |
|------------|-----------|---------|------------------------------------------------------------|
| `value`    | `string`  | `''`    | The current text value of the input. Supports `[(value)]`. |
| `disabled` | `boolean` | `false` | Controls the disabled state of the input.                  |

---

## 🧪 Examples

### 1. Reactive Forms Integration

Since the component implements `ControlValueAccessor`, it integrates seamlessly with `FormControl`.

```ts
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-profile-form',
    template: `
        <form [formGroup]="form">
            <dma-input 
                label="Username"
                inputId="username-field"
                formControlName="username"
            />
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, InputComponent],
})
export class ProfileFormComponent {
    username = new FormControl('', [Validators.required, Validators.minLength(3)]);
}
```

### 2. Read-only State

Useful for displaying data that was previously entered but cannot be changed in the current context.

```html
<dma-input readonly inputId="char-id-001" label="Character ID" value="#88219" />
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` proprietary library. All rights reserved.
