

## Balance the "Download Our Product Catalog" Section Layout

### Problem
The current layout is visually lopsided: the right column contains the heading, description, benefits list, AND the form card — making it significantly taller than the left column which only has a placeholder image (350px) and a small floating badge.

### Changes

**`src/components/home/CatalogDownloadSection.tsx`**

Restructure into a centered heading + two equal columns:

1. **Top**: Centered section heading (h2 + subtitle) in white text — spans full width
2. **Bottom grid** (2 columns on desktop):
   - **Left column**: Benefits list with checkmark icons + the "50+ Products" badge (no image — the placeholder adds no value and wastes space)
   - **Right column**: The form card only

This gives both columns roughly equal visual weight. The heading sits above both columns as the section intro, and the content is evenly split between informational (left) and actionable (right).

### Implementation Detail
- Remove the `OptimizedImage` placeholder and its container entirely
- Move the h2, subtitle paragraph, and benefits list into a left column without the form
- Keep the form card in the right column
- Add `lg:items-start` so columns align at the top
- Add the "50+ Products" badge below the benefits list instead of as an absolute overlay

