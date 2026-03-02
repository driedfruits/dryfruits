

## Prerender.io Integration

Your Cloudflare Worker (`cloudflare/prerender-worker.js`) is already fully built with bot detection and Prerender.io proxying. The `index.html` already has `<meta name="fragment" content="!">`. The deployment instructions in `cloudflare/README.md` are complete.

The only missing piece is **client-side status code hints** so Prerender.io returns proper HTTP status codes to search engines:

### Changes

**1. Add `prerender-status-code` support to `SEO.tsx`**
- Add an optional `prerenderStatusCode` prop (number)
- When set, render `<meta name="prerender-status-code" content="404" />` (or whatever code)

**2. Set 404 status on `NotFound.tsx`**
- Pass `prerenderStatusCode={404}` to the SEO component so Prerender.io returns a real 404 to bots instead of a 200 with "not found" content

That's it — the Cloudflare Worker, bot list, and deployment setup are already complete. These two small changes ensure bots get correct HTTP semantics through Prerender.io.

