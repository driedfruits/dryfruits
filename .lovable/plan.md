

## Remove Stale Spec Fields from Display

The fields `testingMethod`, `aflatoxins`, and `fatContent` are stored in the DB with `"--"` values. Two fixes:

**1. `src/components/products/ProductSpecsTable.tsx`**
- Update the filter to also exclude `"--"` and `"-"` values, and exclude keys not present in `specLabels` (so unknown/stale keys never render).

**2. Database cleanup (optional but recommended)**
- Run a migration to strip these three keys from all products' `specifications` JSONB so they don't linger.

This is a display-layer fix — no type or editor changes needed since these fields aren't in the editor or Product interface.

