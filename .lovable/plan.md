

## Add Individual Product Links to Footer

### Change: `src/components/layout/Footer.tsx`

Replace the static `footerLinks.products` array with dynamic product links generated from `getProductsByCategory("dried-fruits")`.

- Import `getProductsByCategory` from `@/data/companyData`
- Replace the hardcoded single "All Dried Fruits" link with individual product links (Dried Mango, Dried Papaya, etc.) each linking to `/products/dried-fruits/{id}`
- Keep "All Dried Fruits" as the first link, followed by all 10 individual products
- The Products column will now list all dried fruits for quick buyer access

