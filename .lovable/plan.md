

## Mobile Experience Audit & Fixes

After reviewing all components, the codebase is already well-structured for mobile. Most tap targets are 48px+, text uses `text-base` (16px), and forms use proper sizing. Here are the specific issues found and fixes needed:

### Issues Found

**1. Container padding too wide on small screens**
- `tailwind.config.ts` sets container padding to `2rem` (32px) — that's 64px total on a 320px screen, leaving only 256px for content. Should be `1rem` on mobile, `2rem` on larger screens.

**2. Footer social icons are 40x40px (h-10 w-10), below the 48px minimum**
- Line 153 in `Footer.tsx`: social link icons need `h-12 w-12` or `min-h-[48px] min-w-[48px]`

**3. Footer certification badges have no min-height for tap (they're not interactive, but visually cramped)**
- Not interactive — no fix needed.

**4. Comparison table remove button is 24x24px (h-6 w-6)**
- `ProductComparisonTable.tsx` line 207: the remove button `h-6 w-6` is way too small. Needs `h-8 w-8` minimum with proper touch target wrapper.

**5. Hero fruit tags are small pills with no min-height**
- `HeroSection.tsx` line 39: fruit tags `px-3 py-1` are ~28px tall. They're not interactive (just `<span>`s), so no tap target issue. Fine as-is.

**6. Product category cards on mobile could overflow**
- `ProductCategoriesSection.tsx` line 22: `grid-cols-2` with `p-6` padding on small cards is fine, but text could truncate. The `gap-4` is adequate.

**7. Breadcrumb links lack min-height tap targets**
- `ProductPageTemplate.tsx` line 87-94 and `ProductsPage.tsx` line 51-54: breadcrumb links are plain text with no padding for touch.

**8. PageHero h1 is `text-4xl` on all screens — could overflow on very small screens**
- Should be `text-3xl sm:text-4xl lg:text-5xl` for better scaling.

### Plan

**File: `tailwind.config.ts`** — Change container padding to responsive: `'1rem'` default with `sm: '1.5rem'` and `lg: '2rem'`

**File: `src/components/layout/Footer.tsx`** — Increase social icon links from `h-10 w-10` to `h-12 w-12` (48px)

**File: `src/components/products/ProductComparisonTable.tsx`** — Increase remove button from `h-6 w-6` to `h-8 w-8` with `min-h-[48px] min-w-[48px]` wrapper

**File: `src/components/products/ProductPageTemplate.tsx`** — Add `min-h-[44px] flex items-center` to breadcrumb links for touch targets

**File: `src/pages/ProductsPage.tsx`** — Same breadcrumb fix

**File: `src/components/layout/PageHero.tsx`** — Scale h1 down on mobile: `text-3xl sm:text-4xl lg:text-5xl`

**File: `src/components/home/HeroSection.tsx`** — The h1 already has `text-4xl sm:text-5xl lg:text-6xl`, could reduce to `text-3xl` on smallest screens

**File: `src/index.css`** — Add `overflow-x: hidden` to `body` as a safety net against horizontal scroll

