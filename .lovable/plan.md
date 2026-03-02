

## Add Thumbnail Gallery to Product Detail Page

### Changes

**Edit: `src/components/products/ProductPageTemplate.tsx`**
- Add `useState` for `selectedImage` defaulting to `product.images?.main || ""`
- Build `allImages` array from `[main, ...gallery]`, filling with empty strings as placeholders for 5 total slots
- Replace the single hero image with:
  - Main display image using `selectedImage` via `OptimizedImage` (600x600, with alt text following SEO pattern: name + organic status + category)
  - Row of 5 small clickable thumbnails below (80x80px each, `aspect-square`)
  - Active thumbnail highlighted with `ring-2 ring-primary`
  - Each thumbnail uses `OptimizedImage` with `width={80}` `height={80}` and descriptive alt like `"{product.name} view {index+1}"`
- If all images are empty, the `OptimizedImage` fallback icon handles it gracefully

**Edit: `src/data/products.ts`** — Product interface already has `gallery?: string[]`, no type changes needed. Add empty `gallery` arrays to each product:
```ts
images: {
  main: "",
  thumbnail: "",
  gallery: ["", "", "", ""],
},
```

This gives 5 image slots (1 main + 4 gallery) all using empty placeholders that show the fallback Package icon until real images are added.

### Files to Edit
| File | Change |
|------|--------|
| `src/components/products/ProductPageTemplate.tsx` | Add gallery state + thumbnail row below main image |
| `src/data/products.ts` | Add empty `gallery` arrays to all products |

