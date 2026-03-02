

## Remove Remaining References to Removed Categories

### Files to modify

#### 1. `src/data/companyInfo.ts` (line 5)
- Update tagline from `"Indonesia Dried & Vacuum Fruits Manufacturer"` to `"Indonesia Dried Fruits Manufacturer"`

#### 2. `src/data/products.ts` (lines 34-50)
- Remove ginger/turmeric/vacuum-specific spec fields: `meshSize`, `oilContent`, `curcuminContent`, `volatileOil`, `gingerolContent`, `totalAsh`, `acidInsolubleAsh`, `particleSize`, `purity`, `fatContent`, `starchContent`, `chromeTest`, `astaColor`

#### 3. `src/components/products/ProductQualitySpecs.tsx`
- Delete the dead ginger/turmeric code — simplify to just `return null` or delete the file entirely and remove its import from `ProductPageTemplate.tsx`

#### 4. `src/data/storageData.ts` (line 64)
- Change `"especially powders"` to `"especially finely cut products"`

#### 5. `src/pages/StorageGuidePage.tsx`
- Line 60: Remove "and powders" from SEO description
- Line 263: Change `"Extends shelf life by 30-50% for powders"` to `"Extends shelf life by 30-50% for dried fruits"`

#### 6. `src/lib/redirects.ts`
- Keep the redirects for old URLs (powder, vacuum, ginger, spices) — these are intentional 301s to catch old links. No change needed.

