// Centralized data exports - re-exports from modular files for backwards compatibility
// This ensures existing imports continue to work while code is organized into smaller modules

// Company information and related data
export {
  companyInfo,
  socialLinks,
  certifications,
  teamMembers,
  exportCountries,
  targetSegments,
} from "./companyInfo";

// Storage guidelines and FAQs
export { storageGuidelines, storageFAQs } from "./storageData";

// General FAQ data
export { faqItems } from "./faqData";

// Shipping data
export { shippingProcess, exportDocs } from "./shippingData";

// Product type, data, and helpers
export type { Product } from "./products";
export {
  products,
  getProductById,
  getProductsByCategory,
  getRelatedProducts,
  productCategories,
} from "./products";
