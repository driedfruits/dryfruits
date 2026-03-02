

## Swipe Navigation for Mobile Product Comparison

Replace the vertically stacked cards in the mobile comparison view (lines 308-336) with an Embla Carousel-powered swipeable card carousel. The project already has `embla-carousel-react` installed and a `Carousel` UI component.

### Changes

**File: `src/components/products/ProductComparisonTable.tsx`**

1. Import `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselApi` from `@/components/ui/carousel`
2. Add state: `activeCardIndex` (number) and a carousel API ref to track the current slide
3. Replace the mobile `div.space-y-4` block (lines 308-336) with:
   - A dot indicator row showing `selectedProducts.length` dots, highlighting the active one
   - A `<Carousel>` wrapping `<CarouselContent>` with one `<CarouselItem>` per product card
   - Each card keeps its existing layout (product name, View link, spec categories)
   - A "Swipe to compare" hint text below the dots when 2+ products are selected
4. Use the carousel `setApi` callback to listen for `select` events and update `activeCardIndex`
5. Add `opts={{ align: "start" }}` so cards snap cleanly

### Technical details
- No new dependencies needed — uses existing `embla-carousel-react` and `Carousel` component
- Dots are simple `button` elements with `min-h-[48px] min-w-[48px]` for tap targets, visually rendered as small circles
- Active dot gets `bg-primary`, inactive gets `bg-muted-foreground/30`

