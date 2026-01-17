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
  
  // Category misspellings
  { from: "/products/dried-fruit", to: "/products/dried-fruits" },
  { from: "/products/dried", to: "/products/dried-fruits" },
  { from: "/products/powder", to: "/products/powdered-fruits" },
  { from: "/products/powders", to: "/products/powdered-fruits" },
  { from: "/products/fruit-powder", to: "/products/powdered-fruits" },
  { from: "/products/vacuum", to: "/products/vacuum-fried" },
  { from: "/products/vacuum-fry", to: "/products/vacuum-fried" },
  { from: "/products/chips", to: "/products/vacuum-fried" },
  { from: "/products/ginger", to: "/products/ginger-turmeric" },
  { from: "/products/turmeric", to: "/products/ginger-turmeric" },
  { from: "/products/spices", to: "/products/ginger-turmeric" },
];

// Product ID aliases for misspellings and alternative names
export const productAliases: Record<string, string> = {
  // Dried fruits aliases
  "banana": "vacuum-banana",
  "banana-chips": "vacuum-banana",
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
  
  // Ginger & turmeric aliases
  "ginger-dried": "dried-ginger",
  "ginger": "dried-ginger",
  "turmeric-dried": "dried-turmeric",
  "turmeric": "dried-turmeric",
  "kunyit": "dried-turmeric",
  "jahe": "dried-ginger",
  
  // Powder aliases - only for alternative names, not actual product IDs
  "dragon-powder": "dragon-fruit-powder",
  "dragonfruit-powder": "dragon-fruit-powder",
  "pitaya-powder": "dragon-fruit-powder",
  "ginger-root-powder": "ginger-powder",
  "turmeric-root-powder": "turmeric-powder",
  
  // Vacuum fried aliases
  "banana-vacuum": "vacuum-banana",
  "jackfruit-vacuum": "vacuum-jackfruit",
  "pineapple-vacuum": "vacuum-pineapple",
};

/**
 * Find redirect destination for a given product ID
 */
export function getProductRedirect(productId: string): string | null {
  return productAliases[productId.toLowerCase()] || null;
}
