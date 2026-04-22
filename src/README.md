# @dnd-mapp/shared-ui

![CI Status](https://github.com/dnd-mapp/shared-ui/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-ui)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

The official Angular component library for the **D&D Mapp** platform. This library provides a unified design language and high-performance, accessible UI components built specifically for tabletop gaming applications.

🏰 **[Explore the Live Storybook](https://dnd-mapp.github.io/shared-ui/)**

---

## ✨ Key Features

- **Modern Architecture**: Built with **Angular 21** using signals and standalone components.
- **Custom Theming**: A proprietary SCSS-based design system.
- **Integrated Typography**: Includes custom fonts optimized for readability in high-density gaming interfaces.
- **Layout Integrity**: Specialized components like `Active Marker` prevent Layout Shifts (CLS) during state toggles.
- **Accessible & Consistent**: A11y-focused components that serve as the single source of truth for the D&D Mapp brand.

---

## 🚀 Getting Started

### 1. Installation

Install the package via your preferred package manager:

```bash
pnpm add @dnd-mapp/shared-ui
```

### 2. Configuration (Angular.json)

To ensure the custom themes, fonts, and assets are correctly bundled, update your `angular.json` file. You must include the global styles and the assets folder:

```json
{
    "projects": {
        "your-app-name": {
            "architect": {
                "build": {
                    "options": {
                        "assets": [
                            "src/favicon.ico",
                            "src/assets",
                            {
                                "glob": "**/*",
                                "input": "node_modules/@dnd-mapp/shared-ui/assets/fonts",
                                "output": "assets/fonts"
                            },
                            {
                                "glob": "**/*",
                                "input": "node_modules/@dnd-mapp/shared-ui/assets/images",
                                "output": "assets/images"
                            }
                        ],
                        "styles": ["src/styles.scss"]
                    }
                }
            }
        }
    }
}
```

### 3. Global Styles Integration

Additionally, you need to import the library styles directly into your application's primary SCSS file (e.g., `styles.scss`):

```scss
/*
  1. Import Fonts first
  2. Import Main Theme and Component Styles
 */
@import "@dnd-mapp/shared-ui/styles/fonts"; /* 1. */
@import "@dnd-mapp/shared-ui/styles/main"; /* 2. */
```

---

## 🧱 Usage

All components are **Standalone**. Import them directly into your component's `imports` array:

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@dnd-mapp/shared-ui';

@Component({
    selector: 'app-root',
    template: `<button type="button" dma-button="primary">Roll Initiative</button>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent],
})
export class RootComponent {
}
```

---

## 🏟 Component Library

For detailed API definitions and interactive examples, visit our **[Storybook](https://dnd-mapp.github.io/shared-ui/)** or view the documentation for the specific components below:

| Component                                                | Status | Description                                                  |
|----------------------------------------------------------|--------|--------------------------------------------------------------|
| **[Active Marker](src/lib/nav/active-marker/README.md)** | ✅      | Prevents CLS by reserving space for bold text states.        |
| **[App Top Bar](src/lib/nav/app-top-bar/README.md)**     | ✅      | Layout-oriented header with `start` and `end` sections.      |
| **[Button](src/lib/button/README.md)**                   | ✅      | Actions with support for base, primary, and danger variants. |
| **[Dropdown](src/lib/dropdown/README.md)**               | ✅      | Directive-based overlay system using Angular CDK.            |
| **[Input](src/lib/forms/input/README.md)**               | ✅      | Debounced, form-aware text inputs with validation states.    |
| **[Navbar](src/lib/nav/navbar/README.md)**               | ✅      | Semantic `<nav>` container with standardized flex spacing.   |
| **[Navbar Brand](src/lib/nav/navbar-brand/README.md)**   | ✅      | A standardized header element for logo and brand identity.   |
| **[Navbar Link](src/lib/nav/navbar-link/README.md)**     | ✅      | Navigation link with automatic active state detection.       |
| **[Navbar Menu](src/lib/nav/navbar-menu/README.md)**     | ✅      | Specialized dropdown trigger for navigation bars.            |
| **[Vertical Rule](src/lib/vertical-rule/README.md)**     | ✅      | A layout-stretching divider for content separation.          |

> **Legend:**  
> ✅ Production Ready | 🚧 In Development | 🧪 Experimental

---

## 🛠 Development

If you are contributing or wish to run the documentation locally, please refer to the [Main Repository README](https://github.com/dnd-mapp/shared-ui/blob/main/README.md) for environment setup and contribution guidelines.

---

## ⚖️ License

Copyright © 2026 NoNamer777.

Released under the [MIT License](https://github.com/dnd-mapp/shared-ui?tab=MIT-1-ov-file).
