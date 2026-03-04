

## Change product dropdown to use short names

**One-line change** in `src/pages/ProductEditorPage.tsx` at line 214:

Change `p.name` to `p.shortName` in the `productOptions` mapping:

```typescript
const productOptions = products.map((p) => ({ value: p.id, label: p.shortName }));
```

