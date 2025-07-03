
# Freelance QLLP – Next.js Reusable UI Components

## Next.js Reusable Category Filter UI

This project is a pixel-perfect implementation of a category filter menu bar UI, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ESLint**. The filter bar and dropdowns are styled to match a Figma design exactly, with custom icons, checkboxes, and responsive layout.

**Live-Demo:** [https://freelance-qllp.vercel.app/](https://freelance-qllp.vercel.app/)

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Learning & Customization](#learning--customization)
- [License](#license)

---

## Project Summary

This UI project demonstrates how to build a highly customized, Figma-accurate filter menu bar for a category page. It features multi-select dropdowns for brands, flavors, and strength, with custom SVG icons, checkboxes, and divider lines. The code is modular, accessible, and easy to extend.

---

## Features

- **Pixel-perfect**: Matches Figma/SVG design for dropdowns, checkboxes, icons, and layout
- **Reusable Components**: `FilterDropDown` and `CategoryFilterMenuBar` are modular and customizable
- **Multi-select Dropdowns**: Each filter supports independent, multi-select checkboxes
- **Custom Icons**: Includes group/users icon, custom arrow, and checkboxes
- **Responsive & Accessible**: Keyboard navigation, focus states, and mobile-friendly
- **Bug Fixes**: Checkbox selection issues resolved; all options are unique and independently selectable
- **Modern Stack**: Next.js (App Router), TypeScript, Tailwind CSS, ESLint

---

## Project Structure

```bash
src/
  components/
    CategoryFilter/
      FilterDropDown.tsx      # Reusable dropdown with custom checkboxes
      CategoryFilterMenuBar.tsx # Filter bar with dropdowns and dividers
  app/
    page.tsx                 # Renders the filter bar UI
    layout.tsx, globals.css  # App layout and global styles
public/
  ... (SVG assets)
README.md
desktop_design.fig           # Figma design reference
```

---

## Usage

- The filter bar is rendered on the main page (`/src/app/page.tsx`).
- Each dropdown (Brands, Flavors, Strength) supports multi-select and independent selection.
- Custom icons and checkboxes are implemented with SVG for pixel-perfect accuracy.
- Divider lines and spacing match the Figma design.
- All UI/UX bugs (e.g., duplicate checkbox selection) have been fixed.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Learning & Customization

- **Component Reuse**: The dropdown and filter bar are modular; add more filters by extending `CategoryFilterMenuBar`.
- **Styling**: All styles use Tailwind CSS for rapid customization. Adjust colors, spacing, or icons as needed.
- **Accessibility**: Keyboard navigation and focus states are supported. Review ARIA attributes for further improvements.
- **Figma Matching**: To update the design, replace SVGs in `/public` or adjust Tailwind classes.

---

## License

This project is for demonstration and freelance use. You may adapt or extend it for your own projects.

---

> Happy coding! If you have any questions or need help, feel free to reach out. Thank you. 🚀
