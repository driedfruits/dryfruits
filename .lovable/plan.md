

## Database-Backed Admin Panel — Plan

### Problem
The current admin editor generates a TypeScript file for manual copy-paste. The `products.ts` file is now empty, causing build errors. We need to move product data to a database and build a proper admin panel that saves directly.

### Step 0 — Enable Lovable Cloud
Connect Lovable Cloud to get a Supabase backend with database, auth, and edge functions.

### Step 1 — Create Products Table
A single `products` table using JSONB columns for nested data (specifications, images, logistics, packaging, pricing, availability, faqs). This matches the current `Product` interface shape without over-normalizing.

```text
products table:
├── id (text, PK)
├── name (text)
├── short_name (text)
├── category (text, default "dried-fruits")
├── is_organic (boolean)
├── sku (text, nullable)
├── hs_code (text, nullable)
├── tagline (text)
├── description (text)
├── flavor_profile (text, nullable)
├── texture (text, nullable)
├── meta_title (text, nullable)
├── meta_description (text, nullable)
├── keywords (text[], nullable)
├── images (jsonb, nullable)
├── specifications (jsonb)
├── availability (jsonb, nullable)
├── harvest_months (int[], nullable)
├── applications (text[])
├── packaging (jsonb)
├── pricing (jsonb)
├── logistics (jsonb, nullable)
├── export_documents (text[], nullable)
├── certifications (text[])
├── faqs (jsonb, nullable)
├── related_products (text[])
├── created_at (timestamptz)
├── updated_at (timestamptz)
```

RLS: Public read access (products are public content). Write access restricted (admin only via auth or service role).

### Step 2 — Data Layer
- Create `src/hooks/useProducts.ts` — fetches all products from Supabase, with caching
- Create `src/lib/supabase.ts` — Supabase client setup
- Create a `productMapper` utility to convert DB snake_case rows to the existing `Product` interface (camelCase), so all existing components work unchanged

### Step 3 — Update Product Data Source
Replace `src/data/products.ts`:
- Keep the `Product` type interface export
- Export `products`, `getProductById`, `getProductsByCategory`, `getRelatedProducts`, `productCategories` as before, but backed by a React Query or simple state that loads from DB
- For SSR/SEO: initial load fetches from Supabase, then caches client-side

Since many components import synchronously, we'll use a provider pattern:
- `ProductsProvider` wraps the app, fetches products once on mount
- `useProducts()` hook returns the products array
- Update consumer pages (`ProductsPage`, `ProductDetailPage`, `ProductComparisonTable`, etc.) to use the hook

### Step 4 — Rebuild Admin Editor
Replace the copy-paste workflow with direct DB writes:
- Remove `productSerializer.ts` (no longer needed)
- Remove the "Copy Full File" output section
- Add a **Save** button that upserts the product to Supabase
- Add an **Add New Product** button
- Add a **Delete Product** button with confirmation
- Add success/error toast feedback
- Keep all existing editor sections (SEO, Images, Pricing, Specs, etc.) — they just save to DB now

### Step 5 — Fix Build Errors
- Restore `products.ts` exports (type + helpers) backed by the new data layer
- Update `companyData.ts` re-exports to work with the new async pattern
- Update `EditorRelatedSection.tsx` and `ProductEditorPage.tsx` imports

### Files Changed
- **New**: `src/lib/supabase.ts`, `src/hooks/useProducts.ts`, `src/contexts/ProductsContext.tsx`
- **New**: Supabase migration for `products` table
- **Modified**: `src/data/products.ts` (type + DB-backed helpers)
- **Modified**: `src/pages/ProductEditorPage.tsx` (save to DB instead of copy-paste)
- **Modified**: `src/pages/ProductsPage.tsx`, `src/pages/ProductDetailPage.tsx` (use hook)
- **Modified**: `src/components/products/ProductComparisonTable.tsx` (use hook)
- **Modified**: `src/App.tsx` (wrap with ProductsProvider)
- **Removed**: `src/utils/productSerializer.ts`
- **Modified**: `src/data/companyData.ts` (updated re-exports)

### Auth Note
For now, the admin page at `/admin/products` will be accessible without login (as it currently is). Authentication can be added as a follow-up to restrict write access.

