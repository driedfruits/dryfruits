

## Generate `DESIGN.md` — Design System Reference

Create a single Markdown file at project root documenting the complete design system, extracted from `index.css`, `tailwind.config.ts`, and component files.

### File: `DESIGN.md`

### Sections

1. **Overview** — Theme description (tropical greens, earthy browns, warm accents), tech stack (Tailwind + CSS custom properties + HSL)

2. **Color Tokens** — Full table of all CSS variables with HSL values for both light and dark modes:
   - Core (background, foreground, card, popover)
   - Brand (primary, secondary, accent, destructive)
   - Custom (tropical-green, earth-brown, gold, whatsapp) with light/dark variants
   - Contrast utilities (on-primary, on-dark, on-dark-muted, on-dark-subtle)
   - Chart colors

3. **Typography** — Font stacks (heading, body, sans, serif, mono), heading hierarchy rules (`font-heading font-bold tracking-tight`), recommended sizes

4. **Spacing & Layout** — 4px base unit, container config (max 1400px, responsive padding 1rem/1.5rem/2rem), section spacing conventions

5. **Border Radius** — Three tokens: lg (0.75rem), md (0.5rem), sm (0.25rem)

6. **Shadows** — Custom utilities (shadow-soft, shadow-glow) plus standard elevation scale (2xs through 2xl)

7. **Buttons** — All 10 variants (default, destructive, outline, outline-light, secondary, ghost, link, whatsapp, accent, gold) and 5 sizes (default, sm, lg, xl, icon) with Tailwind classes

8. **Animations** — Keyframes (accordion, float, pulse-glow, fadeIn, slideUp, scaleIn, blurUp, shimmer) and delay utilities

9. **Accessibility** — WCAG AA contrast ratios, focus-visible ring styles, touch target sizes (48px/44px), contrast utility classes

10. **Dark Mode** — Toggle via `.dark` class, list of overridden tokens

No code changes to existing files. Single new file creation.

