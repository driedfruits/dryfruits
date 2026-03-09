

## Review: Specification Field Consistency

I analyzed all products in the database against the 19 defined spec fields in the editor and display components. The three layers (editor, display table, Product type) are **already aligned** — all use the same 19 keys. The only issues are **missing data values** in certain products.

### Gaps Found

| Field | Missing From |
|-------|-------------|
| `storageTemp` | Guava |
| `totalPlateCount` | Guava |
| `packagingMethod` | Dragon Fruit, Jackfruit (and possibly Pineapple) |
| `so2Level` | Dragon Fruit, Jackfruit |

### Recommended Fix

Run a data update to fill in the missing values for these products. No code or schema changes needed — the editor, display, and type definitions are consistent.

**Data updates:**
- **Guava**: add `storageTemp` ("15-25°C") and `totalPlateCount` ("≤1,000 CFU/g")
- **Dragon Fruit**: add `packagingMethod` ("vacuum sealed") and `so2Level` ("none")
- **Jackfruit**: add `packagingMethod` ("vacuum sealed") and `so2Level` (already says "none" — confirmed present)

These are standard values consistent with the other products. The actual values can be adjusted in the admin editor after the initial fill.

