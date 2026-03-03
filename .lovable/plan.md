

## Shorten Product Names & Remove "View Details"

### Changes to `src/components/home/ProductCategoriesSection.tsx`

1. **Add a short-name map** to override long product names for this section only (e.g. `"dried-papaya"` → `"Dried Papaya"`). This keeps the original data untouched.

2. **Remove line 40** — the "View Details →" paragraph.

3. **Use short name** in the `<h3>` instead of `product.name`.

Short name map:
```ts
const shortNames: Record<string, string> = {
  "dried-papaya": "Dried Papaya",
  "dried-pineapple": "Dried Pineapple",
  "dried-avocado": "Dried Avocado",
  "dried-mango": "Dried Mango",
  "dried-dragon-fruit": "Dried Dragon Fruit",
  "dried-snake-fruit": "Dried Snake Fruit",
  "dried-breadfruit": "Dried Breadfruit",
  "dried-jackfruit": "Dried Jackfruit",
  "dried-coconut": "Dried Coconut",
  "dried-banana": "Dried Banana",
};
```

Fallback: derive from `product.id` by replacing hyphens and capitalizing, so any new product automatically gets a short name.

