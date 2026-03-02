

## Product Images: What's Needed

All 9 products with `images` fields have empty paths (`main: ""`, `thumbnail: ""`, `gallery: []`), and the `dried-papaya` entry has no `images` field at all. There are **no product image files** anywhere in the project (`public/` has only favicon, placeholder, and SEO files).

### The Problem

I cannot generate or create product photographs — actual product photos need to be **uploaded by you**. Once you upload images, I can:

1. **Organize them** into a `/public/images/products/` folder structure
2. **Wire them up** in `products.ts` with proper paths and SEO alt text
3. **Generate thumbnails** references (smaller versions you provide)
4. **Add gallery images** for multi-angle views on product detail pages

### Recommended Approach

**You upload product photos** (via chat or file upload), and I will:

- Save them to `public/images/products/{product-id}/` (e.g., `public/images/products/dried-mango/main.webp`)
- Update all 10 product entries in `products.ts` with correct paths and descriptive alt text
- Use WebP format for optimal loading speed

### What to Upload

For each product, ideally provide:
- **1 main image** — hero product shot (recommended 600×600px+)
- **1 thumbnail** — smaller version or different angle
- **2-3 gallery images** — close-ups, packaging, or different cuts

### Products Needing Images

1. `dried-papaya` — no images field at all
2. `dried-pineapple` — empty paths
3. `dried-avocado` — empty paths
4. `dried-mango` — empty paths
5. `dried-dragon-fruit` — empty paths
6. `dried-jackfruit` — empty paths
7. `dried-coconut` — empty paths
8. `dried-banana` — empty paths
9. `dried-guava` — empty paths
10. `dried-salak` — empty paths

Please upload your product photos and I will handle all the wiring and optimization.

