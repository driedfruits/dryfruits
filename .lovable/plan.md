## Goal

Fire a single GA4 `qualify_lead` event for four lead actions (WhatsApp / email / phone link clicks + successful contact form submit), without touching layout, copy, styling, or behavior.

## Approach

Add one small util module and wire it in two places: a global delegated click listener (mounted once at app start) and the contact form's existing success path.

## Files to add

**`src/lib/trackLeadEvents.ts`** — new module, exports:

- `fireQualifyLead(channel, link_url)` — internal helper. Guards `typeof window.gtag === "function"`; otherwise no-op. Sends:
  ```
  { lead_channel, link_url, page_path: window.location.pathname }
  ```
  If `window.gtag` has never been seen during the session, log a one-time `// TODO: GA4 not detected` console.info (dev only) — no hardcoded Measurement ID.
- `initLeadTracking()` — attaches ONE delegated `click` listener to `document` (capture phase off, passive). Logic:
  - `const a = (e.target as Element).closest("a[href]")`; bail if none.
  - Read `href` (use `a.getAttribute("href")` for `tel:`/`mailto:` to avoid URL normalization, and `a.href` for absolute matches).
  - Branch:
    - starts with `tel:` → `"phone"`
    - starts with `mailto:` → `"email"`
    - matches `/wa\.me|api\.whatsapp\.com|whatsapp\.com\/send/` → `"whatsapp"`
    - else: ignore.
  - Call `fireQualifyLead(channel, href)`. Do NOT `preventDefault`.
  - Idempotency: module-level `initialized` flag so StrictMode double-invoke / repeated mounts don't double-attach. Returns a no-op cleanup that does NOT remove the listener (keeps it global for the app lifetime; safe because flag prevents duplicates).
- `trackFormLead()` — thin wrapper: `fireQualifyLead("form", "contact_form")`.

**De-duping clicks**: since `WhatsAppButton` uses a programmatic `window.open` (not a real `<a href>`), the delegated listener will NOT catch it — good, no double-fire risk there. We add an explicit `fireQualifyLead("whatsapp", whatsappUrl)` call inside `useWhatsApp.handleClick` (the single source for all WhatsApp buttons). For real `<a href="https://wa.me/...">` anchors (e.g. in Footer), the delegated listener handles them. No element is both — no double counting.

## Files to edit

1. **`src/main.tsx`** — inside the existing `isClient` block, call `initLeadTracking()` once alongside `captureUtmParams()`.

2. **`src/hooks/useWhatsApp.ts`** — in `handleClick`, add one line: `fireQualifyLead("whatsapp", whatsappUrl)` before `window.open`. (Existing `trackGA4Event("whatsapp_click", …)` stays — separate event, untouched.)

3. **`src/components/forms/ContactForm.tsx`** — in `handleSubmit`, inside the existing `if (result.success)` branch (after validation passes and Web3Forms confirms success), call `trackFormLead()`. No other changes.

## Non-goals / explicit no-ops

- No new GA4 install, no Measurement ID, no script tag changes.
- No changes to `ContactForm` validation, UI, copy, or submit behavior beyond the one tracking call on success.
- No changes to existing `trackGA4Event` helper or other analytics events.
- `CatalogForm` and other forms are NOT contact forms — not in scope per spec ("the contact form").
- Phone/email/WhatsApp anchors elsewhere (Header, Footer, ContactPage, MobileBottomNav, product pages) need no per-component edits — the delegated listener covers them all, including dynamically added links.

## Verification

- Click a `tel:` link in ContactPage → one `qualify_lead` with `lead_channel:"phone"`.
- Click a `mailto:` link → `"email"`.
- Click the floating WhatsApp button (programmatic) → one event via `useWhatsApp`.
- Click a Footer WhatsApp `<a href="https://wa.me/...">` → one event via delegated listener.
- Submit the contact form with invalid fields → no event. Submit with valid fields and Web3Forms success → one `"form"` event.
- Open DevTools with `window.gtag` undefined → no errors, single dev-only info log.
