# GSG-project-01-react

A small e-commerce React app built with Vite, Tailwind CSS and React Query. This repository is the project used in the "GSG React Pro Course" and includes product listing, offers (daily/monthly), product detail pages, a cart, and a responsive UI.

---

## Table of contents

- About
- Features
- Tech stack
- Project structure
- Key components and pages
- API helpers
- Styling and responsive behavior
- Scripts
- Local development
- Testing and QA checklist
- Deployment notes
- Contributor notes
- Changelog (high level)

---

## About

This project demonstrates a small online shop UI with the following flows:

- Home page with hero slider, categories, and offer sections (Flash Sales / This Month).
- Product listing and filtering by category.
- Product details page with thumbnails, gallery, product metadata, and related products.
- Cart powered by a Redux slice (local store) and simple Add-to-cart interactions.
- Responsive UI that adapts to mobile/tablet/desktop with skeleton loaders while data is fetched.

The code is structured for clarity and to teach practical front-end patterns using modern tools.

---

## Features

- Responsive layout (mobile-first) using TailwindCSS utilities.
- Data fetching via React Query (`@tanstack/react-query`) and a small API helper in `src/api`.
- Reusable skeleton loader component (`src/components/Loading.jsx`) with variants for lists and product details.
- Hero slider with touch/swipe support and auto-advance.
- Categories panel that is usable on mobile (collapsible / toggle behavior).
- Offer sections:
  - `OfferDay` (Flash Sales) — shows products filtered by discount threshold.
  - `OfferMonth` (This Month) — shows top discounted products (sorted) to present monthly highlights.
- Product details page with related products and Add-to-cart functionality.

---

## Tech stack

- React 18
- Vite
- Tailwind CSS
- React Router
- React Query (@tanstack/react-query)
- Swiper (for carousels)
- Redux Toolkit (simple cart slice)
- Axios (used inside `src/api/client.js`)

---

## Project structure (important files)

Top-level files:

- `index.html` - Vite entry HTML
- `vite.config.js` - Vite configuration
- `package.json` - project scripts and dependencies

src/ (key directories):

- `src/main.jsx` - app bootstrap and providers
- `src/App.jsx` - main app routes
- `src/api/` - small API helpers
  - `client.js` - axios client
  - `product.js` - product fetch helpers (see notes below)
- `src/components/` - shared UI components
  - `Loading.jsx` - skeleton loader (variants: `offer`, `products`, `productDetails`, default)
  - `SliderImage.jsx` - home hero slider
  - `CategoriesMenu.jsx` - categories list and mobile toggle
  - `ProductCard.jsx` - card used across lists
  - `OfferDay.jsx`, `OfferMonth.jsx` - offer sections
  - `Navbar.jsx`, `Footer.jsx`, etc.
- `src/pages/` - route pages
  - `Home/`, `Product/`, `Cart/`, `Auth/`, `Dashboard/`, etc.
- `src/store/` - redux slice(s) (cartSlice.js)

---

## Key implementation details & decisions

- Loading skeletons are implemented to match the number of visible items per breakpoint (mobile/ipad/desktop). Use `count`, `countMobile`, `countIpad` props to tune placeholders.
- The `fetchDiscountProducts` helper in `src/api/product.js` supports two modes:

  - Threshold mode (pass a number <= 100) — returns products with `discountPercentage >= threshold` (used by `OfferDay`).
  - Monthly/top-discount mode (pass a number > 100) — returns products sorted by `discountPercentage` descending (used by `OfferMonth`).

  This was implemented so the two offer components can show different result sets while using the same helper.

- `OfferMonth` uses a different React Query key (`["products","monthly"]`) to avoid caching conflicts with `OfferDay`.

- Hooks ordering and conditional useEffect issues were fixed in `SliderImage.jsx` to ensure React rules are respected.

- Mobile categories: `CategoriesMenu.jsx` was changed to be visible on mobile and implemented as an in-flow collapsible panel under the navbar with tidy accessibility considerations.

---

## How to run (local development)

Requirements:

- Node.js 18+ (or compatible LTS)
- npm (or use yarn/pnpm if you prefer)

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Run build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## Scripts (package.json)

- `dev` - start Vite dev server (HMR)
- `build` - build for production
- `preview` - preview the production build
- `lint` - (if configured) run ESLint

---

## Testing & QA checklist

Before opening a PR or deploying:

- Run `npm run dev` and verify primary pages:
  - Home: hero slider, categories, OfferDay and OfferMonth sections.
  - Products listing and filtering by categories.
  - Product details page (thumbnails, gallery, description, related products).
- Test skeletons by throttling network or simulating slow responses: they should match number of visible items per breakpoint and reduce layout shift.
- Mobile/touch behavior:
  - Slider: swiping should work and auto-advance should not conflict with manual swipes.
  - Categories: toggle on mobile opens a full-width in-flow panel; test close button and keyboard accessibility.
- Cart behavior: add/remove items and verify Redux state (`src/store/cartSlice.js`) updates.

---

## Deployment notes

This is a static SPA — build the site (`npm run build`) and deploy the `dist` folder to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

When deploying, ensure environment variables (if any) are configured for production API endpoints. Current code uses `https://dummyjson.com` for demo data.

---

## Contributor notes

- Please follow the existing code style (Tailwind utility classes and small, focused components).
- If you change the `Loading` API (props/variants), update all callers (`OfferDay`, `OfferMonth`, `Products`, `ProductDetails`, etc.).
- When adding React Query hooks, choose descriptive `queryKey`s to avoid cache collisions.

---

## Changelog (high level)

- Fixed Hook ordering and touch handlers in `SliderImage.jsx`.
- Made categories visible & usable on mobile (`CategoriesMenu.jsx`).
- Implemented responsive skeletons and added `productDetails` skeleton variant (`Loading.jsx`).
- Modified `fetchDiscountProducts` to support threshold vs monthly/top-discount modes and adjusted `OfferDay` / `OfferMonth` accordingly.

---

If you'd like, I can also:

- Add a short CONTRIBUTING.md and PR template.
- Add a `.env.example` and document API endpoints and keys.
- Run a quick visual smoke-test locally and report screenshots or issues.

If you want any phrasing changed to Arabic or more course-specific branding, tell me which sections to localize and I'll update the README.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
