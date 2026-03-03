

## Delete Unused Compliance Component Files

Two files to delete since their usage was already removed from `ProductPageTemplate.tsx` and `ProductEditorPage.tsx`:

1. **`src/components/editor/EditorComplianceSection.tsx`** — delete file
2. **`src/components/products/ProductCompliance.tsx`** — delete file

Also clean up the barrel exports:

3. **`src/components/editor/index.ts`** — remove the `EditorComplianceSection` export line
4. **`src/components/products/index.ts`** — remove the `ProductCompliance` export line

