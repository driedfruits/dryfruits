

## Add Applications, Compliance, FAQs & Related Products to Editor

Extend `src/pages/ProductEditorPage.tsx` with four new editable sections.

### New Sections

1. **Applications** — dynamic string list with add/remove buttons (e.g. "Snacking", "Trail mix")
2. **Compliance** — three text inputs: USA, EU, Global
3. **FAQs** — dynamic list of question+answer pairs with add/remove
4. **Related Products** — multi-select checkboxes showing all other products (excluding current)

### New State
- `applications: string[]`
- `complianceUsa, complianceEu, complianceGlobal: string`
- `faqs: Array<{question: string, answer: string}>`
- `relatedProducts: string[]`

### Form Layout (appended after Logistics section)
1. Applications — tag-style list with text input + "Add" button, each item has remove button
2. Compliance — grouped card with 3 text inputs (USA, EU, Global)
3. FAQs — dynamic rows: each row has question input + answer textarea + remove button, plus "Add FAQ" button
4. Related Products — checkbox grid of all product names (filtered to exclude current product)

### Changes
| File | Change |
|------|--------|
| `src/pages/ProductEditorPage.tsx` | Add state, loadProduct mapping, form sections, and include all fields in JSON output |

No other files need changes — reuses existing `FormInput`, `FormTextarea`, `FormCheckbox` components.

