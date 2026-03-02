

## Add Required Validation for `flavorProfile`

### `src/pages/ProductEditorPage.tsx`
In the `validate()` function, add:
```typescript
if (!flavorProfile.trim()) errors.flavorProfile = "Flavor profile is required";
```

In the form UI, add `required` and `error={validationErrors.flavorProfile}` to the `FormTextarea` for Flavor Profile.

Single-file, two-line change.

