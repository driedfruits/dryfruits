

## Remove Non-Dried-Fruit Product Categories

This is a significant cleanup across multiple files to remove all references to powdered fruits, vacuum fried fruits, and ginger & turmeric — keeping only the dried fruits category.

### Files to modify

#### 1. `src/data/companyData.ts`
- **Remove all product entries** for categories `powdered-fruits`, `vacuum-fried`, and `ginger-turmeric` (roughly lines 706–1910)
- **Simplify `productCategories`** to only include the `dried-fruits` entry
- **Clean up `relatedProducts`** arrays in remaining dried fruit products — remove references to deleted product IDs (e.g., `vacuum-banana`, `banana-powder`, etc.)

#### 2. `src/data/products.ts`
- Update the `category` type from union `"dried-fruits" | "powdered-fruits" | "vacuum-fried" | "ginger-turmeric"` to just `"dried-fruits"`
- Remove vacuum-fried specific spec fields (`sliceThickness`, `fryingTemperature`, `vacuumPressure`, etc.)

#### 3. `src/lib/constants.ts`
- Remove `powdered-fruits`, `vacuum-fried`, `ginger-turmeric` from `categoryLabels`

#### 4. `src/components/layout/Header.tsx`
- Remove dropdown children for Powdered, Vacuum Fried, and Ginger & Turmeric
- Simplify: either remove the dropdown entirely (just link to `/products`) or keep only "All Products" and "Dried Fruits"

#### 5. `src/components/layout/Footer.tsx`
- Remove Powdered Fruits, Vacuum Fried Fruits, and Ginger & Turmeric from `footerLinks.products`
- Update tagline text removing "vacuum fried snacks, and spices"

#### 6. `src/pages/ProductsPage.tsx`
- Remove category cards section (or show only one)
- Update SEO description to remove mentions of vacuum-fried, powders, spices
- Filter `products` to only dried-fruits (or it will naturally be only dried fruits after data cleanup)

#### 7. `src/lib/redirects.ts`
- Redirect old powdered/vacuum/ginger URLs to `/products` instead of their removed category pages

#### 8. `src/lib/socialImages.ts`
- Remove `powderedFruits`, `vacuumFried`, `gingerTurmeric` entries and their mappings

#### 9. `src/pages/HomePage.tsx`
- Update SEO description to remove "Vacuum-fried snacks" mention

#### 10. `src/components/products/ProductComparisonTable.tsx`
- Remove references to non-dried-fruit categories in the comparison filter

