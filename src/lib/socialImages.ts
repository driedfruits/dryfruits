// Centralized social images for OG and Twitter cards
// All images should be 1200x630 JPG format

import { SITE_URL } from "./constants";

// Base path for social images (hosted in public folder)
const SOCIAL_IMAGE_BASE = `${SITE_URL}/images/social`;

export const socialImages = {
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
  powderedFruits: `${SOCIAL_IMAGE_BASE}/powdered-fruits-og.jpg`,
  vacuumFried: `${SOCIAL_IMAGE_BASE}/vacuum-fried-og.jpg`,
  gingerTurmeric: `${SOCIAL_IMAGE_BASE}/ginger-turmeric-og.jpg`,
  
  // Default fallback
  default: `${SOCIAL_IMAGE_BASE}/default-og.jpg`,
} as const;

// Helper to get category image
export function getCategorySocialImage(categoryId: string): string {
  const mapping: Record<string, string> = {
    "dried-fruits": socialImages.driedFruits,
    "powdered-fruits": socialImages.powderedFruits,
    "vacuum-fried": socialImages.vacuumFried,
    "ginger-turmeric": socialImages.gingerTurmeric,
  };
  return mapping[categoryId] || socialImages.products;
}
