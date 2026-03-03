

## Add A4 Certificate Placeholders to Certified Quality Assurance Section

### Changes to `src/components/home/CertificationsSection.tsx`

Below the existing certification icon cards grid, add a new row of A4-format placeholder images — one per certification (4 total: USDA Organic, EU Organic, HACCP, Halal).

- Use `OptimizedImage` with A4 aspect ratio (`aspectRatio="auto"` + explicit `aspect-[210/297]` class for portrait A4 proportion)
- Placeholder src: `/placeholder.svg`, with alt tags like "USDA Organic certificate – PT Dried Fruits Total Indonesia"
- Responsive grid: `grid-cols-2 lg:grid-cols-4`
- Each placeholder wrapped in a `rounded-xl bg-card shadow-soft overflow-hidden` card with the cert name as caption below
- Placed between the icon cards grid and the "View Certifications" CTA button

