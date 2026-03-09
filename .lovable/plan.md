

## Fix: Stale Main Image When Switching Products

**Problem**: `useState(allImages[0])` on line 49 only sets the initial value on first mount. When navigating between products, React reuses the component and `selectedImage` keeps the old product's image.

**Fix** in `src/components/products/ProductPageTemplate.tsx`:

Add a `useEffect` that resets `selectedImage` whenever `product.id` changes:

```tsx
useEffect(() => {
  setSelectedImage(allImages[0]);
}, [product.id]);
```

This goes right after line 49. One line addition, no other changes needed.

