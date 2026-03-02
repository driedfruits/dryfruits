

## Refactor Related Products into Reusable Component

### New File
**`src/components/products/RelatedProducts.tsx`**
- Accept `products: Product[]` prop
- Render the entire Related Products section (lines 257–288 from `ProductPageTemplate.tsx`), including the conditional `length > 0` guard, section wrapper, heading, grid, and product cards with `OptimizedImage`

### Modified Files
1. **`src/components/products/ProductPageTemplate.tsx`** — Replace lines 256–288 with `<RelatedProducts products={relatedProducts} />`. Remove `Package` from lucide imports if no longer used elsewhere (it is still used in hero section, so keep it).
2. **`src/components/products/index.ts`** — Add `RelatedProducts` export

