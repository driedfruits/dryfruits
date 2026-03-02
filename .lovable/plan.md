

## Refactor ProductEditorPage into Smaller Components

Extract 8 section components into a new `src/components/editor/` directory. Each receives its state values and setters as props. The parent `ProductEditorPage` keeps all state and the JSON output logic, but the JSX becomes a clean list of section components.

### New files to create

All under `src/components/editor/`:

1. **`EditorSeoSection.tsx`** — SEO & Page Settings (name, metaTitle, metaDescription)
2. **`EditorImagesSection.tsx`** — Images (main, thumb, gallery alt text with previews)
3. **`EditorPricingSection.tsx`** — Pricing (fobBase, price tiers, samplePolicy, moq, leadTime, sizeForm)
4. **`EditorCertificationsSection.tsx`** — Certifications checkboxes
5. **`EditorAvailabilitySection.tsx`** — Harvest calendar (peakSeason, offPeakSeason, currentStatus)
6. **`EditorPackagingSection.tsx`** — Packaging (bulk, retail, custom)
7. **`EditorLogisticsSection.tsx`** — Logistics (port, incoterms, container loads)
8. **`EditorApplicationsSection.tsx`** — Applications tag list with add/remove
9. **`EditorComplianceSection.tsx`** — Compliance (usa, eu, global)
10. **`EditorFaqsSection.tsx`** — FAQs with add/remove
11. **`EditorRelatedSection.tsx`** — Related products checkboxes
12. **`index.ts`** — barrel export

### Pattern for each component

Each component receives only the state it needs via props. Example for Packaging:

```tsx
interface EditorPackagingSectionProps {
  bulk: string;
  setBulk: (v: string) => void;
  retail: string;
  setRetail: (v: string) => void;
  custom: boolean;
  setCustom: (v: boolean) => void;
}
```

The JSX is lifted directly from the current `ProductEditorPage` — no logic changes, just extraction.

### Changes to `ProductEditorPage.tsx`

- Remove all inline section JSX (~200 lines)
- Import the 11 section components
- Replace with clean component calls passing state props
- Keep all `useState`, `loadProduct`, `jsonOutput`, and `handleCopy` in the parent
- Move `ALL_CERTIFICATIONS` and `STATUS_OPTIONS` constants into their respective section files
- Tagline and Description inputs stay inline (single fields, not worth extracting)

The result: `ProductEditorPage` shrinks from ~440 lines to ~180 lines, with each section being a focused 20-50 line component.

