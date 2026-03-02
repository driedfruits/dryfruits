

## Verify Padding & Spacing for Sticky Mobile Footer

### Current State Analysis

There are **two overlapping issues**:

1. **`MobileBottomNav`** — fixed at `bottom-0`, `h-16` (64px), `z-50`, with `pb-safe`
2. **`StickyInquiryBar`** — also fixed at `bottom-0`, `z-50`, with `pb-safe`
3. **`Layout.tsx` main** — has `pb-16 lg:pb-0` (64px padding to clear the nav)

### Problems Found

| Issue | Detail |
|-------|--------|
| **StickyInquiryBar overlaps MobileBottomNav** | Both are `fixed bottom-0 z-50` on product detail pages. The inquiry bar sits on top of the nav bar, hiding Products/Samples/WhatsApp tabs. |
| **Content behind StickyInquiryBar** | On product pages, the extra height of the inquiry bar (~80px) is not accounted for — `pb-16` only covers the nav bar. Content at the bottom gets hidden. |

### Fixes

**1. `StickyInquiryBar.tsx`** — Position it above the MobileBottomNav:
- Change `bottom-0` → `bottom-16` so it sits above the 64px nav bar
- Keep `pb-safe` removed (the nav already handles safe area)

**2. `ProductPageTemplate.tsx`** — Add extra bottom padding on mobile to account for both bars:
- The product page wrapper needs roughly `pb-32 lg:pb-0` (128px = 64px nav + ~64px inquiry bar) instead of relying on Layout's `pb-16`

**3. Verify `MobileBottomNav` spacing** — The current `h-16` + `pb-safe` is correct. The `pb-safe` inside the nav handles iPhone notch areas properly. No changes needed here.

### Files to Edit

| File | Change |
|------|--------|
| `src/components/products/StickyInquiryBar.tsx` | Change `bottom-0` to `bottom-16` so it stacks above MobileBottomNav |
| `src/components/products/ProductPageTemplate.tsx` | Add `pb-36 lg:pb-0` to the product page wrapper to clear both sticky bars |

