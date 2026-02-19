# Architecture

## Folder Tree

```
claude-todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/            # Static files imported by components (SVG, images)
│   ├── components/        # Reusable UI pieces rendered in multiple places
│   │   ├── Navbar.jsx
│   │   └── Navbar.css     # Co-located styles — same base name as the component
│   ├── pages/             # One file per route; rendered by <Routes> in App.jsx
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Playground.jsx
│   │   └── Playground.css
│   ├── App.jsx            # BrowserRouter root; only place to declare <Route> entries
│   ├── App.css            # Page layout (.page), button variants, card patterns
│   ├── index.css          # Global reset + :root CSS custom properties
│   └── main.jsx           # ReactDOM.createRoot entry point
├── docs/
│   ├── ARCHITECTURE.md    # This file
│   └── DESIGN_SYSTEM.md
├── CLAUDE.md
├── index.html
├── vite.config.js
└── package.json
```

## Pages vs Components

| Concept      | Location          | Rule                                                     |
|--------------|-------------------|----------------------------------------------------------|
| **Page**     | `src/pages/`      | Rendered by a `<Route>`; represents a full screen/view   |
| **Component**| `src/components/` | Reusable UI; rendered by pages or other components       |

A component should never contain routing logic. A page should never be imported as a nested UI piece by another page — extract a shared component instead.

## Adding a New Page

1. Create `src/pages/MyPage.jsx` with a default export.
2. Create `src/pages/MyPage.css` and import it at the top of `MyPage.jsx`.
3. In `App.jsx`, add a `<Route path="/my-page" element={<MyPage />} />` inside `<Routes>`.
4. In `src/components/Navbar.jsx`, add a `<NavLink to="/my-page">My Page</NavLink>` inside `.navbar-links`.

```jsx
// App.jsx — after adding the import and route
import MyPage from './pages/MyPage'

<Routes>
  <Route path="/"          element={<Home />} />
  <Route path="/playground" element={<Playground />} />
  <Route path="/my-page"   element={<MyPage />} />   {/* new */}
</Routes>
```

## Adding a New Component

1. Create `src/components/MyWidget.jsx` with a default export.
2. Create `src/components/MyWidget.css` and import it inside the component file.
3. Import directly: `import MyWidget from './components/MyWidget'` — no barrel files.

## Naming Rules

| Artifact          | Convention                          | Example                  |
|-------------------|-------------------------------------|--------------------------|
| Component file    | PascalCase `.jsx`                   | `PromptCard.jsx`         |
| Page file         | PascalCase `.jsx`                   | `Playground.jsx`         |
| CSS file          | Same base name as the component     | `PromptCard.css`         |
| CSS class names   | kebab-case                          | `.prompt-card`           |
| JS variables/fns  | camelCase                           | `handleSubmit`           |
| Route paths       | kebab-case                          | `/my-page`               |

## No Barrel Files

Do **not** create `index.js` or `index.jsx` in any folder as a re-export hub. Always import from the direct file path:

```js
// Good
import Navbar from './components/Navbar'

// Bad
import { Navbar } from './components'
```
