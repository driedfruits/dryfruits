// Centralized company data - single source of truth
// Update this file to change company information across the entire site

export const companyInfo = {
  name: "PT Dried Fruits Total Indonesia",
  shortName: "DFT Indonesia",
  tagline: "Indonesia's Only Export-Oriented Dried Fruit Manufacturer",
  established: 2015,
  
  // Contact
  phone: "+62 857 2528 5059",
  whatsapp: "+6285725285059",
  email: "export@dryfruits.biz",
  
  // Address
  address: {
    street: "Jl. Mayor Unus KM 1.5",
    city: "Magelang",
    province: "Central Java",
    country: "Indonesia",
    postalCode: "56172",
    full: "Jl. Mayor Unus KM 1.5, Magelang, Central Java, Indonesia 56172",
  },
  
  // Working Hours
  workingHours: {
    days: "Monday - Friday",
    hours: "8:00 AM - 5:00 PM",
    timezone: "WIB (Western Indonesia Time)",
    full: "Monday - Friday, 8:00 AM - 5:00 PM (WIB)",
  },
  
  // Capacity & Stats
  stats: {
    productionCapacity: "100+ tons/month",
    yearsExperience: new Date().getFullYear() - 2015,
    exportCountries: 18,
    productVarieties: 17,
  },
  
  // Owners
  owners: [
    { name: "Budi Santoso", role: "Co-Founder & CEO" },
    { name: "Dewi Kusuma", role: "Co-Founder & COO" },
  ],
  
  // Payment Terms
  paymentTerms: {
    deposit: "50%",
    balance: "50% before shipping",
    methods: ["T/T (Bank Transfer)", "L/C (Letter of Credit)"],
    leadTime: "2-3 weeks",
    moq: "500 kg - 1 ton",
  },
} as const;

export const socialLinks = {
  linkedin: "https://linkedin.com/company/dft-indonesia",
  instagram: "https://instagram.com/dftindonesia",
  facebook: "https://facebook.com/dftindonesia",
  youtube: "https://youtube.com/@dftindonesia",
} as const;

export const certifications = [
  {
    id: "usda-organic",
    name: "USDA Organic",
    description: "United States Department of Agriculture Organic Certification",
    icon: "leaf",
  },
  {
    id: "eu-organic",
    name: "EU Organic",
    description: "European Union Organic Certification",
    icon: "leaf",
  },
  {
    id: "haccp",
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points",
    icon: "shield",
  },
  {
    id: "halal",
    name: "Halal",
    description: "Halal Certification",
    icon: "check",
  },
] as const;

export const teamMembers = [
  { id: 1, name: "Budi Santoso", role: "CEO & Co-Founder", email: "budi@dryfruits.biz" },
  { id: 2, name: "Dewi Kusuma", role: "COO & Co-Founder", email: "dewi@dryfruits.biz" },
  { id: 3, name: "Ahmad Prasetyo", role: "Export Manager", email: "ahmad@dryfruits.biz" },
  { id: 4, name: "Siti Rahayu", role: "Quality Control Manager", email: "siti@dryfruits.biz" },
  { id: 5, name: "Rizki Hidayat", role: "Production Manager", email: "rizki@dryfruits.biz" },
  { id: 6, name: "Maya Indah", role: "Marketing Manager", email: "maya@dryfruits.biz" },
  { id: 7, name: "Eko Wijaya", role: "Logistics Coordinator", email: "eko@dryfruits.biz" },
  { id: 8, name: "Linda Permata", role: "Finance Manager", email: "linda@dryfruits.biz" },
  { id: 9, name: "Fajar Rahman", role: "R&D Specialist", email: "fajar@dryfruits.biz" },
] as const;

