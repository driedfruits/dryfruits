

## Simplify Images Section — Read-Only Paths, Editable Alt Text

The user wants the Images section to only allow editing alt text (not file paths), while showing thumbnails and file names as read-only info.

### Changes in `src/pages/ProductEditorPage.tsx` (lines 242-280)

**Replace the current Images section** with a simplified version:

- **Remove** path input fields (main, thumbnail, gallery `src`) — paths come from `products.ts` and shouldn't be edited here
- **Show read-only**: small thumbnail preview + file name extracted from the path (e.g. `dried-pineapple-hero.webp`)
- **Keep editable**: alt text inputs for main, thumbnail, and each gallery image
- **Remove** "Add Gallery Image" button and gallery path inputs — gallery images are managed in code, only alt text is editable here

Layout per image row: `[thumbnail preview] [file name label] [alt text input]`

