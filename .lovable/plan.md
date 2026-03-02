

## Update "Our Product Range" Section

### Changes to `src/components/home/ProductCategoriesSection.tsx`

Instead of showing 4 category cards (Dried Fruits, Powdered, Vacuum Fried, Ginger & Turmeric), show individual dried fruit products directly.

**Approach:**
- Import `products` from `companyData` instead of `productCategories`
- Filter to only `dried-fruits` category products
- Display each product as a card linking to `/products/dried-fruits/{product.id}`
- Each card shows the product name (e.g., "Dried Papaya", "Dried Mango") with an arrow link
- Use a grid layout (3-4 columns) with the same gradient card style
- Keep the "View All Products" CTA button at the bottom
- Update subtitle text to reflect dried fruits focus

**Products that will appear** (10 items):
Dried Papaya, Dried Pineapple, Dried Avocado, Dried Mango, Dried Dragon Fruit, Dried Snake Fruit, Dried Breadfruit, Dried Jackfruit, Dried Coconut, Dried Banana

