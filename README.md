# Freelance QLLP – Next.js Reusable UI Components

A comprehensive, production-ready collection of reusable UI components built with Next.js, TypeScript, and Tailwind CSS. This project focuses on delivering pixel-perfect, Figma-accurate UI elements—especially a versatile category filter menu bar—ideal, product card, pagination for e-commerce or similar category-driven platforms.

- **Live-Demo:** [https://freelance-qllp.vercel.app/](https://freelance-qllp.vercel.app/)

---

## Table of Contents
- [Project Summary](#project-summary)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Getting Started](#installation--getting-started)
- [Component Walkthrough](#component-walkthrough)
- [Usage & Examples](#usage--examples)
- [Customization & Learning](#customization--learning)
- [API & Routing](#api--routing)
- [Technologies Used](#technologies-used)
- [Keywords](#keywords)
- [License](#license)
- [Conclusion](#conclusion)

---

## Project Summary

This project demonstrates how to create a highly customizable, Figma-accurate filter menu bar and associated UI components for a category-driven product page. The UI is built with modularity and reusability in mind, featuring multi-select dropdowns, product cards, paginations, with custom SVG icons, accessible controls, and flawless mobile responsiveness.

---

## Features

- **Pixel-perfect Figma/SVG Matching:** Dropdowns, checkboxes, icons, and layouts precisely mirror the Figma reference.
- **Reusable Components:** Core elements include `FilterDropDown`, `CategoryFilterMenuBar`, `ProductCard`, and `Pagination`.
- **Multi-select Dropdowns:** Each filter supports independent, multi-select checkboxes for flexible user selection.
- **Custom Icons:** Group/user, arrow, and checkbox icons implemented via SVG for crisp rendering.
- **Responsive & Accessible:** Keyboard navigation, focus states, and adaptive layouts for mobile/desktop.
- **Bug-free UX:** Fixed all known issues (e.g., duplicate checkbox selection, unique options).
- **Modern Stack:** Built on Next.js (App Router), TypeScript, Tailwind CSS, and ESLint for code quality.
- **Easy Theming:** All components styled with Tailwind for rapid customization.
- **Clear Project Structure:** Logical separation of concerns for scalable development.

---

## Project Structure

```
.
├── .gitignore
├── README.md
├── desktop_design.fig           # Figma design source
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public/                      # SVG assets and public files
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout for Next.js
│   │   └── page.tsx             # Main page, renders filter bar UI
│   └── components/
│       ├── CategoryFilter/
│       │   ├── FilterDropDown.tsx      # Reusable dropdown with custom checkboxes
│       │   └── CategoryFilterMenuBar.tsx # Filter bar with dropdowns/dividers
│       ├── Pagination/
│       └── ProductCard/
├── tsconfig.json
```
> **View more files & details:** [GitHub Repository File Explorer](https://github.com/arnobt78/freelancing-reusable-ui-components--NextJS/tree/main)

---

## Installation & Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/arnobt78/freelancing-reusable-ui-components--NextJS.git
   cd freelancing-reusable-ui-components--NextJS
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Component Walkthrough

### 1. CategoryFilterMenuBar (`src/components/CategoryFilter/CategoryFilterMenuBar.tsx`)
- The main filter bar UI.
- Renders multiple `FilterDropDown` components for category filtering (e.g., Brand, Flavor, Strength).
- Handles layout, divider lines, and integration between filters.

### 2. FilterDropDown (`src/components/CategoryFilter/FilterDropDown.tsx`)
- Reusable dropdown component with custom checkboxes.
- Supports multi-select, custom SVG icons, and accessible keyboard navigation.
- Designed for pixel-perfect accuracy with Figma.

### 3. ProductCard (in `/src/components/ProductCard/`)
- (Assumed based on directory) Renders individual product information with image, title, and other details.

### 4. Pagination (in `/src/components/Pagination/`)
- (Assumed based on directory) Handles pagination controls for product listings or filter results.

### 5. Layout & Global Styles (`src/app/layout.tsx` and `src/app/globals.css`)
- Sets up the overall page structure and applies Tailwind-based global styles.

---

## Usage & Examples

- The main filter bar is rendered on the homepage (`/src/app/page.tsx`).
- Each dropdown (Brands, Flavors, Strength) supports multi-select and independent selection.
- Custom SVG icons and checkboxes are used for visual consistency.
- Divider lines and spacing are tailored to the Figma design.
- All dropdown and checkbox bugs are fixed—selections are unique and independent.

**Example Usage in `page.tsx`:**
```tsx
import CategoryFilterMenuBar from '@/components/CategoryFilter/CategoryFilterMenuBar';

export default function Page() {
  return (
    <main>
      <CategoryFilterMenuBar />
      {/* Product grid, pagination, etc. */}
    </main>
  );
}
```

---

## Customization & Learning

- **Component Reuse:** Easily add more filters by extending the `CategoryFilterMenuBar` component.
- **Styling:** All styles are driven by Tailwind CSS for rapid, utility-first customization. You can change colors, spacing, or icon assets by editing the relevant classes or SVG files in `/public`.
- **Accessibility:** Keyboard navigation and focus states are built-in. For further accessibility improvements, review and extend ARIA attributes as needed.
- **Design Updates:** To match new Figma files, replace the SVGs in `/public` or adjust Tailwind classes in component files.

---

## API & Routing

- This project does not include a backend API by default, focusing on frontend UI components and static data.
- Next.js App Router is used for all routing and rendering.
- (If you wish to integrate with APIs, extend the data fetching logic in the relevant component or page files.)

---

## Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **SVG Assets** (for icons)
- **Figma** (for design reference)

---

## Keywords

`Next.js`, `Reusable Components`, `UI Library`, `TypeScript`, `Tailwind CSS`, `Category Filter`, `Dropdown`, `Checkbox`, `Pixel-Perfect`, `Figma`, `Accessibility`, `Frontend`, `Pagination`, `Product Card`, `React`, `ESLint`, `SVG Icons`, `Modular Design`, `E-commerce UI`

---

## License

This project is for demonstration and freelance use. You may adapt or extend it for your own projects.

---

## Conclusion

This repository is an excellent starting point for anyone looking to build scalable, maintainable, and pixel-perfect UI components with Next.js and modern frontend technologies. With a focus on reusability, accessibility, and design fidelity, you'll learn both how to create and how to structure professional-grade frontend code. Clone, customize, and contribute—or just use it as a teaching tool for yourself or your team!

---

> Happy Coding! 🎉  
> Thank you for checking out this project.
