

## Add Packaging Photo Uploads to Admin Editor

Currently the packaging section on product pages shows `/placeholder.svg` for both retail and bulk packaging cards. We'll add image upload fields to the admin editor so admins can upload real packaging photos, store the URLs in the existing `packaging` JSONB column, and display them on the frontend.

### Changes

**1. Data layer — no DB migration needed**
The `packaging` JSONB column already stores `{bulk, retail, custom}`. We'll add `retailImage` and `bulkImage` string fields to it. Since it's JSONB, no schema change required.

**2. `src/data/products.ts`** — Product interface
Add optional `retailImage` and `bulkImage` to the `packaging` type.

**3. `src/lib/productMapper.ts`** — both directions
Map `retailImage` / `bulkImage` through the JSONB packaging object in `mapRowToProduct` and `mapProductToRow`.

**4. `src/hooks/useProductEditor.ts`**
- Add `packagingRetailImage` / `packagingBulkImage` state fields
- Wire them into `loadProduct` and `buildProduct`
- Expose setters

**5. `src/components/editor/EditorPackagingSection.tsx`**
- Add two `ImageUploader` components (one for retail, one for bulk) below the existing text inputs
- Accept `productId` prop for storage paths

**6. `src/pages/ProductEditorPage.tsx`**
- Pass new image state + `productId` to `EditorPackagingSection`

**7. `src/components/products/ProductDescriptionPackaging.tsx`**
- Replace hardcoded `/placeholder.svg` with `product.packaging.retailImage` and `product.packaging.bulkImage`, falling back to placeholder when not set

