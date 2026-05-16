import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { i as SITE_URL, c as companyInfo } from "./Layout-C1jIX7PL.js";
const SOCIAL_IMAGE_BASE = `${SITE_URL}/images/social`;
const socialImages = {
  // Main pages
  home: `${SOCIAL_IMAGE_BASE}/home-og.jpg`,
  products: `${SOCIAL_IMAGE_BASE}/products-og.jpg`,
  about: `${SOCIAL_IMAGE_BASE}/about-og.jpg`,
  contact: `${SOCIAL_IMAGE_BASE}/contact-og.jpg`,
  faq: `${SOCIAL_IMAGE_BASE}/faq-og.jpg`,
  certifications: `${SOCIAL_IMAGE_BASE}/certifications-og.jpg`,
  sustainability: `${SOCIAL_IMAGE_BASE}/sustainability-og.jpg`,
  shipping: `${SOCIAL_IMAGE_BASE}/shipping-og.jpg`,
  privateLabel: `${SOCIAL_IMAGE_BASE}/private-label-og.jpg`,
  samples: `${SOCIAL_IMAGE_BASE}/samples-og.jpg`,
  catalog: `${SOCIAL_IMAGE_BASE}/catalog-og.jpg`,
  storageGuide: `${SOCIAL_IMAGE_BASE}/storage-guide-og.jpg`,
  // Category pages
  driedFruits: `${SOCIAL_IMAGE_BASE}/dried-fruits-og.jpg`,
  // Default fallback
  default: `${SOCIAL_IMAGE_BASE}/default-og.jpg`
};
function getCategorySocialImage(categoryId) {
  const mapping = {
    "dried-fruits": socialImages.driedFruits
  };
  return mapping[categoryId] || socialImages.products;
}
const DEFAULT_OG_IMAGE = socialImages.home;
function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  prerenderStatusCode
}) {
  const fullTitle = title ? `${title} | ${companyInfo.shortName}` : `${companyInfo.name} | Wholesale Dried Fruit Manufacturer & Exporter`;
  const fullDescription = description || "Indonesia's leading B2B dried fruit OEM manufacturer. Premium dehydrated tropical fruits & private label solutions. HACCP & Fair Trade certified. Export to 18+ countries.";
  const fullCanonical = canonical ? canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}` : SITE_URL;
  const keywordsString = keywords.length > 0 ? keywords.join(", ") : "dried fruit wholesale, dehydrated tropical fruits, Indonesian fruit exporter, private label dried fruit, bulk dried tropical fruits, B2B fruit supplier";
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: fullDescription }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywordsString }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: fullCanonical }),
    noIndex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
    prerenderStatusCode && /* @__PURE__ */ jsx("meta", { name: "prerender-status-code", content: String(prerenderStatusCode) }),
    /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "ID-JT" }),
    /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Magelang, Central Java, Indonesia" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: fullCanonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: fullDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: companyInfo.shortName }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:type", content: "image/jpeg" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@DFTIndonesia" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: fullDescription }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage })
  ] });
}
export {
  SEO as S,
  getCategorySocialImage as g,
  socialImages as s
};
