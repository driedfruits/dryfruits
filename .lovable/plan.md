

## Add Hidden Page & Website Parameters to All Form Submissions

Add `page` (current URL path) and `website` (domain) as hidden fields in the Web3Forms JSON payload for both forms. Invisible to users, included in every submission email.

### Changes

**1. `src/components/forms/ContactForm.tsx`**
- Add `page: window.location.pathname` and `website: window.location.hostname` to the `JSON.stringify` payload (lines 85-97)

**2. `src/components/forms/CatalogForm.tsx`**
- Add `page: window.location.pathname` and `website: window.location.hostname` to the `JSON.stringify` payload (lines 50-57)

No new files, no UI changes, no database changes.

