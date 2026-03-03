

## Make Specs Table Compact & Mobile-Friendly

### Changes to `src/components/products/ProductSpecsTable.tsx`

**Compact styling:**
- Reduce section padding from `py-12` to `py-8`
- Reduce heading size and margin
- Use smaller cell padding (`px-3 py-2` instead of default `p-4`)
- Use `text-sm` for all table content
- Remove `min-w-[400px]` to allow natural mobile wrapping

**Mobile-friendly approach:**
- On mobile (`md:hidden`), render specs as a stacked list of label/value pairs instead of a table — this avoids horizontal scroll entirely
- On desktop (`hidden md:block`), keep the table layout but with tighter spacing
- Remove the `overflow-x-auto` wrapper since mobile uses the stacked layout

### File: `src/components/products/ProductSpecsTable.tsx`
- Replace the single table with two views: a mobile stacked list and a desktop table
- Mobile: each spec rendered as a `div` with label on top (bold, smaller) and value below, separated by subtle borders
- Desktop: compact table with reduced padding

