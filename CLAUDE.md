# Claude Code — Project Brief

## Project

A React SPA for exploring AI prompts. Built with React 18, Vite 5, and React Router 7.

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| UI       | React 18 (JSX, hooks)             |
| Bundler  | Vite 5                            |
| Routing  | React Router 7 (`BrowserRouter`)  |
| Styles   | Vanilla CSS with custom properties|

## Folder Conventions

```
src/
  components/   # Reusable UI (Navbar, etc.)
  pages/        # Route-level components (Home, Playground, etc.)
  assets/       # Static assets
  App.jsx       # Router root — all routes live here
  App.css       # Page layout, button variants, card patterns
  index.css     # Global reset + CSS custom properties (:root tokens)
  main.jsx      # Entry point
docs/
  ARCHITECTURE.md
  DESIGN_SYSTEM.md
```

## Rules to Enforce

- **Default exports only** — every component and page uses `export default`.
- **Pages in `src/pages/`**, shared UI in `src/components/`.
- **Each component owns its CSS file** — co-located, same base name (e.g. `Navbar.jsx` + `Navbar.css`).
- **No hardcoded hex values in component or page CSS** — use CSS custom properties from `index.css` only.
- **Routing lives in `App.jsx`** — add new `<Route>` entries there; add the matching `<NavLink>` in `Navbar.jsx`.
- **No new `npm` dependencies without asking** — check with the user first.
- **No barrel `index.js` files** — import directly from the file path.
- **No inline styles** — always use a class in a CSS file.
- **Always use `rem`** for spacing and font sizes.

## Dev Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run lint     # ESLint
```

## Supporting Docs

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — folder structure, routing conventions, naming rules
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — CSS tokens, typography scale, button variants, card patterns
