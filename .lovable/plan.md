

## Product Data Editor Page

Create a dedicated `/admin/products` page with a form-based editor for each product. User selects a product, edits the key fields, and copies the generated JSON output to paste into `src/data/products.ts`.

### Fields to Edit
- **H1** (product name) — text input
- **Price** (FOB base price) — text input
- **Certifications** — multi-select checkboxes (USDA Organic, EU Organic, HACCP, Halal, etc.)
- **MOQ** — text input
- **Lead Time** — text input
- **Harvest & Production Calendar** — peak season + off-peak season text inputs, current status dropdown (in-stock / limited / pre-order)
- **Size & Form** — text input (cuts/slices/chunks)

### Implementation

| File | Change |
|------|--------|
| `src/pages/ProductEditorPage.tsx` | New page: product selector dropdown, form fields for the 7 data groups, JSON output panel with copy button |
| `src/App.tsx` | Add lazy route `/admin/products` pointing to ProductEditorPage |

### Page Layout
1. **Product Selector** — dropdown at top listing all products by name
2. **Edit Form** — uses existing `FormInput`, `FormSelect`, `FormCheckbox` components from `src/components/forms/FormElements.tsx`
3. **JSON Output** — read-only code block at bottom showing the updated product data snippet, with a "Copy to Clipboard" button

### Technical Details
- Loads current product data from the `products` array as default values
- On field change, re-generates the JSON output in real-time
- JSON output contains only the edited fields (h1/name, pricing.fobBase, certifications, pricing.moq, pricing.leadTime, availability, specifications.size)
- No Layout wrapper needed — standalone admin page, minimal styling
- Uses existing form components for consistent design

