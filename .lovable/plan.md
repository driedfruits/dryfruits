

## Add Cut Size & Season to Product Hero

Add two new info rows to the "Quick Highlights" list in `ProductPageTemplate.tsx` hero section.

### Changes

| File | Change |
|------|--------|
| `src/components/products/ProductPageTemplate.tsx` | Add "Cut Size / Form" and "Season" rows to the Quick Highlights `<ul>` after the existing items (before the sample policy row) |

### Details
- **Cut Size / Form**: Display `product.specifications.size` (already exists in data). Show full value, not truncated.
- **Season**: Display `product.availability?.peakSeason`. Only render if value exists.

Both use the same `<li>` pattern as existing rows (font-medium label + muted-foreground value).