export const exportCountries = [
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Europe", countries: ["Germany", "Netherlands", "UK", "France", "Italy", "Spain"] },
  { region: "Asia Pacific", countries: ["Japan", "South Korea", "Australia", "New Zealand", "Singapore"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar"] },
  { region: "Others", countries: ["South Africa", "Brazil"] },
] as const;

export interface Product {
  id: string;
  name: string;
  category: "dried-fruits" | "vacuum-fried" | "ginger-turmeric";
  tagline: string;
  description: string;
  specifications: {
    size?: string;
    moisture?: string;
    color?: string;
    shelfLife?: string;
    origin?: string;
  };
  applications: string[];
  packaging: {
    bulk: string;
    retail: string;
    custom: boolean;
  };
  pricing: {
    fobBase: string;
    moq: string;
    leadTime: string;
  };
  certifications: string[];
  isOrganic: boolean;
  relatedProducts: string[];
}

export const products: Product[] = [
  // Dried Fruits
  {
    id: "dried-papaya",
    name: "Dried Papaya",
    category: "dried-fruits",
    tagline: "Tropical sweetness in every bite",
    description: "Premium dried papaya slices made from sun-ripened Indonesian papayas. Natural sweetness with no added sugar options available.",
    specifications: {
      size: "Slices, Chunks, Dices",
      moisture: "12-15%",
      color: "Golden Orange",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Breakfast cereals", "Trail mix", "Baked goods", "Smoothie bowls", "Snacking"],
    packaging: { bulk: "10-25 kg cartons", retail: "50g-500g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-pineapple", "dried-mango", "dried-dragon-fruit"],
  },
  {
    id: "dried-pineapple",
    name: "Dried Pineapple",
    category: "dried-fruits",
    tagline: "Sweet and tangy tropical delight",
    description: "Naturally dried pineapple rings and chunks from premium Cayenne pineapples. Perfect balance of sweet and tangy.",
    specifications: {
      size: "Rings, Chunks, Tidbits",
      moisture: "12-15%",
      color: "Golden Yellow",
      shelfLife: "12 months",
      origin: "Lampung, Indonesia",
    },
    applications: ["Fruit salads", "Dessert toppings", "Baking", "Cocktails", "Snacking"],
    packaging: { bulk: "10-25 kg cartons", retail: "50g-500g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "vacuum-pineapple"],
  },
  {
    id: "dried-avocado",
    name: "Dried Avocado",
    category: "dried-fruits",
    tagline: "Rare superfood innovation",
    description: "Unique dried avocado slices - a rare product offering. Rich, creamy flavor preserved through our special drying process.",
    specifications: {
      size: "Slices, Pieces",
      moisture: "8-10%",
      color: "Light Green to Cream",
      shelfLife: "9 months",
      origin: "West Java, Indonesia",
    },
    applications: ["Health snacks", "Smoothie ingredients", "Gourmet cooking", "Salad toppings"],
    packaging: { bulk: "5-15 kg cartons", retail: "30g-200g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "300 kg", leadTime: "3-4 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "dried-jackfruit", "dried-mango"],
  },
  {
    id: "dried-mango",
    name: "Dried Mango",
    category: "dried-fruits",
    tagline: "King of tropical dried fruits",
    description: "Premium dried mango slices from hand-selected Gedong and Harum Manis mangoes. Intense tropical flavor.",
    specifications: {
      size: "Slices, Strips, Dices",
      moisture: "12-16%",
      color: "Deep Orange to Yellow",
      shelfLife: "12 months",
      origin: "East Java, Indonesia",
    },
    applications: ["Snacking", "Trail mix", "Smoothies", "Baking", "Ice cream toppings"],
    packaging: { bulk: "10-25 kg cartons", retail: "50g-500g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "vacuum-mango"],
  },
  {
    id: "dried-dragon-fruit",
    name: "Dried Dragon Fruit",
    category: "dried-fruits",
    tagline: "Exotic superfood from the tropics",
    description: "Vibrant dried dragon fruit (pitaya) slices. Stunning visual appeal with subtle sweetness.",
    specifications: {
      size: "Slices, Chips",
      moisture: "10-14%",
      color: "Deep Magenta (Red) / White",
      shelfLife: "12 months",
      origin: "Banyuwangi, Indonesia",
    },
    applications: ["Smoothie bowls", "Decorative garnish", "Health snacks", "Breakfast cereals"],
    packaging: { bulk: "5-15 kg cartons", retail: "30g-250g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "300 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-snake-fruit"],
  },
  {
    id: "dried-snake-fruit",
    name: "Dried Snake Fruit (Salak)",
    category: "dried-fruits",
    tagline: "Indonesia's exotic treasure",
    description: "Rare dried salak (snake fruit) - a uniquely Indonesian delicacy with sweet-tangy flavor profile.",
    specifications: {
      size: "Whole, Halves, Pieces",
      moisture: "10-14%",
      color: "Brown to Tan",
      shelfLife: "12 months",
      origin: "Sleman, Yogyakarta, Indonesia",
    },
    applications: ["Exotic snacking", "Gourmet products", "Gift packs", "Specialty mixes"],
    packaging: { bulk: "5-15 kg cartons", retail: "30g-200g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "200 kg", leadTime: "3-4 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "dried-breadfruit", "dried-dragon-fruit"],
  },
  {
    id: "dried-breadfruit",
    name: "Dried Breadfruit",
    category: "dried-fruits",
    tagline: "Sustainable superfood alternative",
    description: "Dried breadfruit chips and slices - high in fiber, gluten-free, and sustainable.",
    specifications: {
      size: "Chips, Slices",
      moisture: "8-12%",
      color: "Cream to Light Brown",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Gluten-free snacks", "Flour alternative", "Chips", "Baking"],
    packaging: { bulk: "10-25 kg cartons", retail: "50g-300g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "dried-coconut", "dried-snake-fruit"],
  },
  {
    id: "dried-jackfruit",
    name: "Dried Jackfruit",
    category: "dried-fruits",
    tagline: "Nature's candy from the tropics",
    description: "Sweet, chewy dried jackfruit pieces. Intense tropical aroma and naturally sweet taste.",
    specifications: {
      size: "Pieces, Chips",
      moisture: "12-16%",
      color: "Golden Yellow",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Snacking", "Vegan meat alternative", "Baking", "Trail mix"],
    packaging: { bulk: "10-20 kg cartons", retail: "50g-400g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-breadfruit"],
  },
  {
    id: "dried-coconut",
    name: "Dried Coconut",
    category: "dried-fruits",
    tagline: "Versatile tropical staple",
    description: "Premium desiccated coconut and coconut chips. Available in various grades for different applications.",
    specifications: {
      size: "Fine, Medium, Chips, Flakes",
      moisture: "3-6%",
      color: "Pure White",
      shelfLife: "18 months",
      origin: "Sulawesi, Indonesia",
    },
    applications: ["Baking", "Confectionery", "Cooking", "Snacking", "Beverages"],
    packaging: { bulk: "25 kg bags", retail: "100g-1kg pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "1 ton", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-avocado", "dried-breadfruit", "dried-jackfruit"],
  },
  // Vacuum Fried Fruits
  {
    id: "vacuum-papaya",
    name: "Vacuum Fried Papaya",
    category: "vacuum-fried",
    tagline: "Crispy tropical innovation",
    description: "Crunchy vacuum fried papaya chips. Low-fat, crispy texture with intense papaya flavor.",
    specifications: {
      size: "Chips",
      moisture: "2-4%",
      color: "Orange",
      shelfLife: "9 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Premium snacking", "Gift packs", "Retail products", "Hotel minibars"],
    packaging: { bulk: "5-10 kg cartons", retail: "30g-150g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "300 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["vacuum-banana", "vacuum-pineapple", "vacuum-mango"],
  },
  {
    id: "vacuum-banana",
    name: "Vacuum Fried Banana",
    category: "vacuum-fried",
    tagline: "Classic favorite, premium quality",
    description: "Crispy banana chips made with vacuum frying technology. Superior taste and texture.",
    specifications: {
      size: "Chips, Coins",
      moisture: "2-4%",
      color: "Golden Yellow",
      shelfLife: "9 months",
      origin: "Lampung, Indonesia",
    },
    applications: ["Snacking", "Ice cream toppings", "Breakfast cereals", "Chocolate coating"],
    packaging: { bulk: "10-20 kg cartons", retail: "50g-200g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "500 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-pineapple", "vacuum-mango"],
  },
  {
    id: "vacuum-pineapple",
    name: "Vacuum Fried Pineapple",
    category: "vacuum-fried",
    tagline: "Tangy crunch sensation",
    description: "Crispy pineapple chips with intense sweet-tangy flavor. Perfect balance of taste and texture.",
    specifications: {
      size: "Chips, Rings",
      moisture: "2-4%",
      color: "Golden Yellow",
      shelfLife: "9 months",
      origin: "Lampung, Indonesia",
    },
    applications: ["Premium snacking", "Cocktail garnish", "Dessert toppings", "Trail mix"],
    packaging: { bulk: "5-10 kg cartons", retail: "30g-150g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "300 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-banana", "vacuum-mango"],
  },
  {
    id: "vacuum-mango",
    name: "Vacuum Fried Mango",
    category: "vacuum-fried",
    tagline: "Intense mango crunch",
    description: "Premium vacuum fried mango chips. Concentrated mango flavor with satisfying crunch.",
    specifications: {
      size: "Chips, Slices",
      moisture: "2-4%",
      color: "Deep Orange",
      shelfLife: "9 months",
      origin: "East Java, Indonesia",
    },
    applications: ["Gourmet snacking", "Gift packs", "Retail products", "Trail mix"],
    packaging: { bulk: "5-10 kg cartons", retail: "30g-150g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "300 kg", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-banana", "vacuum-pineapple"],
  },
  // Ginger & Turmeric
  {
    id: "dried-ginger",
    name: "Dried Ginger",
    category: "ginger-turmeric",
    tagline: "Premium Indonesian ginger",
    description: "High-quality dried ginger slices and cuts. Strong, aromatic flavor from Java's finest ginger.",
    specifications: {
      size: "Slices, Cuts, Whole",
      moisture: "10-12%",
      color: "Light Yellow to Brown",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Tea blends", "Cooking", "Beverages", "Herbal products", "Confectionery"],
    packaging: { bulk: "25 kg bags", retail: "100g-500g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "1 ton", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["ginger-powder", "dried-turmeric", "turmeric-powder"],
  },
  {
    id: "ginger-powder",
    name: "Ginger Powder",
    category: "ginger-turmeric",
    tagline: "Concentrated ginger flavor",
    description: "Fine ginger powder made from premium dried ginger. Intense flavor for culinary and health applications.",
    specifications: {
      size: "80-120 mesh",
      moisture: "8-10%",
      color: "Light Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Baking", "Beverages", "Supplements", "Spice blends", "Health products"],
    packaging: { bulk: "25 kg bags", retail: "50g-500g jars/pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "1 ton", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-ginger", "turmeric-powder", "dried-turmeric"],
  },
  {
    id: "dried-turmeric",
    name: "Dried Turmeric",
    category: "ginger-turmeric",
    tagline: "Golden superfood from Indonesia",
    description: "Premium dried turmeric fingers and cuts. High curcumin content from Java's best turmeric.",
    specifications: {
      size: "Fingers, Cuts, Slices",
      moisture: "10-12%",
      color: "Deep Orange-Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Curry blends", "Health supplements", "Tea", "Natural coloring", "Beverages"],
    packaging: { bulk: "25 kg bags", retail: "100g-500g pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "1 ton", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["turmeric-powder", "dried-ginger", "ginger-powder"],
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "ginger-turmeric",
    tagline: "High-curcumin golden powder",
    description: "Fine turmeric powder with high curcumin content. Vibrant color and potent health benefits.",
    specifications: {
      size: "80-120 mesh",
      moisture: "8-10%",
      color: "Bright Orange-Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
    },
    applications: ["Curry powder", "Golden milk", "Supplements", "Natural coloring", "Health products"],
    packaging: { bulk: "25 kg bags", retail: "50g-500g jars/pouches", custom: true },
    pricing: { fobBase: "Contact for pricing", moq: "1 ton", leadTime: "2-3 weeks" },
    certifications: ["USDA Organic", "EU Organic"],
    isOrganic: true,
    relatedProducts: ["dried-turmeric", "ginger-powder", "dried-ginger"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

export const productCategories = [
  {
    id: "dried-fruits",
    name: "Dried Fruits",
    description: "Premium sun-dried tropical fruits from Indonesia",
    productCount: products.filter(p => p.category === "dried-fruits").length,
  },
  {
    id: "vacuum-fried",
    name: "Vacuum Fried Fruits",
    description: "Crispy, low-fat fruit chips using vacuum frying technology",
    productCount: products.filter(p => p.category === "vacuum-fried").length,
  },
  {
    id: "ginger-turmeric",
    name: "Ginger & Turmeric",
    description: "Premium dried spices and powders from Java",
    productCount: products.filter(p => p.category === "ginger-turmeric").length,
  },
] as const;

export const faqItems = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our standard MOQ is 500 kg to 1 ton depending on the product. For new customers, we can discuss smaller trial orders to establish the business relationship.",
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with 50% deposit upon order confirmation and 50% balance before shipment. We also accept Letter of Credit (L/C) for larger orders.",
  },
  {
    question: "How long is the lead time?",
    answer: "Standard lead time is 2-3 weeks from order confirmation and deposit receipt. For larger orders or custom specifications, it may take 3-4 weeks.",
  },
  {
    question: "Do you offer organic certification?",
    answer: "Yes, most of our products are USDA Organic and EU Organic certified. We can provide all necessary certification documents for import purposes.",
  },
  {
    question: "Can you do private label/OEM packaging?",
    answer: "Absolutely! We offer full private label and OEM services. You can provide your own packaging design or work with our team to create custom packaging.",
  },
  {
    question: "What countries do you export to?",
    answer: "We export to over 18 countries including USA, Canada, Germany, Netherlands, UK, Japan, South Korea, Australia, UAE, and more.",
  },
  {
    question: "Can I request samples before ordering?",
    answer: "Yes, we encourage all potential buyers to request samples. Sample shipping costs are borne by the buyer, but sample costs may be waived for serious inquiries.",
  },
  {
    question: "What quality documents do you provide?",
    answer: "We provide Certificate of Analysis (COA), phytosanitary certificates, organic certificates, bill of lading, packing list, commercial invoice, and any other documents required for import.",
  },
] as const;

export const targetSegments = [
  {
    name: "Food Manufacturers",
    description: "Ingredients for cereals, granola, snack bars, and baked goods",
    icon: "factory",
  },
  {
    name: "Beverage Companies",
    description: "Natural ingredients for smoothies, juices, and health drinks",
    icon: "glass-water",
  },
  {
    name: "Retail & Supermarkets",
    description: "Private label and branded dried fruit products",
    icon: "store",
  },
  {
    name: "Trading Companies",
    description: "Bulk supply for redistribution and wholesale",
    icon: "globe",
  },
] as const;
