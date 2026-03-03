

## Replace Product Links with Photo Cards on Homepage

### What
Replace the current gradient-colored text-only product links in `ProductCategoriesSection` with card-style links featuring placeholder thumbnail images, similar to the `ProductCard` component used on the Products page.

### Changes

**Modified file: `src/components/home/ProductCategoriesSection.tsx`**
- Replace the gradient `<Link>` blocks with card-style layout:
  - Top: `OptimizedImage` using `/placeholder.svg`, `width={400}`, `height={400}`, `aspectRatio="square"`, with product-specific alt tags (e.g. "Dried mango wholesale from Indonesia")
  - Bottom: product name + "View Details →" text
  - Card styling: `bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow` (matching `ProductCard` pattern)
- Keep the same grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`
- Keep the "View All Products" CTA button at the bottom

