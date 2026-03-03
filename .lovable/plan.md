

## Remove Duplicate Export Documentation

Lines 31-39 contain a duplicate "Export Documentation" card inside the 2-col grid. The full-width version (lines 19-27) should remain. Remove the duplicate and the LCL + FCL cards stay in the 2-col grid alone.

### Change in `src/components/products/ProductLogistics.tsx`
- Delete lines 31-39 (the duplicate Export Documentation card inside the grid)
- The grid keeps only the LCL and FCL cards side by side

