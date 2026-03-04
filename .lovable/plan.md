

## Problem

`src/data/products.ts` was accidentally wiped empty. This file is the **single source of truth** for all product data, the `Product` type, and helper functions. Every build error stems from this empty file.

## Recovery Plan

The file structure (interface + helpers) is fully recoverable from `src/utils/productSerializer.ts` which contains `FILE_HEADER` and `FILE_FOOTER` constants with the exact `Product` interface and helper functions.

**However, the actual product data entries are not stored anywhere else in the codebase.** I cannot recover those from code alone.

### What I can do:

1. **Restore the file skeleton** — Write `src/data/products.ts` with the full `Product` interface, an empty `products` array, and all helper functions. This will fix all build errors immediately.

2. **You will need to re-populate the product data.** Options:
   - If you have a recent backup or git history, restore the product entries from there
   - If you previously used the admin editor's "Copy Full File" output, paste that content back
   - Re-enter products manually via the admin editor once the skeleton is restored

### File to create/restore:

- **`src/data/products.ts`** — Restore with the `Product` interface (from serializer's `FILE_HEADER`), empty `products: Product[] = []`, and all helper functions (`getProductById`, `getProductsByCategory`, `getRelatedProducts`, `productCategories`) from `FILE_FOOTER`.

This will immediately resolve all 12 build errors. The admin editor will load (with no products to select). Once product data is re-added, everything will work as before.

