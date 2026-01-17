// Centralized constants - single source of truth
export const SITE_URL = "https://dryfruits.biz";

// Category labels mapping - used across product pages and schemas
export const categoryLabels: Record<string, string> = {
  "dried-fruits": "Dried Fruits",
  "powdered-fruits": "Powdered Dried Fruits",
  "vacuum-fried": "Vacuum Fried Fruits",
  "ginger-turmeric": "Ginger & Turmeric",
} as const;
