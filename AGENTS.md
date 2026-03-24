# AI Agent Context - SvelteKit Template

## Project Overview

This is a **SvelteKit** starter template with **Svelte 5** (runes), **TailwindCSS v4**, **Vitest**, and **Playwright** testing. Designed as a demo/learning project showcasing various SvelteKit features.

- **Type**: Static Site (GitHub Pages compatible)
- **Adapter**: `@sveltejs/adapter-static` with `fallback: "404.html"`
- **Node**: ES Modules (`"type": "module"`)

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | SvelteKit | 2.x |
| Language | Svelte | 5.x (runes) |
| Styling | TailwindCSS | 4.x |
| Build Tool | Vite | 7.x |
| Testing | Vitest + Playwright | 4.x |
| Linting | Biome | 2.x |
| Charts | Chart.js | 4.x |
| P2P | PeerJS | 1.x |
| Validation | Zod | 4.x |
| Types | TypeScript | 5.x |

---

## Available Routes

| Path | Description |
|------|-------------|
| `/` | Home - Todo list demo (demonstrates Svelte 5 runes) |
| `/my-localstorage` | LocalStorage persistence demo |
| `/auth` | Authentication example |
| `/upload` | File upload with drag-and-drop |
| `/dialog` | Dialog/modal examples |
| `/tables` | Data tables |
| `/charts` | Chart.js integration |
| `/clipboard` | Clipboard API demo |
| `/download` | File download demo |
| `/query-params` | URL query parameter handling |
| `/fetch-example` | Fetch API examples |
| `/peer-to-peer` | PeerJS WebRTC demo |

---

## Svelte 5 Patterns Used

This project demonstrates **Svelte 5 runes**:

```svelte
<script lang="ts">
// State (replaces let + reactivity)
let count = $state(0)

// Derived (replaces $: )
let double = $derived(count * 2)

// Derived by (complex derived logic)
let filtered = $derived.by(() => { /* ... */ })

// Effects (replaces $effect)
$effect(() => { console.log(count) })

// Props (replaces export let)
let { title = "Default" } = $props()

// Snippets (replaces slots)
{#snippet mySnippet()}
  <p>Content</p>
{/snippet}
{@render mySnippet()}

// Inspect (replaces $: console.log)
$inspect(value)
</script>
```

---

## Commands

```bash
# Development
npm run dev          # Start dev server on port 8000

# Build
npm run build        # Production build
npm run preview      # Preview production build

# Type checking
npm run check        # svelte-check + sync

# Linting & Formatting
npm run lint-format  # Biome check --write

# Testing
npm run test:unit    # Vitest unit tests
npm run test:e2e     # Playwright e2e tests
npm run test         # Unit + e2e combined
```

---

## Project Structure

```
src/
├── app.css                    # Global styles (Tailwind)
├── app.html                   # HTML template
├── routes/
│   ├── +layout.svelte         # Root layout (Navigation + Footer)
│   ├── +page.svelte           # Home page (Todo list)
│   ├── auth/                  # Auth demo
│   ├── charts/                # Chart.js demo
│   ├── clipboard/             # Clipboard API demo
│   ├── dialog/                # Dialog/modal demo
│   ├── download/              # Download demo
│   ├── fetch-example/         # Fetch API demo
│   ├── my-localstorage/       # LocalStorage demo
│   ├── peer-to-peer/          # PeerJS demo
│   ├── query-params/          # Query params demo
│   ├── tables/                # Tables demo
│   └── upload/                # Upload demo
└── lib/
    ├── assets/
    │   └── favicon.svg
    └── components/
        ├── Footer.svelte
        ├── Navigation.svelte
        ├── TodoList.svelte
        ├── counter-state/
        │   └── CounterState.svelte
        └── counter-writeable/
            └── CounterWritable.svelte
```

---

## Key Conventions

- **Components**: PascalCase, co-located in `src/lib/components/`
- **Routes**: SvelteKit file-based routing in `src/routes/`
- **Styles**: TailwindCSS utility classes, global styles in `src/app.css`
- **State**: Svelte 5 runes (`$state`, `$derived`, `$props`)
- **Testing**: Unit tests `*.spec.ts`, e2e in `e2e/` directory
- **Linting**: Biome (configured in `biome.json`)

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Components** | PascalCase | `TodoList.svelte`, `Navigation.svelte` |
| **Component Folders** | kebab-case | `counter-state/`, `counter-writeable/` |
| **Routes** | kebab-case | `/my-localstorage`, `/peer-to-peer` |
| **Variables/Functions** | snake_case | `new_todo`, `add_todo()`, `active_filter` |
| **State (Svelte 5)** | snake_case with descriptive names | `todos`, `filtered_todos`, `active_filter` |
| **Props** | snake_case | `title`, `items`, `on_select` |
| **Snippets** | snake_case | `choose_filter`, `render_item` |
| **Types/Interfaces** | PascalCase | `TodoItem`, `FilterType` |
| **Constants** | SCREAMING_SNAKE_CASE | `MAX_ITEMS`, `DEFAULT_TITLE` |
| **CSS Classes** | kebab-case (Tailwind) | `bg-blue-600`, `text-white` |
| **Files (general)** | kebab-case | `+page.svelte`, `app.css` |
| **Test Files** | `.spec.ts` suffix | `+page.svelte.spec.ts`, `demo.spec.ts` |
| **E2E Tests** | `.test.ts` suffix | `demo.test.ts` |

---

## Testing Setup

- **Unit Tests**: Vitest with `vitest-browser-svelte` for component testing
- **E2E Tests**: Playwright with Chromium
- **Browser Testing**: Configured in `vite.config.ts` (client environment)
- **Server Testing**: Node environment for non-Svelte tests

---

## Deployment

Configured for **GitHub Pages** with static adapter:
- Fallback: `404.html` (SPA mode)
- Base path: Set via `BASE_PATH` env var in production
- Dev: No base path

---

## External Dependencies (Client-Side Only)

Some packages must be excluded from SSR:
- `peerjs` - Marked as SSR external in `vite.config.ts`

---

## Useful Notes

- Uses `@tailwindcss/vite` plugin (Tailwind v4 approach)
- Svelte 5 snippets replace slots
- `$app/state` for page state (replaces `page` store)
- Uses Zod for runtime validation
- OpenAPI typescript integration for API types (see `generate-types` script)
