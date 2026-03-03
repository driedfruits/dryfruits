

## Remove Packaging Options & Rebalance Logistics Layout

### Changes to `src/components/products/ProductLogistics.tsx`

Remove the "Packaging Options" card (lines 19-30) since packaging info already exists in the `ProductDescriptionPackaging` section above.

Rebalance the remaining 3 cards into a clean layout:
- **Top row**: Export Documentation (full width)
- **Bottom row**: LCL Pallet + FCL Container (2-col grid)

This gives the shipping cards equal visual weight and avoids an odd 3-card grid. The section title changes to "Logistics & Shipping" since packaging is no longer part of it.

Remove the unused `Package` import from lucide-react.

