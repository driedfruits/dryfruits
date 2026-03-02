

## Add Image Management with Alt Text to Product Editor

### Current State
The `Product` interface already has an `images` field with `main`, `thumbnail`, and `gallery` arrays, but no alt text support. All values are currently empty strings.

### Limitation
Since images are stored locally in `/public`, the editor page cannot actually upload files to disk at runtime. Instead, users will:
1. Upload images to the project via Lovable's chat (drag-and-drop) or file manager
2. Reference the file paths (e.g. `/images/dried-papaya-hero.webp`) in the editor
3. Edit alt text for each image

### Changes

**1. `src/data/products.ts`** -- Extend the `images` type to include alt text:
```ts
images?: {
  main?: string;
  mainAlt?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  gallery?: Array<{ src: string; alt: string }>;
};
```
Update all product entries to use the new gallery format (convert `string[]` to `{src, alt}[]`).

**2. `src/pages/ProductEditorPage.tsx`** -- Add an "Images" section with:
- Input for main image path + alt text
- Input for thumbnail path + alt text
- Dynamic list for gallery entries (path + alt text per item, add/remove)
- Include all fields in JSON output

**3. `src/components/products/ProductPageTemplate.tsx`** and any component using `product.images.gallery` -- Update to read from the new `{src, alt}` structure instead of plain strings.

**4. `src/components/products/RelatedProducts.tsx`** -- Update the alt text for related product images to follow the SEO alt-text logic pattern (name + category + pricing).

