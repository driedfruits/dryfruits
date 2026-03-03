

## Production Process Section

### Overview
Create a new `ProductionProcessSection` component for the homepage, placed after `ManufacturingSection` and before `FactoryGallerySection`. This is a content-rich section with multiple sub-blocks, following existing patterns (memo'd components, OptimizedImage, CTAButton, Tailwind design tokens).

### Data Layer

**New file: `src/data/productionData.ts`**
- `processSteps` array (3 items: Intake & Sorting, Washing & Blanching, Drying) with icon name, title, description, stat label/value
- `detailedBlocks` array (4 items: raw material intake, cleaning & blanching, drying ovens, QC & packaging) with title, copy (50-80 words each with `{{REPLACE_WITH_ACTUAL}}` placeholders for blanch temp, solar %, batch throughput), image alt/caption, and layout direction (left/right alternating)
- `technicalSpecs` key-value array (electric ovens: 4, biomass ovens: 3, capacity: 3 tons/day, blanching equipment, washing, power source, batch throughput - with placeholders)
- `processImages` array (6 placeholder entries with alt text and captions)

### Component Structure

**New file: `src/components/home/ProductionProcessSection.tsx`**

Single section with `id="production-process"` and `py-20 bg-background`, containing these sub-blocks rendered inline (no separate component files for sub-blocks to keep it simple):

1. **Top row** - Two-column `lg:grid-cols-2` layout
   - Left: Embla carousel (already installed) with 6 placeholder images, swipe-enabled, lazy-loaded via OptimizedImage
   - Right: H2 "How We Dehydrate Tropical Fruit for Export", 2-3 line intro paragraph, and 3 stat cards (4 Electric Ovens, 3 Biomass Ovens, 3 Tons/Day) using inline styled divs with `bg-card shadow-soft rounded-xl`

2. **Three-step icons row** - `md:grid-cols-3` grid
   - Each: Lucide icon in a rounded circle, step title, 2-line description, stat badge
   - Icons: `PackageSearch` (Intake), `Droplets` (Washing), `Flame` (Drying)

3. **Detailed flow blocks** - Stacked, alternating image left/right using `lg:grid-cols-2` with `flex-row-reverse` on even items
   - Each block: OptimizedImage placeholder + text content (h3, paragraph, caption)

4. **Technical specs card** - Compact two-column key-value table using existing `Table` components, inside a `bg-card rounded-2xl shadow-soft` wrapper

5. **Sustainability badges row** - Horizontal flex with badges: "Solar-Powered", "Renewable Energy", "3 Tons/Day Capacity"
   - Uses existing Badge component with custom styling

6. **Horizontal process flow infographic** - Simple SVG with 4 connected nodes (Intake -> Clean -> Dry -> Pack), using primary color tokens, with labels. Static SVG, no animation needed initially.

7. **CTAs row** - Three buttons using existing CTAButton components
   - "Request Price List" (PrimaryButton to /catalog)
   - "Request Free Sample" (SecondaryButton to /samples)  
   - "Download Spec Sheet" (SecondaryButton, href placeholder with `onClick` logging analytics event names `production_cta_quote`, `production_cta_sample`, `production_cta_pdf` via `console.log` - no real analytics SDK yet)

### Integration

**`src/components/home/index.ts`** - Add `ProductionProcessSection` export

**`src/pages/HomePage.tsx`** - Insert `<ProductionProcessSection />` between `<ManufacturingSection />` and `<FactoryGallerySection />`

### Scope boundaries
- No PDF generation (link points to `#` placeholder)
- No real analytics SDK - CTAs log event names to console
- No CMS integration - copy is editable in the data file
- All images use `/placeholder.svg` with descriptive alt text
- Placeholders marked with `{{REPLACE_WITH_ACTUAL}}` in data file for: blanch temperature, solar percentage, batch throughput, equipment model

