/**
 * Centralized redirect rules for SEO preservation
 * Used by React Router for client-side redirects
 */

export interface RedirectRule {
  from: string;
  to: string;
}

// Static page redirects
export const redirectRules: RedirectRule[] = [
  // Legacy/home page aliases
  { from: "/home", to: "/" },
  { from: "/index", to: "/" },
  
  // Page aliases
  { from: "/product", to: "/products" },
  { from: "/catalogue", to: "/catalog" },
  { from: "/sample", to: "/samples" },
  { from: "/sample-request", to: "/samples" },
  
  // About variants
  { from: "/about-us", to: "/about" },
  { from: "/aboutus", to: "/about" },
  { from: "/company", to: "/about" },
  { from: "/who-we-are", to: "/about" },
  
  // Contact variants
  { from: "/contact-us", to: "/contact" },
  { from: "/contactus", to: "/contact" },
  { from: "/get-quote", to: "/contact" },
  { from: "/inquiry", to: "/contact" },
  { from: "/enquiry", to: "/contact" },
  
  // FAQ variants
  { from: "/faqs", to: "/faq" },
  { from: "/questions", to: "/faq" },
  { from: "/help", to: "/faq" },
  
  // Certification variants
  { from: "/certificates", to: "/certifications" },
  { from: "/certification", to: "/certifications" },
  { from: "/quality", to: "/certifications" },
  
  // Shipping variants
  { from: "/logistics", to: "/shipping" },
  { from: "/delivery", to: "/shipping" },
  { from: "/export", to: "/shipping" },
  
  // Private label variants
  { from: "/oem", to: "/private-label" },
  { from: "/white-label", to: "/private-label" },
  { from: "/custom-packaging", to: "/private-label" },
  { from: "/privatelabel", to: "/private-label" },
  
  // Sustainability variants
  { from: "/eco", to: "/sustainability" },
  { from: "/green", to: "/sustainability" },
  { from: "/environment", to: "/sustainability" },
  
  // Legacy WordPress URL redirects
  { from: "/category/uncategorized", to: "/" },
  { from: "/category/uncategorized/feed", to: "/" },
  { from: "/hello-world", to: "/" },
  
  // Category misspellings
  { from: "/products/dried-fruit", to: "/products/dried-fruits" },
  { from: "/products/dried", to: "/products/dried-fruits" },
  { from: "/products/powder", to: "/products" },
  { from: "/products/powders", to: "/products" },
  { from: "/products/fruit-powder", to: "/products" },
  { from: "/products/powdered-fruits", to: "/products" },
  { from: "/products/vacuum", to: "/products" },
  { from: "/products/vacuum-fry", to: "/products" },
  { from: "/products/vacuum-fried", to: "/products" },
  { from: "/products/chips", to: "/products" },
  { from: "/products/ginger", to: "/products" },
  { from: "/products/turmeric", to: "/products" },
  { from: "/products/ginger-turmeric", to: "/products" },
  { from: "/products/spices", to: "/products" },
];

// Product ID aliases for misspellings and alternative names
export const productAliases: Record<string, string> = {
  // Dried fruits aliases
  "banana": "dried-banana",
  "banana-chips": "dried-banana",
  "papaya-dried": "dried-papaya",
  "pineapple-dried": "dried-pineapple",
  "pineapple": "dried-pineapple",
  "mango-dried": "dried-mango",
  "mango": "dried-mango",
  "dragonfruit": "dried-dragon-fruit",
  "dragon": "dried-dragon-fruit",
  "pitaya": "dried-dragon-fruit",
  "jackfruit-dried": "dried-jackfruit",
  "jackfruit": "dried-jackfruit",
  "coconut-dried": "dried-coconut",
  "coconut": "dried-coconut",
  "salak": "dried-snake-fruit",
  "snake": "dried-snake-fruit",
  "snakefruit": "dried-snake-fruit",
  "breadfruit-dried": "dried-breadfruit",
  "breadfruit": "dried-breadfruit",
  "avocado-dried": "dried-avocado",
  "avocado": "dried-avocado",
  
};

/**
 * Find redirect destination for a given product ID
 */
export function getProductRedirect(productId: string): string | null {
  return productAliases[productId.toLowerCase()] || null;
}
