import { Helmet } from "react-helmet-async";
import { companyInfo } from "@/data/companyData";
import { SITE_URL } from "@/lib/constants";
import { socialImages } from "@/lib/socialImages";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: "website" | "product" | "article";
  ogImage?: string;
  noIndex?: boolean;
}

// Default to home social image
const DEFAULT_OG_IMAGE = socialImages.home;

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${companyInfo.shortName}`
    : `${companyInfo.name} | Wholesale Dried Fruit Manufacturer & Exporter`;

  const fullDescription =
    description ||
    "Indonesia's leading B2B dried fruit manufacturer. Premium vacuum-fried banana chips, dried tropical fruits & private label solutions. HACCP & Halal certified. Export to 18+ countries.";

  const fullCanonical = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;

  const keywordsString = keywords.length > 0
    ? keywords.join(", ")
    : "dried fruit wholesale, vacuum fried banana chips, Indonesian fruit exporter, private label dried fruit, bulk dried tropical fruits, B2B fruit supplier";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={fullCanonical} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Geo Tags */}
      <meta name="geo.region" content="ID-JT" />
      <meta name="geo.placename" content="Magelang, Central Java, Indonesia" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:site_name" content={companyInfo.shortName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DFTIndonesia" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
