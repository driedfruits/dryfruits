

## Use Short Names in Footer Product Links

The footer currently displays `product.name` for each product link. Most products have short names (e.g., "Dried Pineapple"), but some like Dried Papaya have long SEO titles ("Wholesale Bulk Dried Dehydrated Papaya Chunks & Slices") that clutter the footer.

### Approach
In `src/components/layout/Footer.tsx`, derive a short display name from the product ID instead of using `product.name`. Convert the ID (e.g., `dried-papaya`) to title case (`Dried Papaya`).

### File: `src/components/layout/Footer.tsx`
- In the `footerLinks.products` array where `driedFruits.map(p => ...)` is used, replace `p.name` with a formatted version of `p.id` — split by `-`, capitalize each word, join with space.

