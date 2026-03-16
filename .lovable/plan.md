

## Add GA4 & Facebook Pixel Event Tracking

### What changes

**1. Create a centralized analytics utility** — `src/lib/analytics.ts`
- Helper functions `trackGA4Event()` and `trackFBPixelEvent()` that safely call `gtag()` and `fbq()` with proper TypeScript declarations
- One place to manage all event tracking

**2. Add Facebook Pixel base script** — `index.html`
- Standard FB Pixel initialization snippet (needs your Pixel ID)

**3. Update `useWhatsApp` hook** — `src/hooks/useWhatsApp.ts`
- Replace the `console.log` analytics stub with real GA4 + FB Pixel calls
- GA4 event: `whatsapp_click` with params `{ source, message_preview }`
- FB Pixel event: `Contact` with `{ content_name: 'WhatsApp', source }`

**4. Update `ContactForm`** — `src/components/forms/ContactForm.tsx`
- On successful submission: fire GA4 `form_submit` event with `{ form_type: variant }` and FB Pixel `Lead` event

**5. Update `CatalogForm`** — `src/components/forms/CatalogForm.tsx`
- On successful submission: fire GA4 `catalog_download` event and FB Pixel `Lead` event with `{ content_name: 'Catalog' }`

### Events summary

| Action | GA4 Event | FB Pixel Event |
|--------|-----------|----------------|
| WhatsApp click | `whatsapp_click` | `Contact` |
| Contact/Quote/Sample form submit | `form_submit` | `Lead` |
| Catalog form submit | `catalog_download` | `Lead` |

### What I need from you
- **Facebook Pixel ID** (e.g. `123456789012345`)

