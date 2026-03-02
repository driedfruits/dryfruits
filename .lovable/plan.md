

## Add More Fields to Product Editor

Extend `src/pages/ProductEditorPage.tsx` with the following new editable sections:

### New Fields

1. **Tagline** — text input
2. **Description** — textarea (multi-line)
3. **Packaging** — grouped section with bulk (text), retail (text), custom (checkbox)
4. **Price Tiers** — dynamic list: add/remove rows with volume + priceRange inputs, plus samplePolicy text input
5. **Logistics** — grouped section with portOfLoading, incoterms (text, comma-separated), containerLoad20ft, containerLoad40ft

### Changes

| File | Change |
|------|--------|
| `src/pages/ProductEditorPage.tsx` | Add state for all new fields, load them in `loadProduct`, add form sections, include in JSON output |
| `src/components/forms/FormElements.tsx` | Add `FormTextarea` component wrapping the existing `Textarea` UI component (if not already present) |

### New State Variables
- `tagline`, `description` — strings
- `packagingBulk`, `packagingRetail` — strings; `packagingCustom` — boolean
- `priceTiers` — `Array<{volume: string, priceRange: string}>`; `samplePolicy` — string
- `portOfLoading`, `incoterms`, `containerLoad20ft`, `containerLoad40ft` — strings

### Form Layout Order
1. H1 (existing)
2. Tagline (new)
3. Description (new, textarea)
4. Price section (existing FOB + new price tiers + sample policy)
5. MOQ, Lead Time, Size & Form (existing)
6. Certifications (existing)
7. Harvest Calendar (existing)
8. Packaging (new grouped section)
9. Logistics (new grouped section)
10. JSON Output (existing, updated to include all new fields)

### Price Tiers UI
- Each tier row: two inline inputs (volume + price range) + remove button
- "Add Tier" button below the list

