# React Product Dashboard

A simple React application that fetches product data from a public API and displays it with search, pagination, and create functionality.

---

## Features

- Fetch data from API
- Display products in a table
- Search / filter products by title
- Client-side pagination
- Add new product (mocked)
- Loading & error state handling

---

## Tech Stack

- React (Functional Components + Hooks)
- TypeScript
- Axios
- Tailwind CSS
- Prettier (code formatting)

---

## Setup Instructions

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
 ├── components/
 │    └── Product/
 │         ├── ProductTable.tsx
 │         ├── SearchBar.tsx
 │         ├── Pagination.tsx
 │         └── ProductForm.tsx
 │
 ├── hooks/
 │    └── useProducts.ts
 │
 ├── services/
 │    └── productService.ts
 │
 ├── pages/
 │    └── ProductPage.tsx
 │
 └── types/
```

---

## Key Technical Decisions

### 1. Custom Hook for Data Management

Data fetching and state are handled inside a custom hook (`useProducts`), similar to a Vuex module pattern.

This keeps the page component clean and separates concerns between:

- UI (Page & Components)
- Data logic (Hook)
- API layer (Service)

---

### 2. Client-side Pagination

Pagination is implemented on filtered data instead of raw data to ensure consistency with search results.

---

### 3. Memoization for Performance

`useMemo` is used to optimize:

- Filtering
- Pagination slicing

This avoids unnecessary recalculations on every render.

---

### 4. Controlled Form

The product creation form uses controlled inputs and updates the UI state directly without API submission (mocked behavior).

---

## Edge Case Handling

- Loading state while fetching data
- Error handling for API failure
- Empty state when no results found
- Pagination boundary handling (prevent overflow pages)

---

## Improvements (If Given More Time)

- Add debounce for search input
- Server-side pagination
- Sorting (price, rating)
- Better form validation
- UI enhancement (table styling / responsiveness)
- Add unit tests

---

## Notes

This project focuses on clean structure, maintainability, and handling real-world UI states rather than complex UI design.
