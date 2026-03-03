

## Enhance Harvest & Production Calendar with 12-Month Timeline

### What changes

1. **Add a `harvestMonths` field to the `Product` type** — an optional array of 12 numbers (0 = no production, 1 = off-peak/available, 2 = peak/best time to order). This keeps data declarative per product.

2. **Update each product's data** with appropriate `harvestMonths` values based on their existing `peakSeason`/`offPeakSeason` text. Products marked "Year-round" get all 2s or all 1s. Products with specific months get 2 for peak, 1 for off-peak, 0 for unavailable.

3. **Redesign `ProductSeasonality.tsx`** to include a visual 12-month timeline bar below the existing info cards:
   - A row of 12 month columns (Jan–Dec) 
   - Each column colored: **green** (peak — best to order), **amber/yellow** (available — off-peak), **gray** (low/no production)
   - A legend below: green = "Peak Season · Best Pricing", yellow = "Available · Higher Cost", gray = "Low Production"
   - Current month highlighted with a ring/border indicator
   - Falls back to text-only display if `harvestMonths` is not provided

### Files to change

1. **`src/data/products.ts`** — Add `harvestMonths?: number[]` (length 12) to `Product` type. Populate for each product.

2. **`src/components/products/ProductSeasonality.tsx`** — Add the 12-month timeline visualization below the existing 3-column info grid. Use Tailwind colors (`bg-green-500`, `bg-amber-400`, `bg-gray-200`) for the month cells. Highlight current month with `ring-2 ring-primary`.

### Technical details

Month bar rendering:
```tsx
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const colorMap = { 0: "bg-gray-200", 1: "bg-amber-400", 2: "bg-green-500" };
const currentMonth = new Date().getMonth(); // 0-indexed

// Render as a grid-cols-12 row with rounded cells, labels below
```

Example `harvestMonths` for dried pineapple (year-round peak):
```ts
harvestMonths: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
```

Example for dried avocado (peak Feb-Aug, off-peak Sep-Jan):
```ts
harvestMonths: [1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
```

