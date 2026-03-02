

## Remove "Sample Policy" from Product Hero Section

### Problem
The "Free sample available, buyer pays courier" text shows in the hero section via `ProductQuickHighlights.tsx`. It's redundant since this info also appears in the Price Tiers section.

### Fix

**`src/components/products/ProductQuickHighlights.tsx`** — Remove the `{ label: "Sample", value: product.pricing.samplePolicy }` entry from the highlights array. The sample policy will still display in the Price Tiers section below.

