

## Use `shortName` across all UI components

Replace long SEO product names and ID-derived names with the centralized `shortName` field in these locations:

### 1. Footer (`src/components/layout/Footer.tsx`, line 11)
Replace the `id.split('-').map(...)` derivation with `p.shortName`.

### 2. Product Card (`src/components/products/ProductCard.tsx`, line 59)
Display `product.shortName` instead of `product.name` in the visible `<h3>`. Keep `product.name` in the `alt` attribute for SEO.

Update `ProductCardProps` interface to include `shortName`.

### 3. Product Comparison Table (`src/components/products/ProductComparisonTable.tsx`)
Use `product.shortName` in the selected-product chips (line 209), table headers (line 264), and mobile card titles (line 342). Keep `product.name` in aria-labels.

### 4. Product Page Breadcrumb (`src/components/products/ProductPageTemplate.tsx`, line 113)
Display `product.shortName` in the breadcrumb trail. Keep `product.name` in SEO meta tags (lines 48-50) and structured data (line 61).

### 5. Sticky Inquiry Bar (`src/components/products/StickyInquiryBar.tsx`, line 17)
Use `product.shortName` in the visible label. Keep `product.name` in the WhatsApp message for context.

### 6. Related Products (`src/components/products/RelatedProducts.tsx`)
Use `related.shortName` for the visible card title. Keep `product.name` in `alt` for SEO.

### 7. Homepage Product Cards (`src/components/home/ProductCategoriesSection.tsx`)
Replace the `shortNames` map and `getShortName` helper with `product.shortName` — eliminating the duplicated mapping.

### What stays as `product.name`
- SEO titles, meta descriptions, keywords
- Image alt attributes
- Structured data / JSON-LD
- Editor page fields

