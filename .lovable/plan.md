

## Redesign Shipping Data Section: LCL (Pallet) + FCL (Container)

### Current State
The "Shipping Data" card in `ProductLogistics.tsx` shows a simple list: port, incoterms, 20ft/40ft container loads. The user wants it replaced with two visual cards — LCL and FCL — each with a placeholder photo and detailed specs.

### Plan

**Modify `src/components/products/ProductLogistics.tsx`** — Replace the middle "Shipping Data" card with two cards spanning a 2-column sub-grid:

**Card 1 — LCL (Pallet Shipment):**
- Placeholder image (`/placeholder.svg`) with `OptimizedImage` aspect-ratio video
- Title: "LCL — Pallet Shipment"
- Specs list:
  - Pallet size: 120 × 100 × 150 cm (Euro pallet)
  - ISPM-15 certified heat-treated wood
  - Max load per pallet: 1,000 kg
  - Volume per pallet: ~1.8 m³
  - Port of Loading from logistics data

**Card 2 — FCL (Full Container Load):**
- Placeholder image (`/placeholder.svg`) with `OptimizedImage` aspect-ratio video
- Title: "FCL — Full Container Load"
- Specs list:
  - 20ft container: capacity ~33 m³ / {containerLoad20ft} from product data
  - 40ft container: capacity ~67 m³ / {containerLoad40ft} from product data
  - Number of boxes loaded (derived or static reference)
  - Incoterms from logistics data

The overall grid changes from `lg:grid-cols-3` to a layout where Packaging stays as card 1, the two shipping cards sit in the middle, and Export Docs is card 3. The section grid becomes `lg:grid-cols-2` with 4 cards, or we keep the 3-col and make the shipping section span 2 columns internally with a nested 2-col grid.

**Simplest approach**: Keep outer 3-col grid → replace the single "Shipping Data" card with a div containing two stacked or side-by-side cards. Or switch to a 2×2 grid of 4 cards. I'll go with **2×2 grid** (Packaging, Export Docs on top row; LCL and FCL on bottom row) for clean layout.

### Files Changed

1. **`src/components/products/ProductLogistics.tsx`** — Rewrite to 2×2 grid with 4 cards: Packaging Options, Export Documentation, LCL Pallet card (with photo), FCL Container card (with photo). Import `OptimizedImage`.

