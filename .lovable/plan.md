

## Ensure 4 Related Products per Product

The Related Products component is rendering correctly with `lg:grid-cols-4` grid layout. However, most product entries in `src/data/products.ts` only define 3 related products, leaving the 4th column empty.

### Change

**`src/data/products.ts`** -- Update the `relatedProducts` array for every product to include exactly 4 entries:

| Product | Current count | Add |
|---------|--------------|-----|
| Dried Papaya | 4 | -- (already done) |
| Dried Pineapple | 3 | `dried-dragon-fruit` |
| Dried Avocado | 3 | `dried-papaya` |
| Dried Mango | 3 | `dried-dragon-fruit` |
| Dried Dragon Fruit | 3 | `dried-pineapple` |
| Dried Snake Fruit | 3 | `dried-papaya` |
| Dried Breadfruit | 3 | `dried-mango` |
| Dried Jackfruit | 4 | -- (already done) |
| Dried Coconut | 2 | `dried-papaya`, `dried-mango` |
| Dried Banana | 3 | `dried-dragon-fruit` |

No component changes needed -- the grid is already `lg:grid-cols-4`.

