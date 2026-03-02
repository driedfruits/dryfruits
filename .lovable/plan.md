

## Add Validation for Critical Specification Fields

### Changes to `src/pages/ProductEditorPage.tsx`

In the `validate()` function, add checks for three critical spec fields:

```typescript
if (!specs.moisture?.trim()) errors["specs.moisture"] = "Moisture content is required";
if (!specs.shelfLife?.trim()) errors["specs.shelfLife"] = "Shelf life is required";
if (!specs.origin?.trim()) errors["specs.origin"] = "Origin is required";
```

These will integrate with the existing validation error display (error count banner + list) and block the Copy action just like the other required fields.

### Changes to `src/components/editor/EditorSpecificationsSection.tsx`

- Accept an optional `errors` prop (`Record<string, string>`)
- Pass `error={errors?.["specs.moisture"]}` etc. to the three critical `FormInput` fields and mark them `required`

Single-file touch points, minimal change.

