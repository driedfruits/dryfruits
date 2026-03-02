

## Replace Google Fonts with System Font Stack

Google Fonts (Poppins, Inter) require external network requests that block rendering. Switching to a system font stack uses fonts already installed on the user's device — zero network requests, instant rendering.

### Changes

**`index.html`** — Remove all Google Fonts loading (lines 9-14: preconnect, preload, and noscript fallback for `fonts.googleapis.com`).

**`tailwind.config.ts`** — Update `fontFamily.heading` and `fontFamily.body`:
- `heading`: `['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']`
- `body`: same system stack

**`src/index.css`** — Remove `--font-sans`, `--font-serif`, `--font-mono` custom properties referencing Roboto/Libre Caslon (lines ~91-93), or update them to the system stack.

### Result
- Eliminates 2 external DNS lookups + 1 CSS file + multiple font file downloads
- Fonts render instantly (no FOIT/FOUT)
- ~200-400ms faster First Contentful Paint

