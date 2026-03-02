

## Always Show 4 Thumbnails with Editable Alt Text

### Problem
The thumbnail row only renders when actual image paths exist. Products with no images show zero thumbnails.

### Plan

**1. `src/components/products/ProductPageTemplate.tsx`**
- Change `allImages` logic: always produce exactly 4 slots. Fill from `mainImage` + gallery sources, pad remaining with `"/placeholder.svg"`.
- Build a parallel `allAlts` array using gallery alt text and fallback product name text.
- Update thumbnail rendering to use `allAlts[index]` instead of generic text.
- Set `selectedImage` default to first item (always exists now).

**2. `src/data/products.ts` — Product interface**
- Add `galleryAlts?: string[]` to the `images` interface — 4 alt texts for the thumbnail row, independent of gallery sources.

Actually, simpler approach: the gallery already has `alt` per item. We just need to ensure 4 gallery entries always exist in the template. No schema change needed.

**3. `src/components/editor/EditorImagesSection.tsx`**
- Always show 4 gallery alt text inputs (even if `imgGallery` has fewer entries). Label them "Thumbnail 1-4 Alt Text".

**4. `src/pages/ProductEditorPage.tsx`**
- In `loadProduct`: ensure `imgGallery` always has exactly 4 entries, padding with `{ src: "", alt: "" }`.
- Initial state should also default to 4 empty entries.

### Summary
- 4 thumbnails always visible on product page (placeholder when no image)
- 4 alt text fields always visible in admin editor
- No data model changes needed — uses existing `gallery` array

