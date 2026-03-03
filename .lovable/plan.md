

## Move Product Description + Add Packaging Options Section

### What changes

1. **Move "Product Description" (sensory + applications) from its current position (line 220-221) to directly after the Hero section (after line 208)**, removing it from the later position.

2. **Add a new "Packaging Options" subsection** alongside the product description, shown as a 2-column grid with placeholder photos:
   - **Left card**: Retail standing pouch — placeholder image with label "Retail / Private Label Pouches" and subtitle about custom branding
   - **Right card**: Bulk HORECA 10kg pack — placeholder image with label "Bulk / HORECA 10kg Carton" and details about PE liner

3. **Create a new combined section component** `ProductDescriptionPackaging` that renders:
   - Product Description (flavor, texture, applications) — reusing existing logic from `ProductSensoryApplications`
   - Packaging Options — 2-col grid with two image cards using `OptimizedImage` and placeholder images

### Layout structure

```text
┌─────────────────────────────────────────┐
│  Hero Section (image + wholesale card)  │
├─────────────────────────────────────────┤
│  NEW: Product Description & Packaging   │
│  ┌──────────────┐  ┌─────────────────┐  │
│  │ Sensory info  │  │ Applications    │  │
│  └──────────────┘  └─────────────────┘  │
│  Packaging Options (2-col grid)         │
│  ┌──────────────┐  ┌─────────────────┐  │
│  │ Retail Pouch  │  │ Bulk 10kg Pack  │  │
│  │ (placeholder) │  │ (placeholder)   │  │
│  │ Private Label │  │ HORECA Carton   │  │
│  └──────────────┘  └─────────────────┘  │
├─────────────────────────────────────────┤
│  Specifications Table                   │
│  ...rest of page...                     │
```

### Files to change

1. **New file: `src/components/products/ProductDescriptionPackaging.tsx`**
   - Accepts `product: Product` prop
   - Renders sensory profile (flavor, texture) + applications in a grid (same as current `ProductSensoryApplications`)
   - Below that, renders "Packaging Options" heading with a 2-col grid:
     - Card 1: `/placeholder.svg` image, title "Retail / Private Label Pouches", description from `product.packaging.retail`, note "Custom branding available"
     - Card 2: `/placeholder.svg` image, title "Bulk / HORECA Pack", description from `product.packaging.bulk`
   - Each card uses `OptimizedImage` with `aspectRatio="video"` for a landscape photo feel

2. **`src/components/products/ProductPageTemplate.tsx`**
   - Import `ProductDescriptionPackaging`
   - Add `<ProductDescriptionPackaging product={product} />` right after the Hero section (after line 208)
   - Remove the `<ProductSensoryApplications>` call from line 221
   - Remove the `ProductSensoryApplications` import
   - Remove `Thermometer` and `ExternalLink` from lucide imports (unused after previous removals)

3. **`src/components/products/index.ts`** — export the new component

