

## Remove Price Tiers (Unused)

Price Tiers data and components are not used on any product page. Clean removal:

1. **Delete `src/components/products/ProductPriceTiers.tsx`** — unused component
2. **Remove export from `src/components/products/index.ts`** — line referencing `ProductPriceTiers`
3. **Remove `priceTiers` and `samplePolicy` from the `Product` type in `src/data/companyData.ts`** — if present in the pricing interface
4. **Clean up any `priceTiers` data from `src/data/products.ts`** — if any product has it
5. **Update test file `src/data/products.test.ts`** — remove the `priceTiers` test block (lines ~120-126)

No UI impact since the component was never rendered on product pages.

