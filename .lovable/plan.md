

## Integrate Prerender.io

Prerender.io serves pre-rendered HTML to search engine bots for better SEO on SPAs. Since this project deploys on Netlify-style infrastructure (evidenced by `_redirects`), the integration has two parts:

### 1. Add Prerender.io meta tag — `index.html`
Add `<meta name="fragment" content="!">` to the `<head>` to signal to crawlers that JavaScript rendering is needed.

### 2. Add Netlify configuration — `netlify.toml` (new file)
Create a `netlify.toml` at the project root with the official `netlify-plugin-prerender` plugin:

```toml
[[plugins]]
  package = "netlify-plugin-prerender"
  [plugins.inputs]
    prerenderToken = "YOUR_PRERENDER_TOKEN"
```

### 3. API Token
Prerender.io requires a private API token from your Prerender.io account dashboard. This token will need to be stored securely. Since this is a build-time plugin config (not runtime code), the token goes directly in `netlify.toml` or as a Netlify environment variable `PRERENDER_TOKEN`.

**Before proceeding**: You will need a Prerender.io account and API token. Do you have one, or would you like guidance on where to get it?

### Note on Lovable deployment
Lovable's publish infrastructure may not support custom Netlify plugins. If that's the case, an alternative approach is to use Prerender.io's middleware integration via a `_headers` file or configure it after connecting to your own hosting/Netlify account via GitHub export.

