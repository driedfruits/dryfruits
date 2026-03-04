

## Output full `products.ts` file content instead of single product JSON

Currently the editor outputs a single product's JSON object. The user wants to copy-paste the **entire `products.ts` file** in one go, so they don't have to find-and-replace individual entries.

### Approach

Modify the `jsonOutput` memo and copy logic in `ProductEditorPage.tsx` to:

1. **Build the full file string**: Take the `products` array, replace the currently-edited product with the editor's state, and serialize the entire array into a valid TypeScript file — including the `Product` interface, imports, and the `export const products: Product[] = [...]` wrapper plus the helper functions at the bottom.

2. **Simpler alternative (recommended)**: Since the `Product` interface and helper functions rarely change, generate output as:
   - The static top of the file (interface + type definitions, lines 1–122) as a hardcoded string constant
   - The full `products` array with the edited product swapped in, serialized as TypeScript object literals
   - The static bottom of the file (helper functions like `getProductById`, `productCategories`, etc.)

3. **Implementation details**:
   - Create a `buildProductEntry(product)` function that converts a product object to a TypeScript object literal string (not JSON — use unquoted keys, proper booleans, template formatting)
   - In the `jsonOutput` memo, map over all `products`: for each product, if `id === selectedId`, use the editor state; otherwise, use the original product data unchanged
   - Wrap with the file header (interface definition) and footer (helper exports)
   - Store the interface/helpers as string constants imported or inlined

4. **Update the instructions box** to say: "Replace the entire `src/data/products.ts` file with the copied output"

5. **Update the copy button** label to "Copy Full File"

### Files to change
- `src/pages/ProductEditorPage.tsx` — rewrite `jsonOutput` memo to produce full file, update copy button and instructions text

