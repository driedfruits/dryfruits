

## Root Cause

Two bugs in the serialization pipeline produce invalid TypeScript when pasted:

1. **Empty gallery objects**: The editor initializes 4 gallery slots as `{src: "", alt: ""}`. The filter `imgGallery.filter(g => g.src || g.alt)` keeps items where either field is truthy — but when both are empty strings, they get filtered out correctly. However, the `serializeValue` function filters out empty string values (line 192: `v !== ""`), so a gallery item like `{src: "", alt: "some alt"}` becomes `{alt: "some alt"}` — missing `src`, which violates the type.

2. **Current build error**: The actual data in products.ts line 136 has `gallery: [{}, {}, {}, {}]` — four empty objects. This means gallery items with only empty strings got through the filter (both `src` and `alt` were empty but the objects existed), then the serializer stripped all empty string properties, leaving `{}`.

**The real fix**: The `gallery` filter in `editedProduct` should be stricter — only include items where `src` is non-empty (since `src` is required by the type). And as a safety net, the serializer should skip empty objects in arrays.

### Changes

**1. `src/pages/ProductEditorPage.tsx` (line 170)**
- Change gallery filter from `g => g.src || g.alt` to `g => g.src.trim()` — only include gallery items that have an actual image source

**2. `src/utils/productSerializer.ts` (line 191-197)**
- Add a guard in `serializeValue` for objects: after filtering out empty/undefined/null entries, if no entries remain AND we're inside an array context, skip the item entirely
- Simpler approach: in the array serialization (line 185), filter out items that serialize to `{}` before joining

**3. `src/data/products.ts` (line 136)** — Fix the immediate build error
- Remove `gallery: [{}, {}, {}, {}]` → remove the entire `gallery` key (or set to empty array `[]`)

This ensures the "Copy Full File" output is always valid TypeScript that can be pasted without errors.

