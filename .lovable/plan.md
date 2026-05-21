# Mobile Audit (320–480px) — Findings & Fix Plan

I audited every primary route at 375×812 (Home, Products, Product detail, Contact, About) and reviewed the relevant source. The site is already in solid shape for mobile — the foundation is correct:

**What's already good — leave alone**
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present in `index.html`.
- `body` has `overflow-x-hidden`; no horizontal scroll on any audited route.
- Hamburger drawer in `Header.tsx` collapses below `lg`, plus a `MobileBottomNav` with Products / Samples / WhatsApp tabs.
- Tap targets: shadcn `Button` icon variant is `h-11 w-11 sm:h-10 sm:w-10` (44×44 on mobile), breadcrumb links have `min-h-[44px]`, mobile bottom nav tabs are full-width.
- Base typography inherits Tailwind's 16px body — no iOS zoom risk.
- Sticky `StickyInquiryBar` on product pages and bottom nav padding (`pb-36 lg:pb-0`) prevent CTA occlusion.

So the work below is **targeted polish**, not a rebuild.

---

## Issues to fix

### 1. Product H1 reads "Wholesale Wholesale Bulk Dried Dehydrated Mango…"
`ProductPageTemplate.tsx:181` renders `Wholesale {product.name}`, but `product.name` in the DB already starts with "Wholesale Bulk Dried Dehydrated…". On a 375px screen the H1 wraps to 5+ lines of duplicate words and pushes the price/CTA below the fold.

**Fix:** Use `product.shortName` for the H1 (matches the project memory rule: *"Use shortName for UI labels; full descriptive names for SEO and alt text."*). The long descriptive name stays in `<title>`, OG tags, and JSON-LD untouched.

```tsx
<h1>Wholesale {product.shortName}</h1>   // "Wholesale Mango"
```

### 2. Overlapping badges on product hero image
"Organic Certified" badge (top-left) overlaps the product image's own baked-in label on narrow screens (visible on Mango). Two badges fight for the same top-4 corner.

**Fix:** On `<lg` move the Organic Certified badge to **top-center** with a small backdrop, or stack badges vertically with `flex-col gap-2`. Keep desktop position unchanged.

### 3. Header logo loses brand text on mobile
`Header.tsx:30` hides "DFT Indonesia / Dried Fruits Exporter" with `hidden sm:block`. On 375px the header is just a leaf icon + hamburger — no brand recognition above the fold. The `sm` breakpoint (640px) is too aggressive.

**Fix:** Show a compact "DFT Indonesia" wordmark at all widths (drop the subtitle on mobile only), so the breakpoint becomes "subtitle hidden below sm" instead of "everything hidden below sm".

### 4. Breadcrumb overflow on narrow screens
Already uses `overflow-x-auto scrollbar-hide whitespace-nowrap` — works, but the row is 44px tall *and* horizontally scrollable, which adds visual weight at the top of every product page on mobile.

**Fix:** On `<sm`, render only the last two crumbs (`Products › Mango`) and keep the full chain on tablet+. Lower-impact alternative: shrink the row to `py-2` on mobile.

### 5. Final-CTA buttons stack awkwardly
On the product page's "Ready to Order Bulk…" section, the `flex-wrap gap-3` row puts the two CTAs side-by-side at ~170px each on a 375px viewport — text wraps inside the buttons.

**Fix:** Add `flex-col sm:flex-row` and `w-full sm:w-auto` to those CTAs so they go full-width on mobile, side-by-side from `sm` upward. Same treatment for the hero CTAs.

### 6. ProductSpecsTable and ProductComparisonTable
Native `<table>` elements can blow past viewport width on mobile when a single cell has long text (origin, certifications). Worth verifying both are wrapped in `overflow-x-auto` containers — quick read + patch if missing.

### 7. Section vertical rhythm on mobile
Most sections use `py-16` / `py-20`. On a 667–812px tall mobile screen that's a lot of dead space between sections, making scrolling feel slow.

**Fix:** Add `py-12 lg:py-20` (or `py-10 md:py-16 lg:py-20`) site-wide on the home sections. Pure spacing change, zero layout risk.

---

## Out of scope (explicitly NOT touching)
- Desktop layouts (≥`lg`)
- Copy / SEO meta / JSON-LD
- Product data model
- Color/theme tokens
- The `/placeholder.svg` image gaps flagged in the previous audit — separate workstream

---

## Files I'll touch
- `src/components/products/ProductPageTemplate.tsx` — H1, badges, breadcrumb, final-CTA row
- `src/components/layout/Header.tsx` — wordmark visibility
- `src/components/products/ProductSpecsTable.tsx` + `ProductComparisonTable.tsx` — overflow wrappers if missing
- `src/components/home/*.tsx` — `py-16/20` → `py-12 lg:py-20` (find/replace)

Want me to proceed with all 7, or pick a subset?
