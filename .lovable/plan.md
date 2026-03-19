

## Create `public/humans.txt`

A single new file at `public/humans.txt` following the style of the uploaded Medium example (ASCII art header, structured sections, casual tone).

### Content structure

1. **ASCII art banner** — "DFT INDONESIA" styled header
2. **About** — Factory name, established year, tagline, legal IDs (NIB/NPWP), address
3. **Team** — All 9 team members from `companyInfo.ts` with roles and emails
4. **Contact** — Phone, WhatsApp, email, working hours, website
5. **Products** — Short list of dried fruits (Dragon Fruit, Papaya, Mango, Pineapple, Guava, Jackfruit, Longan, Coconut, Banana, Breadfruit)
6. **Certifications** — USDA Organic, EU Organic, HACCP, Halal, Fair Trade, Kosher
7. **Export reach** — 18 countries summary

### Technical details

- Static `.txt` file in `public/` — served as-is by Vite
- No code changes needed beyond creating the file
- Data sourced from `companyInfo.ts` and `ManufacturingSection.tsx`

