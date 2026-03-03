

## Balance Photo Layouts in Factory Photos & Farmers Sections

### Problem
- **Factory Photos**: Most categories have 2 photos in a 4-column grid, leaving half the row empty. "Office" has only 1 photo.
- **Farmers Section**: "Farmers Families" has 2 photos, "Fruits Plantations" has 3 — neither fills a 4-column row.

### Solution
Remove per-category sub-grids and use a single flat grid for each section. This lets all photos flow naturally into rows without awkward gaps. Keep category labels as overlays or remove them (the alt text already carries the SEO value). Add photos where needed to fill rows evenly.

### Changes

**`src/components/home/FactoryGallerySection.tsx`**
- Replace the grouped layout with a single flat `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` grid (15 photos = 3 full rows of 5)
- Remove per-category headings — the section title "Factory Photos" is sufficient
- Keep all 15 photos as-is

**`src/components/home/FarmersSection.tsx`**
- Replace grouped layout with a single flat `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` grid
- Add 5 more placeholder photos (total 10 = 2 full rows of 5) with relevant alt tags for additional farmer families and plantation varieties (e.g., coconut, banana, jackfruit plantations)
- Remove per-category headings

Both sections will now have clean, fully filled grids with no orphan items.

