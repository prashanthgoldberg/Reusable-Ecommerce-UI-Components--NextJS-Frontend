
# Freelance QLLP – Next.js Reusable E-commerce UI Components

<img width="1000" alt="Screenshot 2025-07-07 at 01 13 39" src="https://github.com/user-attachments/assets/202a9e1b-3fde-4b28-9006-caffe4b204e8" /> <img width="1000" alt="Screenshot 2025-07-07 at 01 14 50" src="https://github.com/user-attachments/assets/af966c07-ad13-4b3c-9a98-aa632dc79bc2" />

---

A robust, production-ready collection of reusable, Figma-accurate UI components for e-commerce and category-driven platforms, built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates how to architect, style, and compose a modern, scalable frontend with pixel-perfect fidelity, accessibility, and real-world interactivity—including a dynamic category filter, product cards, pagination, and more.

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

This repository is a complete, real-world example of how to build a highly modular, reusable, and visually flawless UI system for e-commerce or category-driven web apps. It features:

- **Centralized, dynamic product data** for all UI components
- **Interactive, multi-select category filter bar** with custom SVG icons
- **Reusable product cards** and detail pages, fully dynamic and data-driven
- **Pagination** and responsive grid layouts
- **Mobile-first, accessible design**

All components are designed for maximum reusability, maintainability, and ease of integration into other projects. The codebase is ideal for learning, rapid prototyping, or as a foundation for production e-commerce UIs.

---

## Features

- **Pixel-perfect Figma/SVG Matching:** All UI elements (dropdowns, checkboxes, icons, layouts) match the Figma reference exactly.
- **Reusable Components:** Includes `FilterDropDown`, `CategoryFilterMenuBar`, `ProductCard`, `Pagination`, and more.
- **Dynamic Multi-select Filtering:** Category filter bar supports independent, multi-select dropdowns for brands, flavors, and strengths, updating the product grid in real time.
- **Centralized Product Data:** All product info is managed in a single TypeScript file for easy updates and scalability.
- **Custom SVG Icons:** All icons are implemented as SVG for crisp, scalable rendering.
- **Responsive & Accessible:** Fully mobile-friendly, keyboard navigable, and accessible with ARIA/focus states.
- **Bug-free UX:** All known issues (duplicate checkboxes, filter logic, etc.) are fixed.
- **Modern Stack:** Built with Next.js (App Router), TypeScript, Tailwind CSS, and ESLint.
- **Easy Theming:** All styles are managed with Tailwind for rapid customization.
- **Clear Project Structure:** Logical, scalable file organization for easy extension.

---

## Project Structure

```text
.
├── .gitignore
├── README.md
├── desktop_design.fig           # Figma design source
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/                      # SVG assets and public files
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout for Next.js
│   │   └── page.tsx             # Main page, renders filter bar UI and product grid
│   └── components/
│       ├── CategoryFilter/
│       │   ├── FilterDropDown.tsx      # Reusable dropdown with custom checkboxes
│       │   └── CategoryFilterMenuBar.tsx # Filter bar with dropdowns/dividers
│       ├── Pagination/
│       │   └── Pagination.tsx          # Pagination controls
│       └── ProductCard/
│           ├── ListProductCard.tsx     # Product grid with filter and pagination
│           ├── SingleProductCard.tsx   # Individual product card
│           ├── useProductPagination.ts # Pagination hook
│           └── ...
├── tsconfig.json
```

