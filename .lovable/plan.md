

## Make Captions Visible with Placeholder Photos

### Problem
The photo grid cards are nearly invisible because the placeholder SVG, the `bg-muted` card background, and the white section background all blend together. The captions exist in the DOM but cannot be seen.

### Changes

**`src/components/home/FactoryGallerySection.tsx`** and **`src/components/home/FarmersSection.tsx`**
- Add a visible border to each card: `border border-border` so the card outline is clear
- Add a subtle background to the image area with a wrapper `div` using `bg-secondary` so the placeholder icon is visible against a contrasting background
- Ensure the caption `<p>` tag has sufficient contrast by adding `bg-muted` specifically to the caption area

This ensures that even with placeholder images, each card is visually distinct with a clear border, a tinted image area, and a readable caption below it.

