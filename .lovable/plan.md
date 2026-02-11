

## Add SEO-Friendly Alt Descriptions for All Images

### Overview
Improve alt text descriptions across all components that render images to be more descriptive, keyword-rich, and SEO-optimized for B2B wholesale dried fruit search queries.

---

### Current State

The project has two types of image usage:

1. **Actual images** (via `OptimizedImage` component) - Used in `ProductCard`, `ProductPageTemplate`, and related product links
2. **Placeholder divs** (no `<img>` tags) - Used in `HeroSection`, `ExportMapSection`, `ManufacturingSection`, and `AboutPage` -- these have no alt text since they aren't images

Changes will focus on the components that actually render `<img>` tags.

---

### Changes

#### 1. ProductCard.tsx
**Current:** `"${product.name} - Premium Indonesian dried fruit for wholesale export"`
**Updated:** More specific alt text using product category and tagline for unique descriptions per product.

```tsx
alt={`${product.name} - ${product.tagline} | Bulk wholesale from Indonesia`}
```

#### 2. ProductPageTemplate.tsx - Hero Image
**Current:** `"${product.name} - Bulk Wholesale from Indonesia"`
**Updated:** Include certifications and category context.

```tsx
alt={`${product.name} wholesale supplier Indonesia - ${product.isOrganic ? "USDA & EU organic certified " : ""}${categoryLabels[product.category].toLowerCase()} for bulk export`}
```

#### 3. ProductPageTemplate.tsx - Related Products
**Current:** `"${related.name} - Indonesian wholesale dried fruit"`
**Updated:** Include pricing context for richer alt text.

```tsx
alt={`${related.name} - Wholesale ${categoryLabels[related.category].toLowerCase()} from Indonesia, ${related.pricing.fobBase}`}
```

#### 4. OptimizedImage.tsx - Placeholder Image
**Current:** `alt=""` (empty alt on blur placeholder)
**No change needed** - this is correct. The blurred placeholder is decorative and should have empty alt with `aria-hidden="true"`, which is already implemented.

---

### Summary of Changes

| File | What Changes |
|------|-------------|
| `src/components/products/ProductCard.tsx` | More descriptive alt with product tagline |
| `src/components/products/ProductPageTemplate.tsx` | Richer alt for hero image with certifications; better alt for related products with pricing |

---

### SEO Benefits

- Each product image gets a unique, descriptive alt text (avoids duplicate alt text across pages)
- Includes relevant B2B keywords: "wholesale", "bulk export", "supplier", "organic certified"
- Category context helps Google Image Search categorize products correctly
- Pricing in related product alts adds commercial intent signals

