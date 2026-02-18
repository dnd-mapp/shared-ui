# @dnd-mapp/shared-ui

![CI Status](https://github.com/dnd-mapp/shared-ui/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-ui)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

The official Angular component library for the **D&D Mapp** platform. This library provides a unified design language and a collection of reusable, accessible UI components built specifically for tabletop gaming applications.

## 🏰 Features

- **Angular 21 Native**: Built with the latest signals-based patterns and standalone components.
- **Tailwind CSS v4**: CSS-first configuration for high-performance styling.
- **Accessible**: Built with A11y best practices to ensure all players can use the tools.
- **Design Driven**: Single source of truth for the D&D Mapp brand.

---

## 🧱 UI Components

A collection of high-performance, accessible components. Click on a component name to view its specific documentation, API, and usage examples.

| Component                              | Status | Description                                                         |
|----------------------------------------|--------|---------------------------------------------------------------------|
| **[Button](src/lib/button/README.md)** | ✅      | Primary action component with support for variants (base, primary). |

> **[!TIP]** ✅ Ready for Production | 🚧 In Development | 🧪 Experimental

---

## 🚀 Installation

Install the package via pnpm (recommended) or your preferred package manager:

```bash
pnpm add @dnd-mapp/shared-ui
```

### 1. Global Styles Integration

The library requires the shared Tailwind-based styles to function correctly. Add the following import to your application's global CSS file (e.g., `styles.css` or `main.css`):

```css
@import "@dnd-mapp/shared-ui/styles.css";
```

### 2. Configuration

Since this library uses **Tailwind CSS v4**, ensure your application is configured to process Tailwind imports. If you are using the Angular CLI with Tailwind support, no additional configuration is typically required beyond the import.

---

## 📖 Usage

All components are exported as **Standalone Components**. You can import them directly into your component's `imports` array.

### Example: Using the Button Component

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/shared-ui'; 

@Component({
      selector: 'dma-root',
      template: `
        <section>
            <h1>Encounter Initiative</h1>
            <button dma-button (click)="onRoll()">Roll for Initiative</button>
        </section>
      `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class RootComponent {
  protected onRoll() {
    console.log('Natural 20!');
  }
}
```

---

## 🛠 Development & Storybook

If you are contributing to the library or want to explore the components in isolation:

1. **Clone the repo**:

   ```bash
   git clone https://github.com/dnd-mapp/shared-ui.git
   ```

2. **Setup environment**:

   This project uses [mise-en-place](https://mise.jdx.dev/) to manage Node.js and pnpm versions.

   ```bash
   mise install
   pnpm install
   ```

3. **Launch Storybook**:

   ```bash
   pnpm storybook
   ```

   Navigate to `http://localhost:6006` to view the documentation and component playground.

---

## 📜 Available Scripts

- `pnpm build`: Compiles the library for production.
- `pnpm test`: Runs unit tests via Karma.
- `pnpm lint`: Validates TypeScript and Angular logic.
- `pnpm stylelint`: Validates CSS/Tailwind compliance.

---

## ⚖️ License

Copyright © 2026 NoNamer777. All rights reserved.

This software is **proprietary**. Unauthorized copying, modification, or distribution is strictly prohibited. Use is subject to the terms in the [LICENSE](https://github.com/dnd-mapp/shared-ui?tab=License-1-ov-file) file.
