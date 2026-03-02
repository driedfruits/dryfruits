

## Replace ManufacturingSection with "About Our Factory" Section

### Overview
Replace the current `ManufacturingSection` with a new two-column "About Our Factory" layout — text on the left, factory photo placeholder on the right. Reorder it to appear directly after HeroSection.

### Changes

#### 1. `src/components/home/ManufacturingSection.tsx` — Full rewrite
- Two-column layout (`md:grid-cols-2`)
- Left column: "Family Owned Factory" heading, then the provided copy as structured paragraphs with the fruit list, certifications, and export info
- Right column: Image placeholder div with `alt="PT Dried Fruits Total Indonesia factory facility in Magelang, Central Java"` and dimensions `width={600} height={450}`
- Pull legal data (NPWP, NIB) from `companyInfo` in `companyData`

#### 2. `src/pages/HomePage.tsx` — Reorder sections
Move `ManufacturingSection` to appear right after `HeroSection` (before `WhyChooseUs`):

```
<HeroSection />
<ManufacturingSection />
<WhyChooseUs />
...
```

### Content Structure (left column)
- `<h2>` "About Our Factory"
- `<h3>` "Family Owned Factory"
- Paragraph with company intro, legal name, tax/business IDs
- Fruit list as styled pill badges (reuse the same pattern from HeroSection)
- Paragraph about certifications (USDA Organic, EU Organic, Fair Trade, HACCP, Halal, Kosher)
- Paragraph about export reach (18 countries, regions, customer segments)

