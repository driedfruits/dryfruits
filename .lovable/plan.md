

## Cleanup Remaining References to Removed Categories

After removing the non-dried-fruit categories, several files still contain stale references. No console errors yet, but product aliases point to deleted products (causing silent 404s), and SEO schemas still mention removed categories.

### Changes

#### 1. `src/lib/schema.ts`
- **Line 64-68**: Remove "Vacuum Fried Fruits", "Powdered Fruits", "Ginger & Turmeric Products" from `hasOfferCatalog.itemListElement`
- **Line 135**: Update description to remove "vacuum fried snacks, and spices"

#### 2. `src/components/SEO.tsx`
- **Line 33**: Update default description — remove "vacuum-fried banana chips"
- **Line 44**: Update default keywords — remove "vacuum fried banana chips"

#### 3. `src/lib/redirects.ts`
- **Lines 87-88**: Fix `banana`/`banana-chips` aliases — point to `dried-banana` instead of `vacuum-banana`
- **Lines 109-127**: Remove all ginger/turmeric aliases, powder aliases, and vacuum fried aliases (these products no longer exist)

#### 4. `src/components/products/ProductSpecsTable.tsx`
- **Lines 22-33**: Remove ginger/turmeric spec labels (`volatileOil`, `gingerolContent`, etc.)
- **Lines 45-54**: Remove vacuum-fried spec labels (`sliceThickness`, `fryingTemperature`, etc.)

#### 5. `src/data/storageData.ts`
- **Lines 13-46**: Remove "Fruit Powders", "Vacuum Fried", and "Ginger & Turmeric" storage category entries
- Update FAQ answers to remove powder references

#### 6. `src/components/products/ProductQualitySpecs.tsx`
- Component returns `null` with a comment about ginger-turmeric — can delete the file or leave as-is (no functional impact)

