// Centralized JSON-LD schema generators for SEO
import { companyInfo, socialLinks, type Product } from "@/data/companyData";

const SITE_URL = "https://dryfruits.biz";

// Organization Schema - for company-wide presence
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: companyInfo.established.toString(),
    description: companyInfo.tagline,
    slogan: companyInfo.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.province,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "sales",
      email: companyInfo.email,
      availableLanguage: ["English", "Indonesian"],
      areaServed: ["North America", "Europe", "Asia Pacific", "Middle East"],
    },
    sameAs: [
      socialLinks.linkedin,
      socialLinks.instagram,
      socialLinks.facebook,
      socialLinks.youtube,
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wholesale Dried Fruits Catalog",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Dried Fruits" },
        { "@type": "OfferCatalog", name: "Vacuum Fried Fruits" },
        { "@type": "OfferCatalog", name: "Powdered Fruits" },
        { "@type": "OfferCatalog", name: "Ginger & Turmeric Products" },
      ],
    },
  };
}

// LocalBusiness Schema - for geo-targeting
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodManufacturer",
    "@id": `${SITE_URL}/#localbusiness`,
    name: companyInfo.name,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.province,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.4797,
      longitude: 110.2177,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 0,
        longitude: 0,
      },
      geoRadius: "20000 km",
    },
  };
}

// WebSite Schema - for homepage
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: companyInfo.name,
    description: `${companyInfo.tagline}. Premium dried fruits, vacuum fried snacks, and spices from Indonesia for B2B buyers worldwide.`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

// FAQ Schema - for FAQ page and product FAQs
export function generateFAQSchema(faqs: ReadonlyArray<{ readonly question: string; readonly answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Product Schema - enhanced for B2B
export function generateProductSchema(product: Product) {
  const categoryLabels: Record<string, string> = {
    "dried-fruits": "Dried Fruits",
    "powdered-fruits": "Powdered Dried Fruits",
    "vacuum-fried": "Vacuum Fried Fruits",
    "ginger-turmeric": "Ginger & Turmeric",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.category}/${product.id}`,
    name: `Wholesale ${product.name} - Indonesian Origin`,
    description: product.metaDescription || product.description,
    sku: product.sku,
    gtin: product.hsCode,
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: categoryLabels[product.category],
    countryOfOrigin: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.pricing.fobBase.replace(/[^0-9.]/g, ""),
      availability:
        product.availability?.currentStatus === "in-stock"
          ? "https://schema.org/InStock"
          : product.availability?.currentStatus === "limited"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/PreOrder",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: product.pricing.moq,
        unitCode: "KGM",
      },
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Wholesale Importers, Food Manufacturers, Private Label Brands",
    },
    additionalProperty: [
      product.specifications.moisture && {
        "@type": "PropertyValue",
        name: "Moisture Content",
        value: product.specifications.moisture,
      },
      product.specifications.shelfLife && {
        "@type": "PropertyValue",
        name: "Shelf Life",
        value: product.specifications.shelfLife,
      },
      product.specifications.origin && {
        "@type": "PropertyValue",
        name: "Origin",
        value: product.specifications.origin,
      },
    ].filter(Boolean),
    hasCertification: product.certifications.map((cert) => ({
      "@type": "Certification",
      name: cert,
    })),
    isRelatedTo: product.relatedProducts.map((relatedId) => ({
      "@type": "Product",
      "@id": `${SITE_URL}/products/${product.category}/${relatedId}`,
    })),
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ItemList Schema - for category pages
export function generateItemListSchema(
  products: Product[],
  categoryName: string,
  categoryUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${categoryName} - Wholesale from Indonesia`,
    url: categoryUrl,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/products/${product.category}/${product.id}`,
        name: product.name,
        description: product.tagline,
        url: `${SITE_URL}/products/${product.category}/${product.id}`,
      },
    })),
  };
}
