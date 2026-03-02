

## Add Instructions to JSON Output Section

**File: `src/pages/ProductEditorPage.tsx`** (lines 416-427)

Add a help/instruction block above or below the JSON output explaining where to paste the code. Replace the current JSON Output section heading area with:

- A brief instruction paragraph explaining:
  1. Copy the JSON output below
  2. Open `src/data/products.ts`
  3. Find the product entry matching the current product ID
  4. Replace the entire product object with the copied JSON
  5. Save the file

Style it as a muted info box (`bg-blue-50 border-blue-200 text-blue-800` or similar subtle callout) so it stands out without being intrusive. Include the file path in a `<code>` tag for clarity.

Single section change, no other files affected.

