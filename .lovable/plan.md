

## Design System / Style Guide Page

Create a new `/design-system` page that documents all visual parameters for designers. This page will be internal-facing (not linked in main navigation) and will pull values directly from the existing CSS variables and Tailwind config.

### Page sections

1. **Color Palette** — Render swatches for all theme colors (primary, secondary, accent, tropical-green, earth-brown, gold, whatsapp, muted, destructive) with HSL values and hex equivalents. Include light/dark variants.

2. **Typography** — Show font families (heading, body), all heading sizes (h1-h6) with rendered examples, body text sizes, and line heights.

3. **Spacing & Layout** — Document container widths, padding scale (4px base), and standard section spacing used across the site.

4. **Border Radius** — Show the 3 radius tokens (lg, md, sm) with visual examples.

5. **Shadows** — Render shadow-soft, shadow-glow, and elevation levels with examples.

6. **Buttons** — All button variants (default, outline, ghost, gold, whatsapp, accent, etc.) and sizes rendered live.

7. **Contrast & Accessibility** — Document WCAG AA rules, contrast utility classes (`text-on-primary`, `text-on-dark`, etc.) with rendered examples on colored backgrounds.

### Technical approach

- **New file**: `src/pages/DesignSystemPage.tsx` — standalone page using `Layout` wrapper
- **Route**: Add `/design-system` route in `App.tsx` (lazy loaded, no nav link)
- No database changes needed
- Values are read from CSS custom properties at runtime using `getComputedStyle` to always stay in sync

