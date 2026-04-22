[← Back to Library Overview](../../../../README.md#-component-library)

---

# Input Component `dma-input`

A versatile, accessible text input component designed for the `@dnd-mapp` ecosystem. It features built-in support for Angular Forms (`ControlValueAccessor`), reactive validation styling, and an internal debounce mechanism to optimize performance.

## 🏰 Overview

The `InputComponent` provides a styled wrapper around the native HTML input element. It includes integrated label handling, status-based border coloring (valid/invalid/touched), and a **500ms debounce** on value changes to prevent excessive form updates during rapid typing.

- **Selector**: `dma-input`
- **Format**: Standalone Component
- **Change Detection**: `OnPush`
- **Form Support**: Full `ControlValueAccessor` integration

---

## 🚀 Usage

### Basic Usage with Signals

The component uses Angular's `model()` for the value, allowing for easy two-way binding.

```ts
import { InputComponent } from '@dnd-mapp/shared-ui';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<dma-input inputId="username-field" label="Username" placeholder="TheLegend27" [(value)]="username" />`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [InputComponent],
})
export class RootComponent {
    protected readonly username = signal('');
}
```

---

## 🎨 API Reference

### Inputs

Controlled via Angular Signal inputs.

| Name          | Type      | Required | Default | Description                                                                 |
|---------------|-----------|----------|---------|-----------------------------------------------------------------------------|
| `inputId`     | `string`  | Yes      | -       | The unique ID used to associate the label with the input.                   |
| `label`       | `string`  | Yes      | -       | The text label displayed above the input field.                             |
| `placeholder` | `string`  | No       | `''`    | The hint text displayed when the input is empty.                            |
| `readonly`    | `boolean` | No       | `false` | If true, the input is present but non-editable (uses `booleanAttribute`).   |

### Models (Two-way Data Binding)

Controlled via Angular Signal models. These can be used with `[(value)]` or updated via Reactive Forms.

| Name       | Type      | Default | Description                                                           |
|------------|-----------|---------|-----------------------------------------------------------------------|
| `value`    | `string`  | `''`    | The current text value.                                               |
| `disabled` | `boolean` | `false` | Controls the disabled state. Automatically handled by Reactive Forms. |

---

## ⚙️ Technical Details

### Debounce Logic

To improve performance and reduce unnecessary change detection cycles, the component uses an internal `Subject` and `debounceTime(500)`. When a user types:

1. The internal `onInput` event triggers.
2. The value is held for 500ms.
3. After the timer clears, `onChange` is called, updating the model and notifying any parent Angular Form.

### Validation States

The component automatically styles itself based on Angular Form CSS classes:

- **Valid & Touched**: Displays a green border.
- **Invalid & Touched**: Displays a red border and red text.
- **Disabled**: Applies a background tint, reduces opacity, and changes the cursor to `not-allowed`.

---

## 🧪 Examples

### Reactive Forms Integration

Since the component implements `ControlValueAccessor`, it integrates seamlessly with `FormControl`. The `onTouched` event is triggered when the input receives focus.

```ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-profile-form',
    template: `
        <form [formGroup]="form">
            <dma-input label="Username" inputId="username-field" formControlName="username" />
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, InputComponent],
})
export class ProfileFormComponent {
    private readonly formBuilder = inject(FormBuilder).nonNullable;

    protected readonly form = this.formBuilder.group({
        username: this.formBuilder.control('', [Validators.required, Validators.minLength(3)])
    });
}
```

### Read-only State

The `readonly` attribute is transformed using `booleanAttribute`, allowing for easy usage in templates.

```html
<dma-input readonly inputId="version-id" label="System Version" value="v1.0.4" />
```

---

## 📜 License

This component is part of the `@dnd-mapp/shared-ui` library, released under the [MIT License](https://github.com/dnd-mapp/shared-ui/blob/main/LICENSE).
