# Design System Reference

> PT Dried Fruits Total Indonesia — B2B Export Website

## Overview

The visual identity uses **tropical greens**, **earthy browns**, and **warm gold accents** to reflect Indonesian agriculture. All colors are defined as HSL CSS custom properties in `src/index.css` and mapped to Tailwind classes via `tailwind.config.ts`. Dark mode is toggled with the `.dark` class.

**Tech stack:** React · Vite · Tailwind CSS 3 · CSS Custom Properties (HSL) · shadcn/ui

---

## Color Tokens

### Core

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `0 0% 96%` | `0 0% 9%` |
| `--foreground` | `0 0% 9%` | `0 0% 98%` |
| `--card` | `0 0% 98%` | `0 0% 14%` |
| `--card-foreground` | `0 0% 9%` | `0 0% 98%` |
| `--popover` | `0 0% 89%` | `0 0% 25%` |
| `--popover-foreground` | `0 0% 9%` | `0 0% 98%` |

### Brand

| Token | Light | Dark |
|-------|-------|------|
| `--primary` | `20 90% 48%` | `27 95% 60%` |
| `--primary-foreground` | `33 100% 96%` | `12 81% 14%` |
| `--secondary` | `0 0% 32%` | `0 0% 45%` |
| `--secondary-foreground` | `0 0% 98%` | `0 0% 98%` |
| `--accent` | `47 100% 96%` | `20 91% 14%` |
| `--accent-foreground` | `37 92% 50%` | `43 96% 56%` |
| `--destructive` | `0 72% 50%` | `0 84% 60%` |
| `--destructive-foreground` | `0 85% 97%` | `0 85% 97%` |
| `--muted` | `0 0% 63%` | `0 0% 45%` |
| `--muted-foreground` | `0 0% 9%` | `0 0% 98%` |

### Custom Brand Colors

| Token | Light | Dark |
|-------|-------|------|
| `--tropical-green` | `142 50% 35%` | — |
| `--tropical-green-light` | `142 40% 45%` | — |
| `--tropical-green-dark` | `142 55% 25%` | — |
| `--earth-brown` | `30 35% 22%` | — |
| `--earth-brown-light` | `30 20% 50%` | — |
| `--earth-brown-dark` | `30 40% 15%` | `30 25% 75%` |
| `--gold` | `45 90% 50%` | — |
| `--gold-light` | `45 80% 70%` | — |
| `--whatsapp` | `142 70% 45%` | — |
| `--whatsapp-hover` | `142 70% 38%` | — |

