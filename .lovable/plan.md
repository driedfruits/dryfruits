

# Codebase Architecture Audit Report

## Overall Assessment

The codebase is **well-organized** for a marketing/catalog site. Clear folder structure, centralized data, reusable components, lazy-loaded routes, and good SEO practices. Below are findings ordered from most critical to optional.

---

## Critical Issues

### 1. `src/App.css` is dead code
The Vite starter boilerplate CSS (`#root { max-width: 1280px; padding: 2rem; }`, `.logo`, `.logo-spin`) is still present. It applies `max-width: 1280px` and `padding: 2rem` to `#root`, which could conflict with full-width layouts. This file should be deleted entirely — all styling is handled by `index.css` and Tailwind.

### 2. Product data is duplicated across files
`src/data/companyData.ts` (733 lines) contains the full products array AND re-exports from `companyInfo.ts`, `storageData.ts`, etc. Meanwhile `src/data/products.ts` defines only the `Product` interface with no data. This is confusing:
- The `Product` type lives in `products.ts` but the actual product data lives in `companyData.ts`
- `companyData.ts` acts as both a barrel re-export file AND a 700-line data file
- **Recommendation**: Move the products array into `products.ts` alongside its type. Keep `companyData.ts` as a pure re-export barrel file with no inline data.

### 3. Artificial 300ms loading delay in `ProductDetailPage.tsx`
Lines 20-24 add a `setTimeout(300)` for "perceived performance." This makes every product navigation 300ms slower for no real benefit — the Suspense fallback already handles loading. Remove this artificial delay.

---

## Moderate Issues

### 4. `ProductPageTemplate.tsx` is too large (~260 lines)
This single component renders breadcrumbs, hero, specs, logistics, calculator, storage, compliance, sensory profile, seasonality, pricing, FAQ, related products, final CTA, and sticky bar. While it delegates to sub-components, the orchestration JSX is dense. Consider extracting the "Sensory Profile & Applications" section (lines ~185-230) into its own component to match the pattern used by other sections.

### 5. Duplicate JSON-LD schema injection on homepage
`HomePage.tsx` injects both `WebSiteSchema` and `OrganizationSchema` via inline `<script>` tags. But `Layout.tsx` already injects `ORGANIZATION_SCHEMA_STRING` on every page. The homepage therefore has the Organization schema twice. Remove the duplicate from `HomePage.tsx`.

### 6. `use-toast.ts` exists in two locations
- `src/hooks/use-toast.ts` (the real implementation)
- `src/components/ui/use-toast.ts` (a re-export wrapper)

The re-export file serves no purpose and adds indirection. All imports should point to `@/hooks/use-toast` directly, and the wrapper should be deleted.

### 7. Form submission is a no-op
`ContactForm.tsx` simulates submission with `setTimeout(1500)` and shows a toast. There is no actual backend call, email service, or webhook. This is not a code quality issue per se, but a functional gap worth flagging — forms appear to work but data goes nowhere.

---

## Minor / Optional Enhancements

### 8. `WhyChooseUs` component is imported but not rendered
`HomePage.tsx` imports `WhyChooseUs` from the home barrel but never renders it. Either add it to the page or remove the import to keep the bundle clean.

### 9. `productCategories` is computed at module load
In `companyData.ts` line 726-733, `productCategories` filters the products array at import time. This is fine now with one category, but if categories grow, consider making it a function or deriving it lazily.

### 10. Category type is hardcoded to a single literal
`Product.category` is typed as `"dried-fruits"` (a string literal union with one member). This is correct for now but should be expanded when new categories are added. The `categoryLabels` record in `constants.ts` should stay in sync.

### 11. `socialIcons.ts` could be co-located
This 9-line file maps social platform names to Lucide icons. It's only used in `Footer.tsx`. Could be inlined there or kept as-is for reuse — not a real problem.

### 12. Header navigation is hardcoded
The `navigation` array in `Header.tsx` is a local constant. This is fine for a small site but could be centralized if navigation needs to be shared with the mobile bottom nav or footer.

---

## Recommended Action Order

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Delete `src/App.css` | Removes conflicting styles |
| 2 | Remove duplicate Organization schema from `HomePage.tsx` | Fixes duplicate structured data |
| 3 | Remove artificial 300ms delay in `ProductDetailPage.tsx` | Faster navigation |
| 4 | Move products array from `companyData.ts` to `products.ts` | Cleaner data architecture |
| 5 | Delete `src/components/ui/use-toast.ts` wrapper | Removes dead indirection |
| 6 | Remove unused `WhyChooseUs` import from `HomePage.tsx` | Clean imports |
| 7 | Extract sensory/applications section from `ProductPageTemplate` | Smaller components |
| 8 | Connect forms to a real backend (Supabase or webhook) | Functional forms |

