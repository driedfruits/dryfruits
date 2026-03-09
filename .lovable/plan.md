

## Remove Thumbnail from Admin Editor

The `thumbnail` field is only used as an optional `placeholderSrc` prop in 3 components (ProductCard, ProductCategoriesSection, ProductPageTemplate) — it serves as a blurry placeholder while the main image loads. No page actually displays it as a standalone image. Removing it from the editor simplifies the admin workflow with zero visual impact.

### Changes

**1. `src/components/editor/EditorImagesSection.tsx`**
- Remove the Thumbnail section (lines 69-74) and its props (`imgThumb`, `setImgThumb`, `imgThumbAlt`, `setImgThumbAlt`)

**2. `src/pages/ProductEditorPage.tsx`**
- Stop passing thumbnail props to `EditorImagesSection`

**3. `src/hooks/useProductEditor.ts`**
- Keep the `imgThumb`/`imgThumbAlt` state internally so existing DB data still gets saved, but no need to expose it in the editor UI. Alternatively, stop saving it entirely — existing references in the frontend gracefully handle `undefined`.

The `thumbnail` field remains in the `Product` type and mapper so existing data isn't broken, but admins no longer need to manage it.

