

## Add Factory Photo Gallery to Homepage

### What
Create a new `FactoryGallerySection` component placed after `ManufacturingSection` on the homepage, showing 15 placeholder photos organized by production stage.

### Photo Layout (15 photos total)

| Category | Count | Alt text pattern |
|---|---|---|
| Cold Storage of Fresh Fruits | 2 | "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory" |
| Cleaning & Peeling Area | 2 | "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant" |
| Blanching | 2 | "Industrial fruit blanching process at Indonesian dried fruit factory" |
| Dehydration Ovens | 2 | "Professional dehydration ovens for drying tropical fruits at export facility" |
| Packaging | 2 | "Bulk packaging area for wholesale dried fruit orders at Indonesian factory" |
| Office | 1 | "Export sales office at PT Dried Fruits Total Indonesia factory" |
| Pallets Ready for Delivery | 2 | "Palletized dried fruit shipments ready for export delivery" |
| Container Stuffing | 2 | "Container stuffing and loading of dried fruit export orders" |

### Implementation

**New file: `src/components/home/FactoryGallerySection.tsx`**
- Data array of 15 items with `category`, `src` (`/placeholder.svg`), `alt`, `width` (400), `height` (300)
- Group by category, render category label as subtitle
- Use `OptimizedImage` with `width`/`height`/`alt` props
- Responsive grid: 2 cols mobile, 3 cols md, 4 cols lg
- Section title: "Factory Photos"
- `memo` wrapped for performance

**Modified files:**
- `src/components/home/index.ts` — add `FactoryGallerySection` export
- `src/pages/HomePage.tsx` — import and place `<FactoryGallerySection />` after `<ManufacturingSection />`

