

## Add Photo Upload to Admin Product Editor

Currently the admin editor only allows editing alt text — image paths are read-only with a note "Image paths are managed in code." We'll add the ability to upload images directly from the admin page using Supabase Storage.

### Steps

1. **Create a `product-images` storage bucket** via migration — public bucket so images can be served directly.

2. **Add an upload helper** — a small reusable `ImageUploader` component with a file input that uploads to `product-images/{productId}/{slot}.{ext}` (slots: `main`, `thumbnail`, `gallery-0` through `gallery-3`). Shows current preview + upload button + remove button.

3. **Update `EditorImagesSection`** — replace the read-only image display with the `ImageUploader` component for each slot (main, thumbnail, 4 gallery slots). Each slot gets an upload button alongside the existing alt text field.

4. **Update `useProductEditor` hook** — add setters for `imgMain`, `imgThumb`, and gallery `src` fields (currently only alt is editable). Add `setImgMain`, `setImgThumb`, and expand `updateGalleryImage` to accept `"src" | "alt"`.

5. **Wire upload flow** — on successful upload, the public URL is set into the corresponding image state field, which then gets saved to the database via the existing `buildProduct` → `handleSave` flow.

### Technical Details

- Storage bucket: `product-images`, public, with permissive RLS (matches current DB policy approach)
- Upload path pattern: `{productId}/{slot}-{timestamp}.{ext}` to avoid cache issues
- Accepted formats: JPEG, PNG, WebP; max 5MB per file
- The `ImageUploader` component handles upload state (loading spinner, error display) internally
- No schema changes needed — the existing `images` JSONB column already stores paths

