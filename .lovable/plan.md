

## Even Out Thumbnail Spacing and Position

The thumbnail row currently uses `flex gap-2 mt-3` with inconsistent sizing. Fix by making thumbnails evenly spaced with uniform dimensions.

### Changes

**Edit: `src/components/products/ProductPageTemplate.tsx`** (thumbnail row, ~lines 128-149)
- Change the thumbnail container from `flex gap-2 mt-3` to `grid grid-cols-4 gap-3 mt-4` for perfectly even spacing
- Remove `flex-shrink-0` from individual thumbnails (not needed in grid)
- Set consistent thumbnail size: `w-full h-full` inside the button, remove fixed `w-16 h-16 sm:w-20 sm:h-20` classes from the inner `OptimizedImage`

### Files to Edit
| File | Change |
|------|--------|
| `src/components/products/ProductPageTemplate.tsx` | Switch thumbnail row to CSS grid with `grid-cols-4 gap-3` for even distribution |

