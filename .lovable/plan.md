

## Add Text Captions Below Each Photo in Factory & Farmers Sections

### Changes

**`src/components/home/FactoryGallerySection.tsx`**
- Add a short `label` field to each photo object, derived from the alt text (e.g. "Cold Storage – Unit 1", "Cleaning & Peeling – Station 1", "Blanching – Line 1", etc.)
- Below each `OptimizedImage`, add a `<p>` caption with `p-2 text-center text-xs font-medium text-foreground` styling

**`src/components/home/FarmersSection.tsx`**
- Same approach: add a `label` field to each photo (e.g. "Farmer Family 1", "Dragon Fruit Plantation", "Papaya Plantation", etc.)
- Add matching `<p>` caption below each image

Labels will be concise, human-readable descriptions so visitors understand what each placeholder photo represents even before real images are added.

