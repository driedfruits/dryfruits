

## Remove unused fields from admin editor

After comparing the admin editor fields with what's actually rendered on product pages, two fields are in the editor but not displayed:

1. **Sample Policy** — `ProductPriceTiers` component (which uses `samplePolicy`) is imported but never rendered in `ProductPageTemplate`
2. **Packaging Custom checkbox** — `packaging.custom` is never referenced in any product page component

**Note:** `sku`, `hsCode` are used (schema.ts structured data and ProductSpecsTable respectively), so they stay.

### Changes:

**1. `src/components/editor/EditorPricingSection.tsx`**
- Remove `samplePolicy` and `setSamplePolicy` props
- Remove the Sample Policy input field

**2. `src/components/editor/EditorPackagingSection.tsx`**
- Remove `custom` and `setCustom` props
- Remove the custom packaging checkbox

**3. `src/pages/ProductEditorPage.tsx`**
- Remove `samplePolicy` state and its usage in `loadProduct`
- Remove `packagingCustom` state and its usage in `loadProduct`
- Remove these from `EditorPricingSection` and `EditorPackagingSection` props
- In `editedProduct`, preserve original values from source data (same pattern as priceTiers) so serialized output doesn't lose data

