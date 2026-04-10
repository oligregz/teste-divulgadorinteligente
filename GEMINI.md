# Project Context: SmartPromo (Divulgador Inteligente Fullstack Test)

## 📌 Overview
This is a front-end e-commerce (affiliate-focused) project built as a technical test. The system consumes a REST API (based on Strapi CMS), displays products, applies filters via coupons and a search bar through the URL, and manages a shopping cart using global state.

## 🛠️ Tech Stack & Architecture
* **Framework:** Next.js (App Router) - No `src/` directory.
* **Styling:** Tailwind CSS v4 (Settings and `@keyframes` injected directly into `app/globals.css`, no `tailwind.config.ts`).
* **State Management:** Redux Toolkit (RTK) + React-Redux.
* **Testing:** Jest + React Testing Library (using the native Next.js SWC compiler, no `ts-jest`).
* **Design Patterns:** Adapter Pattern in the services layer (to flatten Strapi's `data[].attributes`).

## 📂 Directory Structure
```text
> app/           (Routes, Global Layout, Global CSS)
> components/    (Visual UI/UX Components: Header, ProductCard, CartDrawer, CouponList)
> services/      (Native Fetch API request layer and URL utilities)
> store/         (Redux Configuration, Slices, and Providers)
> types/         (Global TypeScript Interfaces)
