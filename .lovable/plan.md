

## Add Full Specifications Editing to Product Editor

### Overview
Replace the single "Size & Form" input with a dedicated specifications section covering all 21 spec fields from the Product interface.

### Changes

**1. Create `src/components/editor/EditorSpecificationsSection.tsx`**
- Data-driven component using the spec field keys and labels from `specLabels`
- Groups fields into 4 categories: Physical, Chemical/Safety, Microbiology, Storage/Processing
- Each field is a `FormInput` with the human-readable label
- Props: `specs: Record<string, string>`, `updateSpec: (key: string, value: string) => void`

**2. Update `src/pages/ProductEditorPage.tsx`**
- Replace `sizeForm` state with `const [specs, setSpecs] = useState<Record<string, string>>({})`
- Update `loadProduct`: iterate `product.specifications` keys to populate `specs`
- Update `jsonOutput`: output `specifications` from `specs` (filter empty values)
- Replace the `sizeForm` FormInput + remove `sizeForm` from EditorPricingSection usage
- Add `<EditorSpecificationsSection>` to the form
- Update `useMemo` deps

**3. Update `src/components/editor/EditorPricingSection.tsx`**
- Remove `sizeForm` / `setSizeForm` props (moved to specs section)

**4. Update `src/components/editor/index.ts`**
- Export the new `EditorSpecificationsSection`

### Spec Fields (21 total)
Physical: size, color, moisture, waterActivity, grade, defects, origin
Chemical: brixLevel, so2Level, additives, foreignMatter, fatContent, aflatoxins
Microbiology: totalPlateCount, yeastMold, salmonella, eColi, testingMethod
Storage/Processing: shelfLife, storageTemp, storageHumidity, processingMethod

