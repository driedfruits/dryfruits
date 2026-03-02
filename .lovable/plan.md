

## Create `useWhatsApp` Hook

Centralize WhatsApp URL generation, click handling, and analytics tracking into a single hook, then refactor all consumers.

### New File: `src/hooks/useWhatsApp.ts`

- Accepts optional `message` string (default: generic intro message) and optional `source` string for analytics tracking
- Returns `{ whatsappUrl, handleClick }`:
  - `whatsappUrl`: the full `https://wa.me/{number}?text={encoded}` string
  - `handleClick(e)`: logs analytics event (`whatsapp_click` with `source` and `message`), then calls `window.open(url, '_blank')` to ensure it opens WhatsApp directly — no `target="_blank"` anchor behavior needed
- Uses `companyInfo.whatsapp` from `@/data/companyData`
- Analytics: `console.log` stub for now (easy to swap for GA/GTM/Plausible later), structured as `{ event: 'whatsapp_click', source, message, timestamp }`

### Refactor Consumers (6 files)

| File | Change |
|------|--------|
| `WhatsAppButton.tsx` | Use `useWhatsApp({ message, source: variant })`, replace `href` links with `onClick={handleClick}` on buttons/anchors |
| `MobileBottomNav.tsx` | Use `useWhatsApp({ source: 'mobile_nav' })`, replace inline URL construction |
| `StickyInquiryBar.tsx` | Pass `source: 'sticky_inquiry'` through WhatsAppButton (already uses component) — no direct change needed |
| `ContactPage.tsx` | No change needed — uses WhatsAppButton component |
| `SamplesPage.tsx` | No change needed — uses WhatsAppButton component |
| Other pages | No change needed — all go through WhatsAppButton |

Only `WhatsAppButton.tsx` and `MobileBottomNav.tsx` need direct edits since all other files consume the `WhatsAppButton` component.

### Key Detail
All WhatsApp links will use `window.open()` in the click handler to ensure direct navigation to WhatsApp (web or app), bypassing any browser popup-blocker issues with `target="_blank"` anchors.

