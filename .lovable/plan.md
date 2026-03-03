

## Change Photo Grid to 4 Columns on Desktop

### Findings
- Both sections currently use `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` 
- Captions are present in the code with `label` fields and `<p>` tags
- Factory Photos has 15 photos (not evenly divisible by 4 — 3 rows of 4 + 3 orphans)
- Farmers Section has 10 photos (not evenly divisible by 4 — 2 rows of 4 + 2 orphans)

### Problem
Switching to 4 columns creates uneven last rows. To fix: adjust photo counts to multiples of 4.
- Factory: reduce from 15 to 12, or increase to 16
- Farmers: keep 8 (reduce from 10), or increase to 12

### Recommendation
- **Factory**: reduce to 12 photos (remove 3 duplicates — e.g. one cold storage, one blanching, one container loading) = 3 full rows of 4
- **Farmers**: reduce to 8 photos (remove 2) = 2 full rows of 4

### Changes

**`src/components/home/FactoryGallerySection.tsx`**
- Change grid class from `lg:grid-cols-5` to `lg:grid-cols-4`
- Remove 3 photos to bring total to 12 (remove Cold Storage Unit 2, Blanching Line 2, Container Loading Container 2)

**`src/components/home/FarmersSection.tsx`**
- Change grid class from `lg:grid-cols-5` to `lg:grid-cols-4`
- Remove 2 photos to bring total to 8 (remove Farmer Family 4 and Jackfruit Plantation)

