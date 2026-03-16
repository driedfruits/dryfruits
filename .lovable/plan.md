

## Update Contact Phone & WhatsApp Number

All phone and WhatsApp references are centralized in `src/data/companyInfo.ts`. Single file change:

**`src/data/companyInfo.ts`** — Update two fields:
- `phone`: `"+62 857 2528 5059"` → `"+62 857 7062 3248"`
- `whatsapp`: `"+6285725285059"` → `"+6285770623248"`

This automatically propagates to the header, footer, contact page, WhatsApp buttons, and all other components since they all import from `companyInfo`.

No `thankyou.php` references exist in the codebase — nothing to update there.

