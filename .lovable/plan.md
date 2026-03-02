

## Add Processing Method Field to Product Description (Sensory) Section

### Current State
`processingMethod` already exists in the product data as part of `specifications` and is editable in the Specifications section of the editor. The user wants it also surfaced in the "Product Description (Sensory)" section for easier access.

### Approach
Rather than duplicating data, add a dedicated `FormInput` for `specs.processingMethod` directly in the sensory section of **`src/pages/ProductEditorPage.tsx`** — placed after Texture and before Applications. It will read/write the same `specs` state (`specs.processingMethod`), so the value stays in sync with the Specifications section.

### Change

**`src/pages/ProductEditorPage.tsx`** — Add one `FormInput` line after Texture:
```tsx
<FormInput
  label="Processing Method"
  value={specs.processingMethod || ""}
  onChange={(e) => setSpecs(prev => ({ ...prev, processingMethod: e.target.value }))}
  placeholder="e.g. Sun-dried, Low-temp dehydrated, Freeze-dried"
/>
```

Single line addition, no new state or components needed.

