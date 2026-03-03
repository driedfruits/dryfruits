

## Sync Admin Editor with Product Page

After comparing `ProductPageTemplate` (what's displayed) with `ProductEditorPage` (what's editable), I found these gaps:

### Missing from Editor (displayed on product page but not editable)

1. **`harvestMonths`** — The product page renders a 12-month harvest calendar via `ProductSeasonality`, but the editor has no way to set the 12-element array (0=low, 1=off-peak, 2=peak per month)
2. **`keywords`** — SEO keywords array used in `<SEO>` meta tags, but no editor field exists

### Missing from Product Page (editable in editor but not displayed)

3. **Compliance section** — The editor has USA/EU/Global compliance fields, but `ProductPageTemplate` never renders `ProductCompliance`. It should be added to the page.

### Plan

**File: `src/components/editor/EditorAvailabilitySection.tsx`**
- Add a `harvestMonths` editor: a row of 12 month buttons, each cycling through 0 → 1 → 2 on click, with color-coded display matching the product page legend

**File: `src/pages/ProductEditorPage.tsx`**
- Add `harvestMonths` state (12-element number array)
- Load/save `harvestMonths` in `loadProduct` and `jsonOutput`
- Pass to `EditorAvailabilitySection`

**File: `src/components/editor/EditorSeoSection.tsx`**
- Add a `keywords` text input (comma-separated) for SEO keywords

**File: `src/pages/ProductEditorPage.tsx`**
- Add `keywords` state, load/save it

**File: `src/components/products/ProductPageTemplate.tsx`**
- Add `<ProductCompliance product={product} />` between ProductFAQ and RelatedProducts sections

**File: `src/pages/ProductEditorPage.tsx`**
- Update validation if needed for new fields

