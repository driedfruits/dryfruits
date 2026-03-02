

## Refactor Quick Highlights into Reusable Component

Extract the Quick Highlights `<ul>` (lines 177–226) from `ProductPageTemplate.tsx` into a new dedicated component.

### New File
**`src/components/products/ProductQuickHighlights.tsx`**
- Accepts `product: Product` as prop
- Renders the `<ul>` with all conditional highlight rows (Certifications, MOQ, Lead Time, Cut Size/Form, Season, Moisture, Shelf Life, Origin, Sample Policy)
- Uses a data-driven approach: define an array of `{ label, value }` entries, filter out falsy values, and map to `<li>` elements — reducing repetition

### Modified File
**`src/components/products/ProductPageTemplate.tsx`**
- Replace lines 176–226 (the entire Quick Highlights block) with `<ProductQuickHighlights product={product} />`
- Add import for the new component

### Export
**`src/components/products/index.ts`** — add `ProductQuickHighlights` export

