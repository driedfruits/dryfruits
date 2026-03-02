

## Add SEO & Hero Title Fields to Product Editor

Add three new editable fields to the admin product editor for SEO meta tags and the hero section title.

### New State
- `metaTitle: string` — SEO `<title>` tag
- `metaDescription: string` — SEO meta description
- `heroTitle: string` — maps to `product.name` (the H1 displayed in hero); rename existing `name` state to clarify

### Changes

| File | Change |
|------|--------|
| `src/pages/ProductEditorPage.tsx` | Add `metaTitle` and `metaDescription` state. Add loadProduct mapping from `product.metaTitle` and `product.metaDescription`. Add a new "SEO & Page Settings" card section at the top of the form (after product selector, before tagline) with 3 inputs: Hero H1 Title (existing `name`), Meta Title, Meta Description (textarea). Include `metaTitle` and `metaDescription` in JSON output. |

### Form Layout
New "SEO & Page Settings" bordered card placed right after the product selector containing:
1. **Hero H1 Title** — existing `name` field, moved here with clearer label
2. **Meta Title** — text input, placeholder: "e.g. Buy Dried Pineapple Wholesale | DFT Indonesia"
3. **Meta Description** — textarea, placeholder: "SEO description for search results (150-160 chars recommended)"

### JSON Output Addition
```json
{
  "metaTitle": "...",
  "metaDescription": "..."
}
```

