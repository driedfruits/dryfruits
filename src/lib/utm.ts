const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const UTM_STORAGE_KEY = "utm_params";

type UtmData = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/** Capture UTM params from URL on first visit, persist to sessionStorage */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utm: UtmData = {};
  let hasUtm = false;

  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasUtm = true;
    }
  }

  if (hasUtm) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
      /* sessionStorage unavailable (private mode / SSG) */
    }
  }
}

/** Return stored UTM params (or empty object) for form payloads */
export function getUtmParams(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
