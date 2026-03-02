

## Add Image Preview Thumbnails in Product Editor

**File: `src/pages/ProductEditorPage.tsx`**

Add a small `ImagePreview` helper component that renders a 64×64 thumbnail when the path is non-empty, with a broken-image fallback state. Place it next to each image path input.

### Changes

1. **Add `ImagePreview` component** (inline in the file or separate small component):
   - Takes `src` string prop
   - If empty, show a gray placeholder box with "No image" text
   - If set, render `<img>` with `onError` handler that shows a red-bordered "Not found" state
   - Size: `w-16 h-16` rounded, object-cover

2. **Main image** (line ~245): Wrap the main image path input + preview in a flex row — input on left, 64px preview on right

3. **Thumbnail image** (line ~247): Same layout — input + preview side by side

4. **Gallery images** (lines ~251-262): Add a small preview thumbnail at the start of each gallery row

No new dependencies needed — just standard `<img>` tags with error handling.

