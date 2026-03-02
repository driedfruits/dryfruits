

## Image Alt Text & Optimization Review

After auditing the codebase, here's the current state and what needs fixing:

### Already Good
- **`OptimizedImage` component** — has `width`/`height`, `loading="lazy"`, `decoding="async"`, CLS prevention, blur-up placeholders. Well built.
- **`ProductCard`** — uses `OptimizedImage` with descriptive alt: `"{name} - {tagline} | Bulk wholesale from Indonesia"`, width/height set (400×400).
- **`ProductPageTemplate` hero** — rich alt text with organic status, category, width/height (600×600).
- **`ProductPageTemplate` related products** — alt includes name, category, pricing. Width/height (280×280).

### Issues to Fix

| Location | Problem | Fix |
|----------|---------|-----|
| **`ManufacturingSection.tsx`** — `<img src="/placeholder.svg">` | Has alt text but no `loading="lazy"` attribute explicitly set (it is present). Has width/height but uses placeholder.svg — no real content. | Replace raw `<img>` with `OptimizedImage` component for consistency, add `width={600} height={450}` properly. |
| **`HeroSection.tsx`** — background `<div className="bg-muted">` | No `<img>` tag at all, just a div. When a real hero image is added it will need alt text. | Add a commented placeholder noting the alt text to use: `"Dehydrated tropical fruits factory facility in Indonesia"`. For now it's decorative — add `role="img"` and `aria-label`. |
| **`ExportMapSection.tsx`** — `ImagePlaceholder` div | No `<img>`, just a styled div with text. No accessibility. | Replace with `OptimizedImage` using `src="/placeholder.svg"` with proper alt: `"Shipping containers with dried fruit exports from Indonesia"`, width/height attributes. |
| **`CatalogDownloadSection.tsx`** — `ImagePlaceholder` div | Same issue — no `<img>`, no alt, no dimensions. | Replace with `OptimizedImage` using alt: `"Premium dehydrated tropical fruit products catalog display"`, width/height attributes. |
| **`CertificationsSection.tsx`** — cert icons | Uses `<Leaf>` icon for all certs — not an image issue, but each icon div lacks `aria-label`. | Add `aria-label={cert.name}` to each icon container. |

### Changes Summary

| File | Action |
|------|--------|
| `src/components/home/ManufacturingSection.tsx` | Replace raw `<img>` with `OptimizedImage`, width=600 height=450 |
| `src/components/home/HeroSection.tsx` | Add `role="img"` and `aria-label` to background div |
| `src/components/home/ExportMapSection.tsx` | Replace `ImagePlaceholder` with `OptimizedImage`, add descriptive alt, width/height |
| `src/components/home/CatalogDownloadSection.tsx` | Replace `ImagePlaceholder` with `OptimizedImage`, add descriptive alt, width/height |
| `src/components/home/CertificationsSection.tsx` | Add `aria-label` to cert icon containers |

