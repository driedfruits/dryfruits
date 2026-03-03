

## Two-Column Specs Table

Split the specs into two side-by-side columns on desktop for a more compact layout.

### File: `src/components/products/ProductSpecsTable.tsx`

**Mobile**: Keep the existing stacked list (single column) — already mobile-friendly.

**Desktop**: Split `allRows` into two halves. Render two tables side by side in a `grid grid-cols-2 gap-4` layout. Each table gets roughly half the rows. Remove the single-table header row — instead use alternating row shading for readability.

- Calculate midpoint: `Math.ceil(allRows.length / 2)`
- Left column: `allRows.slice(0, mid)`
- Right column: `allRows.slice(mid)`
- Each column is a self-contained table with Parameter/Value headers

