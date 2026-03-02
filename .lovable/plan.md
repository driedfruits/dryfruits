

## Fix: Add missing `category` and `isOrganic` to `dried-papaya`

The `dried-papaya` product entry (starting around line 122) is the only one missing the required `category` and `isOrganic` fields. All other 10 products have them.

### Change

In `src/data/products.ts`, add two fields after the `name` line of the `dried-papaya` object:

```typescript
id: "dried-papaya",
name: "Wholesale Bulk Dried Dehydrated Papaya Chunks & Slices",
category: "dried-fruits",   // ← add
isOrganic: false,            // ← add
metaTitle: ...
```

Single edit, one file. No other products are affected.

