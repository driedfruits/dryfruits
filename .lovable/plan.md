## Goal

Generate one fully-rendered HTML file per public route at build time (`/index.html`, `/about/index.html`, `/products/dried-fruits/dried-mango/index.html`, etc.). Lovable continues to serve static assets — no runtime server needed. React hydrates on top for interactivity. The Cloudflare/Prerender.io bot proxy is no longer needed for these routes (every user already gets real HTML).

## What you'll see after this ships

- View-source on any public page shows full content, headings, copy, product specs, schema JSON-LD — not an empty `<div id="root">`.
- Per-page `<title>`, meta description, canonical, and OG tags are baked into the HTML (no Helmet flicker).
- First Contentful Paint drops noticeably on slow connections.
- Admin (`/admin/products`) and Design System (`/design-system`) stay client-only.

## Approach

Use **`vite-react-ssg`** — a community SSG library purpose-built for Vite + React Router 6 + Helmet. It runs the existing React app in Node during `vite build`, walks every declared route, and emits an HTML file per route alongside the JS bundle.

## Changes

### 1. Add SSG dependency and build scripts
- `bun add vite-react-ssg`
- `package.json` scripts:
  - `"build": "vite-react-ssg build"` (replaces current `vite build`)
  - keep `"dev": "vite"` unchanged — dev stays SPA for speed

### 2. Convert routes to a shared route config
- Create `src/routes.tsx` exporting a `RouteRecord[]` consumed by both client and SSG builder. Same route list as current `src/App.tsx`, with two flags per route:
  - `entry: true` for public routes (SSG-rendered)
  - `entry: false` for `/admin/products`, `/design-system`, and the catch-all `*` (client-only)
- Add `getStaticPaths` for the dynamic `/products/:category/:productId` route — it returns the list of `{ category, productId }` tuples by fetching products from Supabase **at build time** (using the anon key via `@supabase/supabase-js` in Node).

### 3. New SSG entry
- Add `src/main.ssg.tsx`: exports `createRoot` per vite-react-ssg's contract (`export const createRoot = ViteReactSSG(options, routes, setup)`).
- Move providers (`HelmetProvider`, `ErrorBoundary`, `TooltipProvider`, `ProductsProvider`, `Toaster`s) out of `App.tsx` into the SSG `setup()` so they wrap both SSR and CSR equally.
- `App.tsx` becomes thin: just `<Routes>` from the shared config.
- `src/main.tsx` (CSR entry) also consumes the same route config via `createBrowserRouter` so behavior matches.

### 4. Make ProductsContext SSG-safe
- ProductsContext currently fetches in `useEffect` (client-only — fine for SSG since effects don't run during render).
- Accept an optional `initialProducts` prop. During SSG build, the route's `data` loader fetches products once and seeds the provider so product pages render with real data. Client then refetches on mount for freshness.
- Guard `supabase` calls behind `typeof window` only where needed (the JS client works in Node, but we skip realtime subscriptions during SSG).

### 5. Move static fallback meta out of `index.html`
- Per-page `<title>`/meta now come from `react-helmet-async` rendered into the HTML by vite-react-ssg. Strip the hardcoded `<title>`/OG tags from `index.html` to avoid duplicates; keep only the GA snippet, favicon, viewport, and the root div.

### 6. Update Cloudflare prerender worker
- Add a bypass: if the request path matches a pre-rendered route (any route except `/admin/*` and `/design-system`), serve the static HTML directly and skip Prerender.io. Cheaper, faster, and equivalent output. Keep Prerender.io only as a safety net for any path that hasn't been pre-rendered yet.

### 7. Update sitemap & robots
- No change to URLs. `public/sitemap.xml` already lists every public route.

## Build-time data fetching

Build runs in Node and needs internet to hit Supabase. Two values come from the project's existing `.env`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

If the build environment can't reach Supabase (offline CI), SSG falls back to rendering product pages with an empty product list — the page still renders, client hydration fills it in. We'll log a warning rather than fail the build.

## Risk and tradeoffs

- **Build time grows** from ~10s to ~30–60s (one extra render per route). Acceptable for a 25-route site.
- **Hydration mismatches**: any code that reads `window`, `localStorage`, or `navigator` during render will throw on the server. Audit needed; suspect spots are `ScrollToTop`, `useWhatsApp`, analytics calls, the UTM capture in `main.tsx`. Fix by gating with `typeof window !== "undefined"` or moving into `useEffect`.
- **Admin/Design-system routes** stay client-only via `entry: false`, so password-protected and dev-only surfaces don't leak into the static bundle.
- **Product data freshness**: pages are baked at build time, so adding/editing a product in the admin doesn't update public pages until next publish. Acceptable — products change rarely. Client-side refetch on mount keeps live visitors current within seconds.
- **Lovable hosting compatibility**: vite-react-ssg outputs to `dist/` exactly like a normal Vite build — just with more HTML files. Lovable's static hosting serves them as-is. Publish flow unchanged.

## Files touched

- `package.json` (add dep, update build script)
- `vite.config.ts` (no change required; vite-react-ssg reads existing config)
- `src/routes.tsx` (new, shared route config + `getStaticPaths`)
- `src/main.ssg.tsx` (new SSG entry)
- `src/main.tsx` (refactor to use shared routes)
- `src/App.tsx` (slimmed down)
- `src/contexts/ProductsContext.tsx` (accept `initialProducts`, SSG-safe)
- `src/components/ScrollToTop.tsx`, `src/lib/utm.ts`, any `window.*` callers (window-guard audit)
- `index.html` (remove duplicated static meta)
- `cloudflare/prerender-worker.js` (add static-HTML bypass)

## Out of scope

- Migrating to a per-request SSR runtime (would require leaving Lovable hosting).
- Incremental Static Regeneration / on-demand revalidation.
- Streaming SSR.
