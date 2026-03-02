

## Remove "| ✓ In Stock" from Product Hero

In `src/components/products/ProductPageTemplate.tsx` line 169, change the subtitle from:

```
Origin: Indonesia | ✓ In Stock
```

to just:

```
Origin: Indonesia
```

Remove the conditional stock status text from the `<p>` tag, keeping only the origin.

