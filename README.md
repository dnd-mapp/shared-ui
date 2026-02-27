# @dnd-mapp/shared-ui

![CI Status](https://github.com/dnd-mapp/shared-ui/actions/workflows/push-main.yaml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/@dnd-mapp/shared-ui)
![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)

The official Angular component library for the D&D Mapp platform. This library provides a unified design language and a collection of reusable, accessible UI components used across all D&D Mapp applications.

## 🏰 Overview

`@dnd-mapp/shared-ui` is built with **Angular 21** and **Tailwind CSS v4**. It serves as the single source of truth for UI elements, ensuring brand consistency and accelerating development across the ecosystem.

- **Documentation & Testing**: Powered by [Storybook](https://storybook.js.org/).
- **Styling**: Tailwind CSS v4 (CSS-first configuration).
- **Package Management**: pnpm with `mise-en-place`.

---

## 🚀 Getting Started

### Prerequisites

This project uses [mise-en-place](https://mise.jdx.dev/) to manage runtime versions.

1. **Install Mise** to automatically manage:
   - **Node.js**: v24.14.0
   - **pnpm**: v10.30.1

### Local Setup

1.  **Clone and Install**:

    ```bash
    git clone https://github.com/dnd-mapp/shared-ui.git
    cd shared-ui
    mise install
    pnpm install
    ```

---

## 📖 Component Development (Storybook)

We use Storybook to build components in isolation. This is the primary development environment for the library.

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

## 📦 Usage

### Installation

To use this library in a D&D Mapp application, install it via npm:

```bash
pnpm add @dnd-mapp/shared-ui
```

### Integration

1.  **Import Styles**: Add the shared styles to your application's global CSS file:

    ```css
    @import "@dnd-mapp/shared-ui/styles.css";
    ```

2. **Import Components**:

   ```typescript
   import { ChangeDetectionStrategy, Component } from '@angular/core';
   import { ButtonComponent } from '@dnd-mapp/shared-ui'; 

   @Component({
      selector: 'dma-app',
      template: `<button dma-button>Roll for Initiative</button>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ButtonComponent],
   })
   export class AppComponent {}
   ```

---

## 🛠 Project Structure

The repository is organized as an Angular Workspace:

```text
shared-ui/
├── projects/
│   └── shared-ui/              # The Angular Library source
│       ├── .storybook/         # Storybook configuration
│       ├── src/
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
- `pnpm stylelint`: Checks CSS/Tailwind compliance.
- `pnpm format:write`: Formats the codebase using Prettier.

---

## ⚖️ License

Copyright © 2026 NoNamer777. All rights reserved.

This software is proprietary. Unauthorized copying, modification, or distribution is strictly prohibited. Use is subject to the terms in the [LICENSE](LICENSE) file.
