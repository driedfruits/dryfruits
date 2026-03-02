

## Add Product Description (Flavor Profile & Texture) Editing to Admin

The "Product Description" section on the product page displays `flavorProfile` and `texture` fields. Applications are already editable. We need to add inputs for the two missing sensory fields.

### Changes

**`src/pages/ProductEditorPage.tsx`**
- Add state: `const [flavorProfile, setFlavorProfile] = useState("")` and `const [texture, setTexture] = useState("")`
- Update `loadProduct`: set from `product.flavorProfile` and `product.texture`
- Update `jsonOutput`: include `flavorProfile` and `texture` (if non-empty)
- Update `useMemo` deps
- Add two `FormInput`/`FormTextarea` fields in the form, placed near the description/tagline area (before pricing)

**No new components needed** — just two simple text inputs added inline to the existing editor page.

