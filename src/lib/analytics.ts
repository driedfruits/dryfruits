/* Centralized analytics helpers for GA4 and Facebook Pixel */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a GA4 custom event via gtag().
 * Safe to call even if gtag hasn't loaded yet.
 */
export function trackGA4Event(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Fire a Facebook Pixel event via fbq().
 * Safe to call even if the Pixel script hasn't loaded yet.
 * To enable: add your Pixel base script to index.html.
 */
export function trackFBPixelEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}
