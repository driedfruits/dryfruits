

## Add data validation tests for products.ts

Create a Vitest test file that validates every product entry against the required fields from the `Product` interface. This will catch missing fields at test time rather than at build/runtime.

### Required fields to validate (from interface):
- `id`, `name`, `shortName` (strings, non-empty)
- `category` (must be `"dried-fruits"`)
- `tagline`, `description` (strings, non-empty)
- `specifications` (object, must exist)
- `applications` (array)
- `packaging` with `bulk`, `retail` (strings), `custom` (boolean)
- `pricing` with `fobBase`, `moq`, `leadTime` (strings)
- `certifications` (non-empty array)
- `isOrganic` (boolean)
- `relatedProducts` (array)

### Files to create/modify:
1. **`src/test/setup.ts`** — new test setup file
2. **`vitest.config.ts`** — new Vitest config
3. **`tsconfig.app.json`** — add `"vitest/globals"` to types
4. **`src/data/products.test.ts`** — test file with:
   - Loop over all products, validate each required field exists and is non-empty
   - Validate `relatedProducts` reference valid product IDs
   - Validate `certifications` has at least one entry
   - Validate `packaging` sub-fields
   - Validate `pricing` sub-fields

### Test structure:
```typescript
describe("products data validation", () => {
  const productIds = products.map(p => p.id);
  
  products.forEach(product => {
    describe(product.id, () => {
      it("has all required string fields", ...);
      it("has valid packaging", ...);
      it("has valid pricing", ...);
      it("has at least one certification", ...);
      it("references only valid related product IDs", ...);
    });
  });
});
```

