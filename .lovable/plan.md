

## Move Applications Editor Into Sensory Section

### Current State
The Product Editor already has:
- A "Product Description (Sensory)" section with Flavor Profile and Texture fields (between Description and Pricing — correct position)
- An `EditorApplicationsSection` — but it's placed much further down, after Logistics

### Fix
**`src/pages/ProductEditorPage.tsx`** — Move the `<EditorApplicationsSection>` from its current position (after Logistics) up into the "Product Description (Sensory)" block, right after the Texture field. This groups all product description content (flavor, texture, applications) together in one section between the main description and pricing, matching the product page layout.

Single move of one component, no new code needed.

