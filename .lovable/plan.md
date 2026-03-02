

## Remove Redundant Size Suffix from Product H1

### Problem
The `<h1>` appends `specifications.size.split(",")[0]` after the product name, producing titles like:
> **Wholesale Dried Papaya Chunks & Slices – Chunks 1-2cm**

This is redundant when the product name already describes the form.

### Fix

**`src/components/products/ProductPageTemplate.tsx`** — Simplify the h1 to just use the product name:

```tsx
// Before
<h1>Wholesale {product.name} – {product.specifications.size?.split(",")[0]}</h1>

// After
<h1>Wholesale {product.name}</h1>
```

Single line change. The size/cut info is already shown in the Quick Highlights section below.

