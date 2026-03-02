

## Add Validation to Product Editor

Add validation that checks required fields before copying JSON, showing inline error indicators and a summary.

### Required fields (from Product interface)

- `name` (string, non-empty)
- `tagline` (string, non-empty)
- `description` (string, non-empty)
- `fobBase` (pricing.fobBase)
- `moq` (pricing.moq)
- `leadTime` (pricing.leadTime)
- `packagingBulk` (packaging.bulk)
- `packagingRetail` (packaging.retail)
- `certs` (at least one certification)

### Changes to `ProductEditorPage.tsx`

1. Add `validationErrors` state (`Record<string, string>`) and a `validate()` function that checks all required fields and returns errors.
2. Modify `handleCopy` to run validation first — if errors exist, set state and show a toast, skip copying.
3. Pass `validationErrors` to relevant section components so they can highlight fields with red borders.
4. Show a validation error summary banner above the JSON output when errors exist.
5. Clear errors when user switches products.

### Changes to section components

Each section component gets an optional `errors?: Record<string, string>` prop. If a field key is in errors, its `FormInput`/`FormTextarea` gets a red border class and shows the error message below it.

Affected components: `EditorSeoSection`, `EditorPricingSection`, `EditorPackagingSection`, `EditorCertificationsSection`. The tagline/description fields (inline) get error styling directly in the parent.

### FormElements update

Add optional `error` prop to `FormInput` and `FormTextarea` that shows red border + error text beneath the field.

