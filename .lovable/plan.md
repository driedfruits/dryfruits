

## Add Redirects for Legacy WordPress URLs

### Overview
Add redirects for old WordPress URLs (category pages, blog posts, search queries, feeds) to the home page, preventing 404 errors and preserving SEO equity from the previous site.

---

### Changes

#### 1. Client-Side Redirects - `src/lib/redirects.ts`

Add these rules to the `redirectRules` array:

```typescript
// Legacy WordPress URL redirects
{ from: "/category/uncategorized", to: "/" },
{ from: "/category/uncategorized/feed", to: "/" },
{ from: "/hello-world", to: "/" },
```

#### 2. Search Query Redirect - `src/App.tsx`

Add a dedicated route component to handle `/?s=` search query strings, since React Router path-based redirects don't match query parameters. A small `SearchRedirect` component will check for the `s` query param and redirect to `/`.

#### 3. Server-Side Redirects - `public/_redirects`

Add matching rules for Netlify/hosting:

```
/category/uncategorized      /                              301
/category/uncategorized/feed /                              301
/hello-world                 /                              301
```

Note: The `/?s=` query parameter redirect is handled client-side only, as `_redirects` files typically don't support query string matching.

---

### Summary

| File | Change |
|------|--------|
| `src/lib/redirects.ts` | Add 3 WordPress legacy path redirects |
| `src/App.tsx` | Add `SearchRedirect` component for `/?s=` query handling |
| `public/_redirects` | Add 3 server-side redirect rules |

