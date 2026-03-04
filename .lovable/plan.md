

## Remove Price Tiers from Admin Editor

Price tiers data will remain in `products.ts` (no data loss), but the editor UI for managing them will be removed.

### Changes:

1. **`src/components/editor/EditorPricingSection.tsx`** — Remove `priceTiers`, `addTier`, `removeTier`, `updateTier` props and the entire "Price Tiers" UI block (the mapped tier inputs and "Add Tier" button).

2. **`src/pages/ProductEditorPage.tsx`** — Remove:
   - `priceTiers` state, `addTier`, `removeTier`, `updateTier` helpers
   - `priceTiers` from `loadProduct`, `editedProduct`, and the `EditorPricingSection` props
   - Keep `priceTiers` in the serialized output by reading it directly from the original product data (so existing data isn't lost on export)

