

## Add Export Documents Editor to Admin Logistics Section

The product page's `ProductLogistics` component displays `product.exportDocuments` (falling back to company defaults), but the editor currently has no way to edit this field.

### Changes

**File: `src/components/editor/EditorLogisticsSection.tsx`**
- Add a multi-line text input for `exportDocuments` (one document per line)
- New props: `exportDocuments: string`, `setExportDocuments: (v: string) => void`

**File: `src/pages/ProductEditorPage.tsx`**
- Add `exportDocuments` state (string, newline-separated)
- Load from `product.exportDocuments` array (join with newlines), save as string array (split by newlines) in JSON output
- Pass to `EditorLogisticsSection`

