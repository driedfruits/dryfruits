

## Seed Database with Original Dried Fruit Products

### What needs to happen
Insert 10 dried fruit products into the `products` table with complete B2B data (specifications, pricing, packaging, logistics, FAQs, certifications). Also delete the test product ("test-dried-mango").

### Products to seed
1. **Dried Pineapple** (dried-pineapple)
2. **Dried Mango** (dried-mango)
3. **Dried Coconut** (dried-coconut)
4. **Dried Papaya** (dried-papaya)
5. **Dried Banana** (dried-banana)
6. **Dried Jackfruit** (dried-jackfruit)
7. **Dried Dragon Fruit** (dried-dragon-fruit)
8. **Dried Avocado** (dried-avocado)
9. **Dried Snake Fruit** (dried-snake-fruit)
10. **Dried Breadfruit** (dried-breadfruit)

### Data approach
Each product will include realistic B2B export data:
- **Pricing**: FOB base prices ($7.50–$22.00/kg range per llm.html), MOQ 500kg–1 ton, lead time 2–3 weeks
- **Specifications**: Moisture, water activity, brix, grade, shelf life, SO₂, microbiology, storage conditions
- **Packaging**: Bulk (10–25kg cartons), retail options, custom available
- **Logistics**: Company defaults from `companyInfo` (Tanjung Priok/Perak ports, FOB/CIF/CNF/Ex-Works)
- **Certifications**: USDA Organic, EU Organic, HACCP, Halal (most products organic)
- **FAQs**: 3–4 product-specific B2B questions each
- **Harvest months**: 12-element arrays with seasonal peaks
- **Applications**: Relevant B2B use cases (snack bars, cereals, beverages, etc.)
- **Related products**: Cross-links between products
- **SEO**: Meta titles, descriptions, keywords

### Technical details
- Use the Supabase insert tool to run a single `INSERT INTO products` statement with all 10 rows
- Also `DELETE FROM products WHERE id = 'test-dried-mango'` to remove the test entry
- No code changes needed — the existing `ProductsContext`, `productMapper`, and all consumer components already work with database data

### Files changed
None — this is a data-only operation via SQL insert.

