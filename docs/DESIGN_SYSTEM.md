# Design System

## CSS Custom Properties

All tokens are declared in `src/index.css` under `:root`. **Never** use raw hex values in component or page CSS files — always reference a token.

| Token                  | Value     | Usage                                      |
|------------------------|-----------|--------------------------------------------|
| `--color-bg`           | `#0f0f11` | Page background (`body`)                   |
| `--color-surface`      | `#1a1a1f` | Cards, navbar, elevated surfaces           |
| `--color-border`       | `#2a2a32` | Borders, dividers, hover backgrounds       |
| `--color-text`         | `#e8e8f0` | Primary readable text                      |
| `--color-muted`        | `#888899` | Secondary/placeholder text, inactive links |
| `--color-accent`       | `#7c6af7` | Primary interactive colour (buttons, focus)|
| `--color-accent-hover` | `#9b8dff` | Accent on hover                            |

## Typography Scale

| Context               | Size      | Weight | Where defined      |
|-----------------------|-----------|--------|--------------------|
| Body / base           | `1rem`    | 400    | `body` in index.css|
| Subtitle / secondary  | `1.1rem`  | 400    | `.subtitle`        |
| Prompt text           | `1.25rem` | 500    | `.prompt-text`     |
| Page heading (`h1`)   | `2.8rem`  | 700    | `.page h1`         |
| Home hero (`h1`)      | `3.5rem`  | 700    | `.home-page h1`    |
| Brand / mono label    | `0.9rem`  | 600    | `.navbar-brand`    |
| Nav links             | `0.9rem`  | 400    | `.navbar-links a`  |
| Counter / meta        | `0.8rem`  | 400    | `.prompt-counter`  |

## Button Variants

### `.btn-primary`
Use for the main affirmative action on a surface (e.g. Submit, Save).

```css
background: var(--color-accent);
color: #fff;
padding: 0.55rem 1.25rem;
border-radius: 8px;
font-weight: 500;
transition: background 0.2s;
```

- Hover: `background: var(--color-accent-hover)`
- Disabled: `opacity: 0.4; cursor: not-allowed`

### `.btn-secondary`
Use for cancel / destructive-free secondary actions alongside a primary button.

```css
background: transparent;
color: var(--color-muted);
padding: 0.55rem 1.25rem;
border-radius: 8px;
border: 1px solid var(--color-border);
transition: color 0.2s, border-color 0.2s;
```

- Hover: `color: var(--color-text); border-color: var(--color-muted)`

Both buttons must be placed inside `.prompt-actions` (flex row, `justify-content: flex-end`, `gap: 0.75rem`).

## Card Pattern — `.prompt-card`

Reference implementation in `src/App.css`. Use this pattern for any contained interactive surface.

```css
.prompt-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  position: relative;   /* anchors absolutely-positioned children like .prompt-counter */
}
```

Child elements follow this layout order inside a card:
1. Heading or label (`.prompt-text`)
2. Input / content area
3. Action row (`.prompt-actions`)
4. Optional absolute-positioned meta (e.g. `.prompt-counter`)

## Transition Standards

| Context                     | Duration | Property(ies)                  |
|-----------------------------|----------|--------------------------------|
| Navigation links            | `0.15s`  | `color`, `background`          |
| Inputs & buttons            | `0.2s`   | `border-color`, `background`, `color` |

Always use the shorthand form: `transition: <property> <duration>`. Do not use `transition: all`.

## CSS Authoring Rules

1. **Global tokens only in `index.css`** — the `:root` block is the single source of truth for colours and base styles. Do not add `:root` tokens anywhere else.
2. **Page-level layout in `App.css`** — scoped with the page class (`.home-page`, `.playground-page`, etc.) so styles don't leak.
3. **Component styles in the co-located CSS file** — `Navbar.css` lives next to `Navbar.jsx` and is imported inside that file.
4. **Never use inline styles** — all styling goes through CSS classes.
5. **Always use `rem` for spacing and font sizes** — never `px` for these properties (pixels are acceptable for borders: `1px solid …`).
6. **Class names are kebab-case** — `.prompt-card`, `.btn-primary`, `.navbar-links`.
