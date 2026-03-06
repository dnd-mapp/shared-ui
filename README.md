# @dnd-mapp/shared-ui

![CI Status](https://github.com/dnd-mapp/shared-ui/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-ui)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

The official Angular component library for the **D&D Mapp** platform. This repository contains the source code, design system, and documentation for the reusable UI components used across the D&D Mapp ecosystem.

## 🏰 Overview

`@dnd-mapp/shared-ui` is built with **Angular 21** and a custom **SCSS-based theming engine**. It serves as the single source of truth for UI elements, ensuring brand consistency and speeding up development through high-performance, signals-based standalone components.

- **Documentation & Testing**: Powered by [Storybook](https://storybook.js.org/).
- **Styling**: Proprietary SCSS design system (No external CSS frameworks).
- **Typography**: Includes custom-licensed fonts optimized for tabletop gaming interfaces.
- **Package Management**: `pnpm` with `mise-en-place`.

---

## 🚀 Getting Started

### Prerequisites

This project uses [mise-en-place](https://mise.jdx.dev/) to manage runtime versions locally.

1. **Install Mise** to automatically manage:

   - **Node.js**: v24.14.0
   - **pnpm**: v10.30.3

### Local Setup

1. **Clone and Install**:

   ```bash
   git clone https://github.com/dnd-mapp/shared-ui.git
   cd shared-ui
   mise install
   pnpm install
   ```

---

## 📖 Component Development (Storybook)

We use Storybook to build and test components in isolation. This is the primary development environment.

- **Start Storybook**:

  ```bash
  pnpm storybook:start
  ```

  Once running, navigate to `http://localhost:6006` to browse the component catalog.

- **Build Storybook**:

  ```bash
  pnpm storybook:build
  ```

---

## 📦 Consumption

### Installation

To use this library in a D&D Mapp application, install it via pnpm:

```bash
pnpm add @dnd-mapp/shared-ui
```

### Assets & Styling Configuration

Because the library uses custom SCSS and internal fonts, you must update your `angular.json` to include the library's assets and stylesheets:

```json
{
    "projects": {
        "app": {
            "architect": {
                "build": {
                    "options": {
                        "assets": [
                            "src/favicon.ico",
                            "src/assets",
                            {
                                "glob": "**/*",
                                "input": "node_modules/@dnd-mapp/shared-ui/assets",
                                "output": "assets"
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

Additionally, you need to import the library styles directly into your application's primary SCSS file (e.g., `styles.scss`):

```scss
/*
  1. Import Fonts first
  2. Import Main Theme and Component Styles
 */
@import "@dnd-mapp/shared-ui/assets/styles/fonts.scss"; /* 1. */
@import "@dnd-mapp/shared-ui/assets/styles/main.scss"; /* 2. */
```

---

## 🛠 Project Structure

The repository is organized as an Angular Workspace focusing on modular SCSS and standalone components:

```text
shared-ui/
├── projects/
│   └── shared-ui/              # The Angular Library source
│       ├── .storybook/         # Storybook configuration
│       ├── src/
│       │   ├── assets/         # Global SCSS, Fonts, and Images
│       │   │   ├── fonts/      # Proprietary font files
│       │   │   └── styles/     # SCSS Variables, Mixins, and Themes
│       │   ├── lib/            # Components, Services, and Pipes
│       │   ├── stories/        # Storybook (.stories.ts) files
│       │   └── public-api.ts   # Library export map
├── .tool-versions              # Mise version config
└── package.json
```

---

## 📜 Scripts

- `pnpm build`: Builds the library for production into `dist/shared-ui`.
- `pnpm lint`: Runs ESLint for TypeScript/Angular logic.
- `pnpm stylelint`: Checks SCSS compliance against our design system rules.
- `pnpm format:write`: Formats the codebase using Prettier.

---

## ⚖️ License

Copyright © 2026 NoNamer777. All rights reserved.

This software is proprietary. Unauthorized copying, modification, or distribution is strictly prohibited. Use is subject to the terms in the [LICENSE](LICENSE) file.
