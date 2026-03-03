

## Admin Editor Enhancements

Three changes requested. Here is the assessment:

### 1. SKU and HS Code Editor
The state for `sku` and `hsCode` already exists in `ProductEditorPage.tsx` (lines 38-39), is loaded from product data (lines 78-79), and is included in JSON output (line 176). However, there are **no UI input fields** for editing them. Will add two `FormInput` fields in a new bordered section near the top of the editor (after SEO, before Tagline), labeled "Trade Identification".

**File: `src/pages/ProductEditorPage.tsx`**
- Add a "Trade Identification" section with SKU and HS Code inputs between EditorImagesSection and the Tagline field

### 2. Export Documents Editor
This is **already implemented**. The `EditorLogisticsSection` already includes a `FormTextarea` for export documents (one per line), and the state/JSON serialization is wired up. No changes needed.

### 3. Shipping Timeline / Estimated Delivery
The `Product` type currently has no `shippingTimeline` or `estimatedDelivery` field. Will add an optional `estimatedDelivery` string field to the Product interface and wire it through the editor.

**File: `src/data/products.ts`**
- Add `estimatedDelivery?: string` to the `logistics` interface

**File: `src/components/editor/EditorLogisticsSection.tsx`**
- Add a `FormInput` for estimated delivery time (e.g. "14-21 days from port")
- Add props: `estimatedDelivery`, `setEstimatedDelivery`

**File: `src/pages/ProductEditorPage.tsx`**
- Add `estimatedDelivery` state
- Load/save in `loadProduct` and `jsonOutput`
- Pass to `EditorLogisticsSection`

**File: `src/components/products/ProductLogistics.tsx`**
- Render the estimated delivery info if available

