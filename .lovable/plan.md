

## Add Component Inventory to DESIGN.md

Append a new **Component Inventory** section before the existing "File Reference" section at the end of `DESIGN.md`.

### Content

Documents all reusable components organized by category, with their props and usage notes:

**Layout Components**
- `Layout` — `children`
- `PageHero` — `title`, `subtitle?`, `children?`, `className?`
- `Header` / `Footer` / `MobileBottomNav` — no custom props

**CTA & Button Components**
- `CTAButton` — `to?`, `href?`, `children`, plus all `ButtonProps`
- `PrimaryButton`, `SecondaryButton`, `SecondaryLightButton`, `AccentButton`, `GoldButton`, `IconButton` — same interface as CTAButton
- `WhatsAppButton` — `message?`, `className?`, `variant?: "floating" | "inline" | "full"`, `size?: "sm" | "default" | "lg"`

**UI Primitives**
- `OptimizedImage` — `src`, `alt`, `aspectRatio?: "square" | "video" | "portrait" | "auto"`, `placeholderSrc?`, `priority?`, `fallbackIcon?`, `width?`, `height?`
- `GradientCard` — `to`, `children`, `className?`
- `FAQAccordion` — `items: FAQItem[]`, `variant?: "separated" | "contained"`, `className?`

**Form Components**
- `FormInput` — `label`, `error?`, `helperText?` + native input attrs
- `FormTextarea` — `label`, `error?`, `helperText?` + native textarea attrs
- `FormSelect` — `label`, `error?`, `helperText?`, `options: {value, label}[]`, `placeholder?`
- `FormCheckbox` — `label`, `error?`, `checked?`, `onCheckedChange?`, `disabled?`, `required?`
- `ContactForm` — `variant?: "contact" | "quote" | "sample"`
- `CatalogForm` — no custom props

**Product Components**
- `ProductCard` — `product: {...}`, `animationDelay?`, `showImage?`
- `CategoryCard` — `category: {id, name, description, productCount}`
- `StickyInquiryBar` — `product: Product`
- `ContainerCalculator` — no custom props (uses context)
- `ImagePreview` — `src`

**Utility Components**
- `SEO` — `title?`, `description?`, `keywords?`, `canonical?`, `ogType?`, `ogImage?`, `noIndex?`, `prerenderStatusCode?`
- `ErrorBoundary` — `children`, `fallback?`
- `ScrollToTop` — no props

### Technical approach
- Edit `DESIGN.md` only — insert new section before "File Reference" (before line 315)
- Markdown tables for each category with columns: Component, Props, Notes

