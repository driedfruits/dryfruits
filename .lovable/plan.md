

## Add missing spec labels to ProductSpecsTable

In `src/components/products/ProductSpecsTable.tsx`, add these entries to the `specLabels` object (around line 24):

```typescript
salmonella: "Salmonella",
eColi: "E. coli",
fatContent: "Fat Content",
defects: "Defects",
aflatoxins: "Aflatoxins",
testingMethod: "Testing Method",
```

This ensures all specification fields defined in the `Product` interface display with proper human-readable labels instead of raw camelCase keys.

Single file, one edit.

