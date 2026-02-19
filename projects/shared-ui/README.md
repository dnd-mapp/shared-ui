# @dnd-mapp/shared-ui

![CI Status](https://github.com/dnd-mapp/shared-ui/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-ui)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

The official Angular component library for the **D&D Mapp** platform. This library provides a unified design language and high-performance, accessible UI components built specifically for tabletop gaming applications.

🏰 **[Explore the Live Storybook](https://dnd-mapp.github.io/shared-ui/)**

---

## ✨ Key Features

- **Modern Architecture**: Built with **Angular 21** using signals and standalone components.
- **Next-Gen Styling**: Powered by **Tailwind CSS v4** with a CSS-first configuration.
- **Accessible & Consistent**: A11y-focused components that serve as the single source of truth for the D&D Mapp brand.

---

## 🚀 Getting Started

### 1. Installation

Install the package via your preferred package manager:

```bash
pnpm add @dnd-mapp/shared-ui
```

### 2. Global Styles

Import the library's Tailwind-based styles into your application's global CSS file (e.g., `styles.css`):

```css
@import "@dnd-mapp/shared-ui/assets/styles/main.css";
```

> [!NOTE]
> Ensure your build pipeline is configured to process Tailwind CSS v4 imports.

### 3. Usage

All components are **Standalone**. Import them directly into your component's `imports` array:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root', 
    template: `<button type="button" dma-button="primary">Roll Initiative</button>`,
    imports: [ButtonComponent],
})
export class RootComponent {}
```

---

## 🧱 Component Library

For detailed API definitions and interactive examples, visit our **[Storybook](https://dnd-mapp.github.io/shared-ui/)** or view the documentation for the specific components below:

| Component                                                | Status | Description                                                  |
|----------------------------------------------------------|--------|--------------------------------------------------------------|
| **[App Top Bar](src/lib/nav/app-top-bar/README.md)**     | 🚧     |                                                              |
| **[Button](src/lib/button/README.md)**                   | ✅      | Actions with support for base and primary variants.          |
| **[Dropdowns](src/lib/dropdown/README.md)**              | 🚧     |                                                              |
| **[Navbar Action](src/lib/nav/navbar-action/README.md)** | 🚧     |                                                              |
| **[Navbar Brand](src/lib/nav/navbar-brand/README.md)**   | ✅      | A standardized header element for logo and brand identity.   |
| **[Navbar Link](src/lib/nav/navbar-link/README.md)**     | ✅      | Navigation link with automatic active state and layout lock. |
| **[Navbar Menu](src/lib/nav/navbar-menu/README.md)**     | 🚧     |                                                              |
| **[Vertical Rule](src/lib/vertical-rule/README.md)**     | ✅      | A layout-stretching divider for content separation.          |

> **Legend:** ✅ Production Ready | 🚧 In Development | 🧪 Experimental

---

## 🛠 Development

If you are contributing or wish to run the documentation locally, please refer to the [Main Repository README](https://github.com/dnd-mapp/shared-ui/blob/main/README.md) for environment setup and contribution guidelines.

---

## ⚖️ License

Copyright © 2026 NoNamer777. All rights reserved.

Proprietary software. Unauthorized copying or distribution is strictly prohibited. See the [LICENSE](https://github.com/dnd-mapp/shared-ui?tab=License-1-ov-file) for full terms.
