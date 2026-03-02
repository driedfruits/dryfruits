

## Loading Skeletons & Optimistic UI Improvements

The codebase already has good foundations: `ProductPageSkeleton`, `CategoryPageSkeleton`, lazy-loaded pages with `Suspense`, shimmer effects on `OptimizedImage`, and a spinner `PageLoader`. Here's what's missing:

### 1. Replace spinner PageLoader with a proper skeleton layout

**File: `src/components/layout/LayoutSkeleton.tsx`** (new)
Create a skeleton that mirrors the `Layout` component structure — a header bar skeleton (logo placeholder, nav placeholders) and a content area with generic content blocks. This replaces the generic spinner in `App.tsx` and gives immediate visual structure on first load.

**File: `src/App.tsx`**
Replace the `PageLoader` spinner with the new `LayoutSkeleton` component.

### 2. Add skeleton for HomePage sections

**File: `src/components/home/HomePageSkeleton.tsx`** (new)
Create a skeleton matching HomePage's above-the-fold layout: hero section (headline + CTA placeholders), product categories grid (6 cards), and a manufacturing section block. Used as the Suspense fallback specifically for the HomePage route.

**File: `src/App.tsx`**
Wrap the HomePage route's Suspense with `HomePageSkeleton` instead of the generic layout skeleton, since it's the most visited page.

### 3. Add optimistic form submission feedback

**File: `src/components/forms/ContactForm.tsx`**
After form submission succeeds, show a success state inline (green checkmark + "Message sent" text) instead of only relying on a toast. The success state replaces the form for 3 seconds, then resets. This gives immediate visual feedback even if the toast is missed on mobile.

**File: `src/components/forms/CatalogForm.tsx`**
Same pattern — show inline success state after submission.

### 4. Add content skeleton for generic pages

**File: `src/components/layout/ContentPageSkeleton.tsx`** (new)
A simple reusable skeleton for text-heavy pages (About, FAQ, Shipping, etc.): PageHero skeleton + paragraph block skeletons. Used as Suspense fallback for these routes instead of the spinner.

**File: `src/App.tsx`**
Use `ContentPageSkeleton` as fallback for text-heavy page routes (About, FAQ, Shipping, Certifications, etc.) by grouping them under a separate Suspense boundary.

### Summary of changes

| File | Action |
|------|--------|
| `src/components/layout/LayoutSkeleton.tsx` | New — header + content skeleton |
| `src/components/home/HomePageSkeleton.tsx` | New — hero + categories skeleton |
| `src/components/layout/ContentPageSkeleton.tsx` | New — generic page skeleton |
| `src/App.tsx` | Replace spinner with skeleton fallbacks, add per-route Suspense groups |
| `src/components/forms/ContactForm.tsx` | Add inline success state after submission |
| `src/components/forms/CatalogForm.tsx` | Add inline success state after submission |

