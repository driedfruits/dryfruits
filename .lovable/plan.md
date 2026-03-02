

## Remove `as any` casts in ProductEditorPage.tsx

**File: `src/pages/ProductEditorPage.tsx`**

In the `loadProduct` function (around lines 64-65), replace:
```ts
setMetaTitle((product as any).metaTitle || "");
setMetaDescription((product as any).metaDescription || "");
```
with:
```ts
setMetaTitle(product.metaTitle || "");
setMetaDescription(product.metaDescription || "");
```

Single two-line change — no other files affected.

