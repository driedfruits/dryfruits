

## Integrate Prerender.io via Cloudflare Workers

Cloudflare Workers act as a middleware layer that intercepts requests, detects bot user-agents, and proxies those requests through Prerender.io for pre-rendered HTML. This approach works regardless of hosting provider.

### Changes

#### 1. Remove Netlify plugin — `netlify.toml`
Remove the `netlify-plugin-prerender` config since we're switching to Cloudflare Workers.

#### 2. Create Cloudflare Worker script — `cloudflare/prerender-worker.js` (new, reference file)
A standalone Worker script (deployed outside Lovable) that:
- Checks the `User-Agent` header against a list of known bots (Googlebot, Bingbot, GPTBot, etc.)
- If bot detected → rewrites the request to `https://service.prerender.io/https://dryfruits.biz/<path>` with the Prerender token in the `X-Prerender-Token` header
- If regular user → passes request through to origin unchanged

#### 3. Create deployment instructions — `cloudflare/README.md` (new, reference file)
Step-by-step guide:
1. Install Wrangler CLI
2. Create a Worker in Cloudflare dashboard
3. Add `PRERENDER_TOKEN` as a Worker secret
4. Deploy the worker script
5. Add a Cloudflare route rule to run the Worker on `dryfruits.biz/*`

### Technical detail
The Worker uses the existing Prerender.io token (`ugh1U9Ofd176otqDSqSG`). The token will be stored as a Cloudflare Worker secret (not hardcoded in the worker script) and accessed via `env.PRERENDER_TOKEN`.

### Scope note
The Worker itself runs on Cloudflare's infrastructure, not inside the Lovable app. The files created are reference/deployment artifacts. Your domain's DNS must point through Cloudflare for this to work.