> **See all files:** [GitHub File Explorer](https://github.com/arnobt78/freelancing-reusable-ui-components--NextJS/tree/main)

---

## Installation & Getting Started

1. **Clone the Repository:**

```bash
   git clone https://github.com/arnobt78/freelancing-reusable-ui-components--NextJS.git
   cd freelancing-reusable-ui-components--NextJS
   ```

1. **Install Dependencies:**

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

- Renders the main filter bar UI with multiple `FilterDropDown` components (Brand, Flavor, Strength)
- Dynamically generates dropdown options from product data
- Handles layout, divider lines, and filter state

### 2. FilterDropDown (`src/components/CategoryFilter/FilterDropDown.tsx`)

- Reusable dropdown with custom checkboxes and SVG icons
- Supports multi-select, keyboard navigation, and accessibility
- Designed for pixel-perfect Figma accuracy

### 3. ProductCard Components (in `/src/components/ProductCard/`)

- `ListProductCard.tsx`: Renders the product grid, filter bar, and pagination
- `SingleProductCard.tsx`: Displays individual product info (image, title, price, etc.)
- `ProductDetailLayout.tsx`: Product detail page, fully dynamic and responsive
- All product data is imported from a single source for consistency

### 4. Pagination (`src/components/Pagination/Pagination.tsx`)

- Handles pagination controls for product listings and filter results
- Responsive, accessible, and visually consistent

### 5. Layout & Global Styles (`src/app/layout.tsx` and `src/app/globals.css`)

- Sets up the overall page structure and applies Tailwind-based global styles

---

## Usage & Examples

### Main Page Example (`src/app/page.tsx`)

```tsx
import { ListProductCard } from "../components/ProductCard/ListProductCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-2">
      <ListProductCard />
    </div>
  );
}
```

### Reusing Components in Other Projects

1. **Copy the desired component(s) and their dependencies** from `/src/components/` into your own project.

```tsx
   import { CategoryFilterMenuBar } from "./components/CategoryFilter/CategoryFilterMenuBar";
   import { ListProductCard } from "./components/ProductCard/ListProductCard";
   // ...
```

2. **Import and use as needed:**

```tsx
   import { CategoryFilterMenuBar } from "./components/CategoryFilter/CategoryFilterMenuBar";
   import { ListProductCard } from "./components/ProductCard/ListProductCard";
   // ...
```

3. **Provide your own product data** (see `src/data/products.ts` for the data structure).

4. **Customize styles** via Tailwind classes or by editing SVG assets in `/public`.

---

## Customization & Learning

- **Component Reuse:** Add more filters by extending the `CategoryFilterMenuBar` and updating the product data structure.
- **Styling:** All styles are driven by Tailwind CSS for rapid, utility-first customization. Change colors, spacing, or icon assets by editing the relevant classes or SVG files in `/public`.
- **Accessibility:** Keyboard navigation and focus states are built-in. For further accessibility, review and extend ARIA attributes as needed.
- **Design Updates:** To match new Figma files, replace the SVGs in `/public` or adjust Tailwind classes in component files.
- **Teaching Tool:** The codebase is ideal for learning best practices in modular React, TypeScript, and Next.js development.

---

## API & Routing

- This project is frontend-only and uses static product data for demonstration.
- Next.js App Router is used for all routing and rendering.
- Product detail pages are rendered dynamically based on the product index in the URL (e.g., `/product-detail?idx=2`).
- To integrate with a backend API, extend the data fetching logic in the relevant component or page files.

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

`Next.js`, `Reusable Components`, `UI Library`, `TypeScript`, `Tailwind CSS`, `Category Filter`, `Dropdown`, `Checkbox`, `Pixel-Perfect`, `Figma`, `Accessibility`, `Frontend`, `Pagination`, `Product Card`, `React`, `ESLint`, `SVG Icons`, `Modular Design`, `E-commerce UI`, `App Router`, `Mobile Responsive`, `Teaching`, `Demo`, `Open Source`

---

## License

This project is for demonstration and freelance use. You may adapt or extend it for your own projects.

---

## Conclusion

This repository is an excellent starting point for anyone looking to build scalable, maintainable, and pixel-perfect UI components with Next.js and modern frontend technologies. With a focus on reusability, accessibility, and design fidelity, you'll learn both how to create and how to structure professional-grade frontend code. Clone, customize, and contribute—or just use it as a teaching tool for yourself or your team!

---

## Contact

For inquiries or feedback, please reach out via email at [arnob_t78@yahoo.com](mailto:arnob_t78@yahoo.com).

> Happy Coding! 🎨🚀
> Thank you for checking out this project.

---
