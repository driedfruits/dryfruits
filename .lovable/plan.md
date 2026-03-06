

## Regroup Admin Editor Fields for Better UI

Currently the `EditorSeoSection` mixes page-display fields (H1 title, short name) with SEO meta fields (meta title, meta description, keywords) in one flat list. Tagline and Description sit outside any group as loose fields. This plan splits them into logical sub-groups.

### Changes to `EditorSeoSection.tsx`

Split the single section into two visual sub-groups within the same component:

**Group 1 — "Page Display"**: Hero H1 Title, Short Name, Tagline, Description
**Group 2 — "SEO Meta Tags"**: Meta Title, Meta Description, SEO Keywords

### Changes to `ProductEditorPage.tsx`

- Move `tagline` and `description` props into `EditorSeoSection` (they currently sit as standalone fields at lines 221-222)
- Remove the standalone `FormInput`/`FormTextarea` for tagline and description
- Pass `tagline`, `setTagline`, `description`, `setDescription` to `EditorSeoSection`

### Result

The editor will show:

```text
┌─ Page Display ────────────────────────┐
│  Hero H1 Title (SEO)                  │
│  Short Name (UI labels)               │
│  Tagline                              │
│  Description                          │
└───────────────────────────────────────┘

┌─ SEO Meta Tags ──────────────────────┐
│  Meta Title                           │
│  Meta Description                     │
│  SEO Keywords                         │
└───────────────────────────────────────┘
```

Two files changed: `EditorSeoSection.tsx` and `ProductEditorPage.tsx`. No data or serialization changes needed.

