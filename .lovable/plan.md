

## Merge Products Page and Category Page into One

Since there is only one category (`dried-fruits`), `/products` and `/products/dried-fruits` render nearly identical content — a hero, breadcrumbs, and a product grid. The difference is that `ProductsPage` also has a `ProductComparisonTable` and `ProductCategoryPage` has an `ItemList` schema and breadcrumb nav.

### Plan

**1. Merge into `ProductsPage.tsx`**

Combine the best of both pages into `ProductsPage.tsx`:
- Keep the hero section, comparison table, and product grid from `ProductsPage`
- Add the `ItemList` schema from `ProductCategoryPage`
- Add the breadcrumb nav strip from `ProductCategoryPage`
- Use `products` directly (all products = all dried fruits)

**2. Redirect `/products/dried-fruits` → `/products`**

In `App.tsx`, replace the `ProductCategoryPage` route with a redirect:
```
<Route path="/products/dried-fruits" element={<Navigate to="/products" replace />} />
```

Keep the generic `/products/:category` route pointing to `ProductCategoryPage` as a fallback for future categories, or remove it entirely and show a redirect/404.

**3. Update internal links**

All links pointing to `/products/dried-fruits` (found in `Footer.tsx` and breadcrumbs in `ProductPageTemplate.tsx`) should point to `/products` instead.

**4. Delete or simplify `ProductCategoryPage.tsx`**

Since the only category now redirects, this file can be deleted or kept as a stub for future categories.

**5. Files changed**
- `src/pages/ProductsPage.tsx` — add breadcrumb nav, ItemList schema
- `src/App.tsx` — redirect `/products/dried-fruits` to `/products`
- `src/components/products/ProductPageTemplate.tsx` — update breadcrumb link
- `src/components/layout/Footer.tsx` — update "All Dried Fruits" link if needed
- `src/pages/ProductCategoryPage.tsx` — delete

