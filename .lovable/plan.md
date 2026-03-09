

## Remove Avocado, Snake Fruit & Rambutan References

These three fruits need to be removed from across the website. Avocado was already deleted from the DB but Snake Fruit still exists. Rambutan only appears in static frontend lists (never had a DB entry).

### Changes

**1. Delete Snake Fruit from database**
- Run migration: `DELETE FROM products WHERE id = 'dried-snake-fruit';`

**2. Clean up related_products references in DB**
- Update all products whose `related_products` JSONB array references `dried-snake-fruit` or `dried-avocado` — remove those entries from the arrays.

**3. Frontend static lists** — remove all three fruits from:
- `src/components/home/HeroSection.tsx` — fruits array (lines 6-8)
- `src/components/home/ManufacturingSection.tsx` — fruits array (lines 6-8)

**4. Redirects** — `src/lib/redirects.ts`:
- Remove avocado aliases (lines 106-107) and snake fruit aliases (lines 101-103)
- Add redirects from `/products/dried-fruits/dried-avocado` → `/products` and `/products/dried-fruits/dried-snake-fruit` → `/products` so old URLs don't 404

**5. Static SEO files**:
- `public/sitemap.xml` — remove avocado and snake-fruit URLs
- `public/llm.html` — remove avocado and snake fruit from product lists, update counts

**6. Storage guide** — `src/pages/StorageGuidePage.tsx` line 264: change "coconut and avocado" to just "coconut" in the nitrogen flushing description

