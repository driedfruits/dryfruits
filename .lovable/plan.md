## Update Phone & WhatsApp Number to +62 811 8797 070

Update the company phone and WhatsApp number across the project. The number lives in the centralized `companyInfo` data source plus one static public file.

### Changes

**1. `src/data/companyInfo.ts`** (single source of truth — propagates to header, footer, contact page, WhatsApp buttons, schema, etc.)
- `phone: "+62 857 7062 3248"` → `phone: "+62 811 8797 070"`
- `whatsapp: "+6285770623248"` → `whatsapp: "+628118797070"` (digits only with country code, used to build `wa.me/...` URLs)

**2. `public/humans.txt`**
- `Phone/WhatsApp: +62 857 7062 3248` → `Phone/WhatsApp: +62 811 8797 070`

### Notes
- No other files reference the old number — confirmed via repo-wide search.
- All UI components (Header, Footer, ContactPage, WhatsAppButton, MobileBottomNav, useWhatsApp hook) read from `companyInfo`, so they update automatically.
- No database, dependency, or layout changes.
