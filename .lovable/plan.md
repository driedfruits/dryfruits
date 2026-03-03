

## Add Missing `packagingMethod` Spec Field to Editor

### Gap Found
The `ProductSpecsTable` displays 22 spec keys. The `EditorSpecificationsSection` has 21 fields. The missing one is:

- **`packagingMethod`** ("Bulk Packaging Method") — displayed on the product page but not editable

Product Name and HS Code also appear in the specs table but are already editable via dedicated fields elsewhere in the editor.

### Change

**File: `src/components/editor/EditorSpecificationsSection.tsx`**
- Add `{ key: "packagingMethod", label: "Bulk Packaging Method" }` to the "Storage / Processing" group

That's the only change needed — the editor already uses a dynamic `specs` record, so adding the field key automatically wires up loading, editing, and JSON output.

