

## Add Farmers & Suppliers Section to Homepage

### What
New `FarmersSection` component on the homepage with 5 placeholder photos, placed after `FactoryGallerySection`.

### Photos (5 total)

| Category | Count | Alt text |
|---|---|---|
| Farmers Families | 2 | "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 1/2" |
| Fruits Plantations | 3 | "Dragon fruit plantation supplying fresh fruits for dehydration in Indonesia" / "Papaya plantation…" / "Mango plantation…" |

### Implementation

**New file: `src/components/home/FarmersSection.tsx`**
- Same pattern as `FactoryGallerySection`: data array with `category`, `src` (`/placeholder.svg`), `alt`, `width` (400), `height` (300)
- Two groups: "Farmers Families" (2 photos), "Fruits Plantations" (3 photos)
- Section title: "Our Farmers and Fresh Fruits Suppliers"
- Responsive grid: 2 cols mobile, 3 cols md, 4 cols lg
- Uses `OptimizedImage`, `memo` wrapped

**Modified files:**
- `src/components/home/index.ts` — add `FarmersSection` export
- `src/pages/HomePage.tsx` — import and place `<FarmersSection />` after `<FactoryGallerySection />`

