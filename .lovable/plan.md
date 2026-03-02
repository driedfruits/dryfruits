

## Display Tagline & Description on the Product Detail Page

Currently these fields are underutilized:
- **Tagline** → only shown on `ProductCard` (listing grid)
- **Description** → not displayed anywhere on the front end

### Proposed Change

**`src/components/products/ProductPageTemplate.tsx`** — In the hero section's right column (the "Wholesale Data Card"), add:

1. **Tagline** as a subtitle line directly below the `<h1>`, styled as `text-lg text-muted-foreground` — a one-line product summary
2. **Description** as a paragraph below the tagline (before the price block), styled as body text

```
<h1>Wholesale Dried Pineapple – Rings</h1>
<p className="text-lg text-muted-foreground">{product.tagline}</p>  ← NEW
<p className="text-muted-foreground mb-4">{product.description}</p> ← NEW (replaces "Origin: Indonesia" line)
<p>Origin: Indonesia</p>
```

The "Origin: Indonesia" line stays below the description. Single file change, no new components.

