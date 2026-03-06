// Centralized data exports - re-exports from modular files for backwards compatibility

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

// Product type and helpers (now pure functions that take products array as arg)
export type { Product } from "./products";
export {
  getProductById,
  getProductsByCategory,
  getRelatedProducts,
  getProductCategories,
} from "./products";
