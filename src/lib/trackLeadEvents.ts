/**
 * GA4 `qualify_lead` event tracking.
 *
 * Fires a single event for all lead actions (WhatsApp / email / phone link
 * clicks + successful contact form submit), distinguished by `lead_channel`.
 *
 * Guards on `window.gtag`; no Measurement ID is hardcoded. If gtag is not
 * present, calls are silent no-ops (with a one-time dev-only console hint).
 */

export type LeadChannel = "whatsapp" | "email" | "phone" | "form";

let warnedMissingGtag = false;
let initialized = false;

// Module-level de-dupe: ignore identical (channel+url) fires within ~300ms.
// Defends against rare overlap (e.g. onClick + delegated listener on same node).
let lastKey = "";
let lastAt = 0;

function fireQualifyLead(channel: LeadChannel, link_url: string) {
  const now = Date.now();
  const key = `${channel}|${link_url}`;
  if (key === lastKey && now - lastAt < 300) return;
  lastKey = key;
  lastAt = now;

  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    if (!warnedMissingGtag && import.meta.env.DEV) {
      warnedMissingGtag = true;
      // TODO: GA4 not detected — install gtag.js to receive qualify_lead events.
      console.info("[trackLeadEvents] GA4 (window.gtag) not detected; events suppressed.");
    }
    return;
  }

  window.gtag("event", "qualify_lead", {
    lead_channel: channel,
    link_url,
    page_path: window.location.pathname,
  });
}

/** Explicit fire for the contact form's success path. */
export function trackFormLead() {
  fireQualifyLead("form", "contact_form");
}

/** Explicit fire for programmatic WhatsApp opens (no real <a href>). */
export function trackWhatsAppLead(url: string) {
  fireQualifyLead("whatsapp", url);
}

/**
 * Attach a single delegated click listener that catches tel:/mailto:/WhatsApp
 * anchors anywhere in the document, including dynamically added ones.
 * Idempotent — safe under React StrictMode double-invoke.
 */
export function initLeadTracking() {
  if (initialized || typeof document === "undefined") return;
  initialized = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;
      const a = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!a) return;

      // Use raw attribute for scheme-based matches; absolute for whatsapp domains.
      const rawHref = a.getAttribute("href") || "";
      const absHref = a.href || rawHref;

      let channel: LeadChannel | null = null;
      let url = absHref;

      if (rawHref.startsWith("tel:")) {
        channel = "phone";
        url = rawHref;
      } else if (rawHref.startsWith("mailto:")) {
        channel = "email";
        url = rawHref;
      } else if (/wa\.me|api\.whatsapp\.com|whatsapp\.com\/send/.test(absHref)) {
        channel = "whatsapp";
      }

      if (!channel) return;
      // Do not preventDefault — let navigation proceed normally.
      fireQualifyLead(channel, url);
    },
    { passive: true },
  );
}