### Contrast Utilities

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--on-primary` | `0 0% 100%` | `0 0% 100%` | White text on primary bg |
| `--on-primary-muted` | `0 0% 95%` | `0 0% 95%` | Subdued text on primary bg |
| `--on-dark` | `60 20% 95%` | `60 20% 95%` | Text on dark sections (footer) |
| `--on-dark-muted` | `60 10% 75%` | `60 10% 75%` | Secondary text on dark bg |
| `--on-dark-subtle` | `60 8% 65%` | `60 8% 65%` | Tertiary text on dark bg |

### Chart Colors

| Token | Light | Dark |
|-------|-------|------|
| `--chart-1` | `27 95% 60%` | `30 97% 72%` |
| `--chart-2` | `43 96% 56%` | `45 96% 64%` |
| `--chart-3` | `47 95% 53%` | `48 96% 76%` |
| `--chart-4` | `24 94% 53%` | `27 95% 60%` |
| `--chart-5` | `0 0% 45%` | `0 0% 45%` |

### Border & Input

| Token | Light | Dark |
|-------|-------|------|
| `--border` | `0 0% 83%` | `0 0% 32%` |
| `--input` | `0 0% 83%` | `0 0% 32%` |
| `--ring` | `20 90% 48%` | `27 95% 60%` |

**Tailwind usage:** All colors are mapped in `tailwind.config.ts` using `hsl(var(--token))`. Use semantic classes like `bg-primary`, `text-foreground`, `border-border` — never raw color values.

---

## Typography

### Font Stacks

| Token | Stack |
|-------|-------|
| `font-heading` | `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif` |
| `font-body` | `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif` |
| `font-sans` | `ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji` |
| `font-serif` | `ui-serif, Georgia, Cambria, Times New Roman, Times, serif` |
| `font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace` |

All fonts are **system/web-safe** — no external font downloads.

### Heading Rules

All headings (`h1`–`h6`) automatically receive:

```css
font-family: var(--font-heading);
font-weight: bold;
letter-spacing: tight; /* tracking-tight */
```

### Recommended Sizes

| Element | Class | Size |
|---------|-------|------|
| H1 | `text-4xl md:text-5xl` | 36px / 48px |
| H2 | `text-3xl md:text-4xl` | 30px / 36px |
| H3 | `text-2xl md:text-3xl` | 24px / 30px |
| H4 | `text-xl` | 20px |
| Body | `text-base` | 16px |
| Small | `text-sm` | 14px |
| Caption | `text-xs` | 12px |

---

## Spacing & Layout

### Base Unit

`4px` (`0.25rem`) — Tailwind's default spacing scale.

### Container

```
Max width:  1400px (2xl breakpoint)
Padding:    1rem (mobile) / 1.5rem (sm) / 2rem (lg)
Centered:   Yes (mx-auto)
```

### Section Spacing Conventions

| Context | Class |
|---------|-------|
| Page section vertical | `py-16 md:py-24` |
| Section title margin | `mb-8 md:mb-12` |
| Card grid gap | `gap-6 md:gap-8` |
| Inline element gap | `gap-2` or `gap-4` |

---

## Border Radius

| Token | Value | Tailwind |
|-------|-------|----------|
| `--radius` (lg) | `0.75rem` (12px) | `rounded-lg` |
| md | `calc(0.75rem - 2px)` (10px) | `rounded-md` |
| sm | `calc(0.75rem - 4px)` (8px) | `rounded-sm` |

---

## Shadows

### Custom Utilities

| Class | Value |
|-------|-------|
| `.shadow-soft` | `0 4px 20px -4px hsl(var(--primary) / 0.15)` |
| `.shadow-glow` | `0 0 30px hsl(var(--primary) / 0.25)` |

### Elevation Scale (CSS Variables)

| Token | Value |
|-------|-------|
| `--shadow-2xs` | `0 1px 3px hsl(0 0% 0% / 0.05)` |
| `--shadow-xs` | `0 1px 3px hsl(0 0% 0% / 0.05)` |
| `--shadow-sm` | `0 1px 3px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)` |
| `--shadow-md` | `0 1px 3px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1)` |
| `--shadow-lg` | `0 1px 3px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)` |
| `--shadow-xl` | `0 1px 3px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1)` |
| `--shadow-2xl` | `0 1px 3px hsl(0 0% 0% / 0.25)` |

---

## Buttons

### Variants

| Variant | Classes |
|---------|---------|
| `default` | `bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-glow` |
| `destructive` | `bg-destructive text-destructive-foreground hover:bg-destructive/90` |
| `outline` | `border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground` |
| `outline-light` | `border border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20` |
| `secondary` | `bg-secondary text-secondary-foreground hover:bg-secondary/80` |
| `ghost` | `hover:bg-accent hover:text-accent-foreground` |
| `link` | `text-primary underline-offset-4 hover:underline` |
| `whatsapp` | `bg-whatsapp text-primary-foreground hover:bg-whatsapp-hover shadow-soft` |
| `accent` | `bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft` |
| `gold` | `bg-gradient-to-r from-gold to-gold-light text-earth-brown-dark font-semibold hover:opacity-90` |

### Sizes

| Size | Classes |
|------|---------|
| `default` | `h-11 sm:h-10 px-4 py-2` |
| `sm` | `h-10 sm:h-9 rounded-lg px-3` |
| `lg` | `h-12 rounded-lg px-8 text-base` |
| `xl` | `h-14 rounded-lg px-10 text-lg` |
| `icon` | `h-11 w-11 sm:h-10 sm:w-10` |

### CTA Components

Use centralized button components from `src/components/CTAButton.tsx`:

- `PrimaryButton` — default variant
- `SecondaryButton` — outline variant
- `SecondaryLightButton` — outline-light (for dark backgrounds)
- `AccentButton` — accent variant
- `GoldButton` — gold gradient variant
- `IconButton` — ghost icon variant
- `WhatsAppButton` — floating, inline, or full variants

---

## Animations

### Keyframes

| Name | Description |
|------|-------------|
| `accordion-down/up` | Radix accordion expand/collapse |
| `float` | Gentle 10px vertical bob (3s loop) |
| `pulse-glow` | WhatsApp button shadow pulse (4s loop) |
| `fadeIn` | Opacity 0→1 (0.5s) |
| `slideUp` | Translate Y 20px→0 + fade (0.5s) |
| `scaleIn` | Scale 0.95→1 + fade (0.3s) |
| `contentReveal` | Translate Y 12px→0 + fade (0.4s) |
| `blurUp` | Blur 10px→0 + scale 1.02→1 (0.5s) |
| `shimmer` | Skeleton loading gradient sweep (1.5s loop) |

### Delay Utilities

```
.animation-delay-75   → 75ms
.animation-delay-100  → 100ms
.animation-delay-150  → 150ms
.animation-delay-200  → 200ms
.animation-delay-300  → 300ms
```

---

## Accessibility

### WCAG AA Contrast Requirements

| Context | Minimum Ratio |
|---------|---------------|
| Normal text (<18px) | 4.5:1 |
| Large text (≥18px bold) | 3:1 |
| UI components | 3:1 |

### Focus Styles

All interactive elements (`a`, `button`, `[role="button"]`) receive on `:focus-visible`:

```css
outline: none;
ring: 2px solid var(--ring);
ring-offset: 2px;
ring-offset-color: var(--background);
border-radius: var(--radius);
```

### Touch Targets

| Class | Min Size |
|-------|----------|
| `.touch-target` | 48×48px |
| `.touch-target-sm` | 44×44px |

### Contrast Utility Classes

| Class | Use Case |
|-------|----------|
| `.text-on-primary` | White text on primary/green backgrounds |
| `.text-on-primary-muted` | Subdued text on primary backgrounds |
| `.text-on-dark` | Primary text on dark sections (footer, hero) |
| `.text-on-dark-muted` | Secondary text on dark sections |
| `.text-on-dark-subtle` | Tertiary text on dark sections |

---

## Dark Mode

Activated via `.dark` class on `<html>`. Key overridden tokens:

- Primary shifts from forest green (`20 90% 48%`) to warm orange (`27 95% 60%`)
- Backgrounds invert (light gray → near-black)
- Accent inverts (light gold → dark brown with gold foreground)
- Earth-brown-dark inverts for readability (`30 40% 15%` → `30 25% 75%`)
- All contrast utility tokens remain consistent across modes

---

## Gradient Utilities

| Class | Value |
|-------|-------|
| `.gradient-primary` | `bg-gradient-to-r from-primary to-tropical-green-light` |
| `.gradient-hero` | `bg-gradient-to-br from-tropical-green-dark via-primary to-tropical-green-light` |
| `.gradient-gold` | `bg-gradient-to-r from-gold to-gold-light` |

---

## File Reference

| File | Purpose |
|------|---------|
| `src/index.css` | CSS custom properties, utility classes, animations |
| `tailwind.config.ts` | Tailwind theme extensions, color mappings |
| `src/components/ui/button.tsx` | Button variants & sizes (cva) |
| `src/components/CTAButton.tsx` | Centralized CTA button components |
| `src/components/WhatsAppButton.tsx` | WhatsApp button (floating/inline/full) |
| `src/pages/DesignSystemPage.tsx` | Interactive design system page (`/design-system`) |
