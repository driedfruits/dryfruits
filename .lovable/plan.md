

## Remove Duplicate "Origin" from Hero Section

The hero section shows "Origin: Indonesia" as standalone text **and** again inside the Quick Highlights list. Remove the standalone `<p>Origin: Indonesia</p>` line from `ProductPageTemplate.tsx` (around line 143), keeping the one in Quick Highlights.

### File: `src/components/products/ProductPageTemplate.tsx`
- Delete the `<p className="text-muted-foreground mb-4">Origin: Indonesia</p>` line

