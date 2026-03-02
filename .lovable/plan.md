

## Always Show Main Image Alt Text Field in Editor

### Problem
The Main Image Alt Text and Thumbnail Alt Text fields in `EditorImagesSection.tsx` are conditionally rendered — they only appear when `imgMain` / `imgThumb` are non-empty strings. Products with no image paths set will hide these fields entirely.

The 4 gallery thumbnail alt fields already always render correctly.

### Fix

**`src/components/editor/EditorImagesSection.tsx`**
- Remove the `{imgMain && ...}` conditional — always show the Main Image Alt Text input. Show a placeholder box when no image exists (same pattern as gallery slots).
- Remove the `{imgThumb && ...}` conditional — always show the Thumbnail Alt Text input with placeholder box.

This ensures all 5 alt text fields (1 main + 4 gallery thumbnails) are always visible and editable regardless of whether image paths are populated.

