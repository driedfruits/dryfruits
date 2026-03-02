# Cloudflare Worker — Prerender.io Integration

This Worker intercepts bot traffic and serves pre-rendered HTML via Prerender.io for SEO.

## Prerequisites

- Domain (`dryfruits.biz`) DNS managed through Cloudflare
- [Prerender.io](https://prerender.io) account with token: `ugh1U9Ofd176otqDSqSG`
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed

## Deployment Steps

### 1. Install Wrangler

```bash
npm install -g wrangler
wrangler login
```

### 2. Create `wrangler.toml` (locally, not in this repo)

```toml
name = "prerender-worker"
main = "prerender-worker.js"
compatibility_date = "2024-01-01"

routes = [
  { pattern = "dryfruits.biz/*", zone_name = "dryfruits.biz" },
  { pattern = "www.dryfruits.biz/*", zone_name = "dryfruits.biz" }
]
```

### 3. Add the Prerender token as a secret

```bash
wrangler secret put PRERENDER_TOKEN
# Paste: ugh1U9Ofd176otqDSqSG
```

### 4. Deploy

```bash
wrangler deploy
```

### 5. Verify

```bash
# Should return pre-rendered HTML (full content, not empty #root div)
curl -A "Googlebot" https://dryfruits.biz/

# Should return normal SPA
curl https://dryfruits.biz/
```

## How It Works

1. Request hits Cloudflare → Worker runs
2. Worker checks `User-Agent` against known bot list
3. **Bot detected** → proxies request to `service.prerender.io` with auth token → returns pre-rendered HTML
4. **Regular user** → passes request to origin unchanged

## Bot List

Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot, Applebot, FacebookExternalHit, TwitterBot, LinkedInBot, Slackbot, DiscordBot, WhatsApp, Pinterest, Reddit, and more.

## Updating

Edit `prerender-worker.js` and run `wrangler deploy` again.
