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
    productVarieties: 23,
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
  
  // Logistics defaults
  defaultLogistics: {
    portOfLoading: "Tanjung Priok (Jakarta) / Tanjung Perak (Surabaya)",
    incoterms: ["FOB", "CIF", "CNF", "Ex-Works"],
    containerLoad20ft: "~8-10 MT",
    containerLoad40ft: "~18-22 MT",
  },
  
  // Standard export documents
  standardExportDocuments: [
    "Bill of Lading (B/L)",
    "Commercial Invoice & Packing List",
    "Certificate of Origin (COO)",
    "Phytosanitary Certificate (Barantan)",
    "Certificate of Analysis (COA)",
    "Halal Certificate (MUI/BPJPH)",
  ],
  
  // Default compliance
  defaultCompliance: {
    usa: "FDA Registered, FSVP Compliant",
    eu: "EFSA compliant, meets EU Ochratoxin A & Sulfite limits",
    global: "HACCP / ISO 22000 Manufacturing",
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

// ============================================
// PRODUCT INTERFACE - Enhanced for B2B/GEO/SEO
// ============================================
export interface Product {
  // Identity
  id: string;
  name: string;
  category: "dried-fruits" | "powdered-fruits" | "vacuum-fried" | "ginger-turmeric";
  sku?: string;
  hsCode?: string;
  
  // Content & SEO
  tagline: string;
  description: string;
  flavorProfile?: string;
  texture?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Specifications (enhanced)
  specifications: {
    size?: string;
    moisture?: string;
    color?: string;
    shelfLife?: string;
    origin?: string;
    brixLevel?: string;
    meshSize?: string;
    oilContent?: string;
    curcuminContent?: string;
    additives?: string;
    foreignMatter?: string;
    processingMethod?: string;
    grade?: string;
  };
  
  // Seasonal availability
  availability?: {
    peakSeason?: string;
    offPeakSeason?: string;
    currentStatus?: "in-stock" | "limited" | "pre-order";
  };
  
  // Applications
  applications: string[];
  
  // Packaging
  packaging: {
    bulk: string;
    retail: string;
    custom: boolean;
  };
  
  // Pricing (enhanced)
  pricing: {
    fobBase: string;
    moq: string;
    leadTime: string;
    priceTiers?: Array<{
      volume: string;
      priceRange: string;
    }>;
    samplePolicy?: string;
  };
  
  // Logistics (optional - uses company defaults if not set)
  logistics?: {
    portOfLoading?: string;
    incoterms?: string[];
    containerLoad20ft?: string;
    containerLoad40ft?: string;
  };
  
  // Export documents (optional - uses company defaults if not set)
  exportDocuments?: string[];
  
  // Compliance (optional - uses company defaults if not set)
  compliance?: {
    usa?: string;
    eu?: string;
    global?: string;
  };
  
  // Product FAQs
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  
  // Certifications & organic status
  certifications: string[];
  isOrganic: boolean;
  
  // Related products
  relatedProducts: string[];
}

// ============================================
// PRODUCTS DATA - Single source of truth
// ============================================
export const products: Product[] = [
  // ==================
  // DRIED FRUITS
  // ==================
  {
    id: "dried-papaya",
    name: "Dried Papaya",
    category: "dried-fruits",
    sku: "DFT-DP-001",
    hsCode: "0813.40.10",
    tagline: "Tropical sweetness in every bite",
    description: "Premium dried papaya slices made from sun-ripened Indonesian papayas. Natural sweetness with no added sugar options available.",
    flavorProfile: "Naturally sweet with mild tropical notes and a subtle honey-like aftertaste",
    texture: "Soft and chewy, tender bite",
    metaTitle: "Wholesale Dried Papaya (Slices) - Bulk Export from Indonesia",
    metaDescription: "Direct manufacturer of premium dried papaya from Indonesia. USDA/EU Organic certified. Bulk 10-25kg cartons. MOQ 500kg. View specs & pricing.",
    keywords: ["bulk dried papaya", "wholesale dried papaya Indonesia", "dried papaya supplier"],
    specifications: {
      size: "Slices, Chunks, Dices",
      moisture: "12-15%",
      color: "Golden Orange",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
      brixLevel: ">12° (Naturally sweet)",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round (Indonesia)",
      currentStatus: "in-stock",
    },
    applications: ["Breakfast cereals", "Trail mix", "Baked goods", "Smoothie bowls", "Snacking", "Confectionery"],
    packaging: { bulk: "10-25 kg cartons with PE liner", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
    pricing: {
      fobBase: "From $7.50/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$8.50 - $9.50/kg" },
        { volume: "1 - 10 Tons", priceRange: "$7.50 - $8.50/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    faqs: [
      { question: "Is dried papaya available without added sugar?", answer: "Yes, we offer no-sugar-added options using naturally ripe papayas." },
      { question: "What is the typical shelf life?", answer: "12 months when stored in cool, dry conditions in unopened packaging." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-pineapple", "dried-mango", "dried-dragon-fruit"],
  },
  {
    id: "dried-pineapple",
    name: "Dried Pineapple",
    category: "dried-fruits",
    sku: "DFT-DPI-001",
    hsCode: "0813.40.10",
    tagline: "Sweet and tangy tropical delight",
    description: "Naturally dried pineapple rings and chunks from premium Cayenne pineapples. Perfect balance of sweet and tangy.",
    flavorProfile: "Vibrant sweet-tangy balance with aromatic pineapple essence",
    texture: "Chewy with slight crispness on edges",
    metaTitle: "Wholesale Dried Pineapple (Rings/Chunks) - Bulk Export from Indonesia",
    metaDescription: "Premium dried pineapple from Indonesia. USDA/EU Organic certified. Bulk packaging available. MOQ 500kg. Direct from manufacturer.",
    keywords: ["bulk dried pineapple", "wholesale dried pineapple Indonesia", "dried pineapple supplier"],
    specifications: {
      size: "Rings, Chunks, Tidbits",
      moisture: "12-15%",
      color: "Golden Yellow",
      shelfLife: "12 months",
      origin: "Lampung, Indonesia",
      brixLevel: ">14° (Naturally sweet-tangy)",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Fruit salads", "Dessert toppings", "Baking", "Cocktails", "Snacking", "Trail mix"],
    packaging: { bulk: "10-25 kg cartons with PE liner", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
    pricing: {
      fobBase: "From $8.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$9.00 - $10.00/kg" },
        { volume: "1 - 10 Tons", priceRange: "$8.00 - $9.00/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    faqs: [
      { question: "Do you offer cored pineapple rings?", answer: "Yes, we offer both cored rings and natural slices with core." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "vacuum-pineapple"],
  },
  {
    id: "dried-avocado",
    name: "Dried Avocado",
    category: "dried-fruits",
    sku: "DFT-DA-001",
    hsCode: "0813.40.90",
    tagline: "Rare superfood innovation",
    description: "Unique dried avocado slices - a rare product offering. Rich, creamy flavor preserved through our special drying process.",
    flavorProfile: "Rich, buttery, and creamy with subtle nutty undertones",
    texture: "Firm yet tender, satisfying bite",
    metaTitle: "Wholesale Dried Avocado (Slices) - Rare Superfood from Indonesia",
    metaDescription: "Unique dried avocado slices from Indonesia. Premium superfood innovation. Limited availability. Contact for bulk pricing.",
    keywords: ["dried avocado", "dried avocado wholesale", "avocado chips supplier"],
    specifications: {
      size: "Slices, Pieces",
      moisture: "8-10%",
      color: "Light Green to Cream",
      shelfLife: "9 months",
      origin: "West Java, Indonesia",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "February - August",
      offPeakSeason: "September - January",
      currentStatus: "limited",
    },
    applications: ["Health snacks", "Smoothie ingredients", "Gourmet cooking", "Salad toppings"],
    packaging: { bulk: "5-15 kg cartons with nitrogen flush", retail: "30g-200g pouches", custom: true },
    pricing: {
      fobBase: "From $18.00/kg FOB",
      moq: "300 kg",
      leadTime: "3-4 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$20.00 - $22.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$18.00 - $20.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "dried-jackfruit", "dried-mango"],
  },
  {
    id: "dried-mango",
    name: "Dried Mango",
    category: "dried-fruits",
    sku: "DFT-DM-001",
    hsCode: "0813.40.10",
    tagline: "King of tropical dried fruits",
    description: "Premium dried mango slices from hand-selected Gedong and Harum Manis mangoes. Intense tropical flavor with naturally high sweetness.",
    flavorProfile: "Intense tropical sweetness with a rich, aromatic fragrance typical of Indonesian mangoes",
    texture: "Soft and chewy, not fibrous",
    metaTitle: "Wholesale Dried Mango (Slices) - Bulk Export from Indonesia",
    metaDescription: "Direct manufacturer of premium dried mango from Indonesia. USDA/EU Organic certified. Bulk 10-25kg cartons. MOQ 500kg. View specs & pricing.",
    keywords: ["bulk dried mango", "wholesale dried mango Indonesia", "dried mango supplier", "organic dried mango"],
    specifications: {
      size: "Slices, Strips, Dices",
      moisture: "12-16%",
      color: "Deep Orange to Yellow",
      shelfLife: "12 months",
      origin: "East Java, Indonesia",
      brixLevel: ">14° (Naturally sweet)",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "October - February",
      offPeakSeason: "March - September",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Trail mix", "Smoothies", "Baking", "Ice cream toppings", "Cereal & Muesli"],
    packaging: { bulk: "10-25 kg cartons with PE liner", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
    pricing: {
      fobBase: "From $9.50/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$11.00 - $12.00/kg" },
        { volume: "1 - 10 Tons", priceRange: "$9.50 - $11.00/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    faqs: [
      { question: "Can you provide Organic Certification?", answer: "Yes, we offer USDA Organic and EU Organic certified dried mango." },
      { question: "What is transit time to USA/Europe?", answer: "Ocean freight: USA West Coast ~25-30 days, Europe (Rotterdam/Hamburg) ~28-35 days. Air freight: 3-5 days." },
      { question: "Do you offer sulfite-free options?", answer: "Yes, we have both conventional and sulfite-free/preservative-free options." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "vacuum-mango"],
  },
  {
    id: "dried-dragon-fruit",
    name: "Dried Dragon Fruit",
    category: "dried-fruits",
    sku: "DFT-DDF-001",
    hsCode: "0813.40.90",
    tagline: "Exotic superfood from the tropics",
    description: "Vibrant dried dragon fruit (pitaya) slices. Stunning visual appeal with subtle sweetness and high antioxidant content.",
    flavorProfile: "Subtly sweet with mild berry-like notes, refreshing finish",
    texture: "Crisp yet chewy, delicate crunch",
    metaTitle: "Wholesale Dried Dragon Fruit (Pitaya) - Bulk Export from Indonesia",
    metaDescription: "Premium dried dragon fruit from Indonesia. Vibrant natural color. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: ["dried dragon fruit", "dried pitaya wholesale", "dragon fruit supplier Indonesia"],
    specifications: {
      size: "Slices, Chips",
      moisture: "10-14%",
      color: "Deep Magenta (Red) / White",
      shelfLife: "12 months",
      origin: "Banyuwangi, Indonesia",
      brixLevel: ">10° (Subtly sweet)",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Smoothie bowls", "Decorative garnish", "Health snacks", "Breakfast cereals", "Natural coloring"],
    packaging: { bulk: "5-15 kg cartons with nitrogen flush", retail: "30g-250g stand-up pouches", custom: true },
    pricing: {
      fobBase: "From $12.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$14.00 - $16.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$12.00 - $14.00/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    faqs: [
      { question: "Do you offer both red and white dragon fruit?", answer: "Yes, we offer both red-fleshed and white-fleshed dried dragon fruit." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-snake-fruit"],
  },
  {
    id: "dried-snake-fruit",
    name: "Dried Snake Fruit (Salak)",
    category: "dried-fruits",
    sku: "DFT-DSF-001",
    hsCode: "0813.40.90",
    tagline: "Indonesia's exotic treasure",
    description: "Rare dried salak (snake fruit) - a uniquely Indonesian delicacy with sweet-tangy flavor profile and distinctive texture.",
    flavorProfile: "Complex sweet-tangy profile with apple-pineapple notes and slight astringency",
    texture: "Firm and crunchy, unique bite",
    metaTitle: "Wholesale Dried Snake Fruit (Salak) - Exotic Indonesian Delicacy",
    metaDescription: "Rare dried salak from Indonesia. Unique exotic flavor. Premium quality. Limited availability. Contact for bulk pricing.",
    keywords: ["dried snake fruit", "dried salak wholesale", "Indonesian exotic fruit"],
    specifications: {
      size: "Whole, Halves, Pieces",
      moisture: "10-14%",
      color: "Brown to Tan",
      shelfLife: "12 months",
      origin: "Sleman, Yogyakarta, Indonesia",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "November - February",
      offPeakSeason: "March - October",
      currentStatus: "in-stock",
    },
    applications: ["Exotic snacking", "Gourmet products", "Gift packs", "Specialty mixes"],
    packaging: { bulk: "5-15 kg cartons", retail: "30g-200g pouches", custom: true },
    pricing: {
      fobBase: "From $15.00/kg FOB",
      moq: "200 kg",
      leadTime: "3-4 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$17.00 - $19.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$15.00 - $17.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "dried-breadfruit", "dried-dragon-fruit"],
  },
  {
    id: "dried-breadfruit",
    name: "Dried Breadfruit",
    category: "dried-fruits",
    sku: "DFT-DBF-001",
    hsCode: "0813.40.90",
    tagline: "Sustainable superfood alternative",
    description: "Dried breadfruit chips and slices - high in fiber, gluten-free, and sustainable. A versatile ingredient for health-conscious products.",
    flavorProfile: "Mild, slightly nutty with subtle sweetness, similar to potato",
    texture: "Crispy when chips, chewy when slices",
    metaTitle: "Wholesale Dried Breadfruit - Gluten-Free Superfood from Indonesia",
    metaDescription: "Sustainable dried breadfruit from Indonesia. High fiber, gluten-free. Bulk packaging. Perfect for health food manufacturers.",
    keywords: ["dried breadfruit", "gluten-free dried fruit", "sustainable superfood"],
    specifications: {
      size: "Chips, Slices",
      moisture: "8-12%",
      color: "Cream to Light Brown",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Gluten-free snacks", "Flour alternative", "Chips", "Baking", "Health products"],
    packaging: { bulk: "10-25 kg cartons", retail: "50g-300g pouches", custom: true },
    pricing: {
      fobBase: "From $6.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$7.00 - $8.00/kg" },
        { volume: "1 - 10 Tons", priceRange: "$6.00 - $7.00/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "dried-coconut", "dried-snake-fruit"],
  },
  {
    id: "dried-jackfruit",
    name: "Dried Jackfruit",
    category: "dried-fruits",
    sku: "DFT-DJF-001",
    hsCode: "0813.40.90",
    tagline: "Nature's candy from the tropics",
    description: "Sweet, chewy dried jackfruit pieces. Intense tropical aroma and naturally sweet taste. Popular for snacking and vegan applications.",
    flavorProfile: "Intensely sweet with distinctive tropical aroma, hints of banana and pineapple",
    texture: "Chewy and slightly sticky, satisfying",
    metaTitle: "Wholesale Dried Jackfruit - Bulk Export from Indonesia",
    metaDescription: "Premium dried jackfruit from Indonesia. Natural sweetness. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: ["dried jackfruit wholesale", "bulk dried jackfruit", "jackfruit supplier Indonesia"],
    specifications: {
      size: "Pieces, Chips",
      moisture: "12-16%",
      color: "Golden Yellow",
      shelfLife: "12 months",
      origin: "Central Java, Indonesia",
      brixLevel: ">18° (Naturally very sweet)",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "January - April, August - October",
      offPeakSeason: "May - July, November - December",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Vegan meat alternative", "Baking", "Trail mix", "Confectionery"],
    packaging: { bulk: "10-20 kg cartons", retail: "50g-400g pouches", custom: true },
    pricing: {
      fobBase: "From $8.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$9.50 - $11.00/kg" },
        { volume: "1 - 10 Tons", priceRange: "$8.00 - $9.50/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-breadfruit"],
  },
  {
    id: "dried-coconut",
    name: "Dried Coconut",
    category: "dried-fruits",
    sku: "DFT-DC-001",
    hsCode: "0801.12.00",
    tagline: "Versatile tropical staple",
    description: "Premium desiccated coconut and coconut chips. Available in various grades for different applications. Consistent quality guaranteed.",
    flavorProfile: "Rich, creamy coconut flavor with natural sweetness",
    texture: "Various textures: fine powder, medium shreds, crispy chips",
    metaTitle: "Wholesale Desiccated Coconut - Bulk Export from Indonesia",
    metaDescription: "Premium desiccated coconut from Indonesia. Multiple grades available. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["desiccated coconut wholesale", "coconut chips bulk", "coconut supplier Indonesia"],
    specifications: {
      size: "Fine, Medium, Chips, Flakes",
      moisture: "3-6%",
      color: "Pure White",
      shelfLife: "18 months",
      origin: "Sulawesi, Indonesia",
      oilContent: "60-65%",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Drum-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Confectionery", "Cooking", "Snacking", "Beverages", "Health products"],
    packaging: { bulk: "25 kg bags (multilayer)", retail: "100g-1kg pouches", custom: true },
    pricing: {
      fobBase: "From $2.50/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$3.00 - $3.50/kg" },
        { volume: "5 - 20 Tons", priceRange: "$2.50 - $3.00/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal", "Kosher"],
    isOrganic: true,
    relatedProducts: ["dried-avocado", "dried-breadfruit", "dried-jackfruit"],
  },
  
  // ==================
  // POWDERED FRUITS
  // ==================
  {
    id: "papaya-powder",
    name: "Papaya Powder",
    category: "powdered-fruits",
    sku: "DFT-PP-001",
    hsCode: "1106.30.00",
    tagline: "Tropical enzyme-rich powder",
    description: "Premium drum-dried papaya powder. Rich in natural enzymes (papain) and vitamins, perfect for smoothies, baking, and food manufacturing.",
    flavorProfile: "Sweet tropical papaya flavor, concentrated",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Papaya Powder - Bulk Export from Indonesia",
    metaDescription: "Premium drum-dried papaya powder from Indonesia. Rich in papain enzyme. USDA/EU Organic certified. Bulk 20-25kg bags.",
    keywords: ["papaya powder wholesale", "dried papaya powder", "fruit powder supplier"],
    specifications: {
      size: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "4-6%",
      color: "Orange to Golden",
      shelfLife: "18 months",
      origin: "Central Java, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Smoothies", "Baking", "Baby food", "Supplements", "Beverages", "Natural flavoring"],
    packaging: { bulk: "20-25 kg multilayer bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $12.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$14.00 - $16.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$12.00 - $14.00/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["pineapple-powder", "mango-powder", "dried-papaya"],
  },
  {
    id: "pineapple-powder",
    name: "Pineapple Powder",
    category: "powdered-fruits",
    sku: "DFT-PIP-001",
    hsCode: "1106.30.00",
    tagline: "Natural tangy sweetness",
    description: "Fine pineapple powder made from premium Cayenne pineapples. Perfect for beverages, baking, and natural flavoring applications.",
    flavorProfile: "Tangy-sweet pineapple, concentrated and aromatic",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Pineapple Powder - Bulk Export from Indonesia",
    metaDescription: "Premium pineapple powder from Indonesia. Natural tangy-sweet flavor. USDA/EU Organic certified. Bulk 20-25kg bags.",
    keywords: ["pineapple powder wholesale", "dried pineapple powder", "fruit powder supplier"],
    specifications: {
      size: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "4-6%",
      color: "Light Yellow",
      shelfLife: "18 months",
      origin: "Lampung, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Baking", "Confectionery", "Smoothies", "Natural flavoring", "Ice cream"],
    packaging: { bulk: "20-25 kg multilayer bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $13.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$15.00 - $17.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$13.00 - $15.00/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "mango-powder", "dried-pineapple"],
  },
  {
    id: "mango-powder",
    name: "Mango Powder",
    category: "powdered-fruits",
    sku: "DFT-MP-001",
    hsCode: "1106.30.00",
    tagline: "Concentrated tropical flavor",
    description: "Premium mango powder from hand-selected mangoes. Intense flavor for food manufacturing and beverage applications.",
    flavorProfile: "Intense tropical mango, sweet and aromatic",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Mango Powder - Bulk Export from Indonesia",
    metaDescription: "Premium mango powder from Indonesia. Concentrated tropical flavor. USDA/EU Organic certified. Bulk 20-25kg bags.",
    keywords: ["mango powder wholesale", "dried mango powder", "fruit powder supplier Indonesia"],
    specifications: {
      size: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "4-6%",
      color: "Deep Orange to Yellow",
      shelfLife: "18 months",
      origin: "East Java, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "October - February (peak harvest)",
      offPeakSeason: "March - September",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Ice cream", "Baking", "Smoothies", "Confectionery", "Yogurt flavoring"],
    packaging: { bulk: "20-25 kg multilayer bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $14.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$16.00 - $18.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$14.00 - $16.00/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "pineapple-powder", "dried-mango"],
  },
  {
    id: "dragon-fruit-powder",
    name: "Dragon Fruit Powder",
    category: "powdered-fruits",
    sku: "DFT-DFP-001",
    hsCode: "1106.30.00",
    tagline: "Vibrant natural coloring",
    description: "Stunning pink dragon fruit powder. Natural food coloring with mild sweetness, perfect for smoothie bowls and confectionery.",
    flavorProfile: "Mildly sweet with subtle berry notes",
    texture: "Fine, vibrant colored powder",
    metaTitle: "Wholesale Dragon Fruit Powder - Natural Pink Coloring from Indonesia",
    metaDescription: "Vibrant dragon fruit powder from Indonesia. Natural pink coloring. USDA/EU Organic certified. Perfect for food & beverage.",
    keywords: ["dragon fruit powder", "pitaya powder wholesale", "natural pink food coloring"],
    specifications: {
      size: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "4-6%",
      color: "Deep Magenta to Pink",
      shelfLife: "18 months",
      origin: "Banyuwangi, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Freeze-dried / Drum-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Natural coloring", "Smoothie bowls", "Confectionery", "Beverages", "Desserts", "Ice cream"],
    packaging: { bulk: "10-20 kg multilayer bags", retail: "50g-300g pouches", custom: true },
    pricing: {
      fobBase: "From $18.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$20.00 - $24.00/kg" },
        { volume: "1 - 3 Tons", priceRange: "$18.00 - $20.00/kg" },
        { volume: "Large orders (>3T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "mango-powder", "dried-dragon-fruit"],
  },
  {
    id: "coconut-powder",
    name: "Coconut Powder",
    category: "powdered-fruits",
    sku: "DFT-CP-001",
    hsCode: "1106.30.00",
    tagline: "Creamy tropical versatility",
    description: "Fine coconut powder for beverages, baking, and food manufacturing. Rich coconut flavor and creamy texture.",
    flavorProfile: "Rich, creamy coconut with natural sweetness",
    texture: "Fine, creamy powder",
    metaTitle: "Wholesale Coconut Powder - Bulk Export from Indonesia",
    metaDescription: "Premium coconut powder from Indonesia. Creamy texture. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["coconut powder wholesale", "coconut milk powder", "coconut supplier Indonesia"],
    specifications: {
      size: "Fine powder",
      meshSize: "100+ mesh",
      moisture: "3-5%",
      color: "Pure White to Cream",
      shelfLife: "18 months",
      origin: "Sulawesi, Indonesia",
      oilContent: "60-65%",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Spray-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Beverages", "Confectionery", "Cooking", "Smoothies", "Dairy alternatives"],
    packaging: { bulk: "25 kg multilayer bags", retail: "100g-1kg pouches", custom: true },
    pricing: {
      fobBase: "From $4.50/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$5.00 - $5.50/kg" },
        { volume: "5 - 20 Tons", priceRange: "$4.50 - $5.00/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal", "Kosher"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "papaya-powder", "mango-powder"],
  },
  {
    id: "jackfruit-powder",
    name: "Jackfruit Powder",
    category: "powdered-fruits",
    sku: "DFT-JP-001",
    hsCode: "1106.30.00",
    tagline: "Unique tropical essence",
    description: "Natural jackfruit powder with intense tropical aroma. Ideal for beverages, desserts, and specialty food products.",
    flavorProfile: "Sweet, intensely aromatic with tropical complexity",
    texture: "Fine, aromatic powder",
    metaTitle: "Wholesale Jackfruit Powder - Bulk Export from Indonesia",
    metaDescription: "Premium jackfruit powder from Indonesia. Unique tropical flavor. USDA/EU Organic certified. Bulk 15-20kg bags.",
    keywords: ["jackfruit powder wholesale", "dried jackfruit powder", "fruit powder supplier"],
    specifications: {
      size: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "4-6%",
      color: "Golden Yellow",
      shelfLife: "18 months",
      origin: "Central Java, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "January - April, August - October",
      offPeakSeason: "May - July, November - December",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Desserts", "Baking", "Ice cream", "Confectionery", "Smoothies"],
    packaging: { bulk: "15-20 kg multilayer bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $15.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$17.00 - $19.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$15.00 - $17.00/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "papaya-powder", "mango-powder"],
  },

  // ==================
  // VACUUM FRIED FRUITS
  // ==================
  {
    id: "vacuum-papaya",
    name: "Vacuum Fried Papaya",
    category: "vacuum-fried",
    sku: "DFT-VFP-001",
    hsCode: "2008.99.90",
    tagline: "Crispy tropical innovation",
    description: "Crunchy vacuum fried papaya chips. Low-fat, crispy texture with intense papaya flavor. Premium snacking experience.",
    flavorProfile: "Concentrated sweet papaya with caramelized notes",
    texture: "Ultra-crispy, light crunch",
    metaTitle: "Wholesale Vacuum Fried Papaya Chips - Bulk Export from Indonesia",
    metaDescription: "Premium vacuum fried papaya chips from Indonesia. Low-fat, crispy. Perfect for retail snacking. Bulk packaging available.",
    keywords: ["vacuum fried papaya", "papaya chips wholesale", "healthy fruit chips"],
    specifications: {
      size: "Chips",
      moisture: "2-4%",
      color: "Orange",
      shelfLife: "9 months",
      origin: "Central Java, Indonesia",
      oilContent: "15-20% (low-fat)",
      additives: "No artificial additives",
      foreignMatter: "0%",
      processingMethod: "Vacuum frying (low temperature)",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Premium snacking", "Gift packs", "Retail products", "Hotel minibars", "Trail mix"],
    packaging: { bulk: "5-10 kg cartons with nitrogen flush", retail: "30g-150g pouches", custom: true },
    pricing: {
      fobBase: "From $16.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$18.00 - $20.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$16.00 - $18.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["vacuum-banana", "vacuum-pineapple", "vacuum-mango"],
  },
  {
    id: "vacuum-banana",
    name: "Vacuum Fried Banana",
    category: "vacuum-fried",
    sku: "DFT-VFB-001",
    hsCode: "2008.99.90",
    tagline: "Classic favorite, premium quality",
    description: "Crispy banana chips made with vacuum frying technology. Superior taste and texture compared to traditional frying. Lower oil content.",
    flavorProfile: "Sweet caramelized banana with natural richness",
    texture: "Perfectly crispy, satisfying crunch",
    metaTitle: "Wholesale Vacuum Fried Banana Chips - Bulk Export from Indonesia",
    metaDescription: "Premium vacuum fried banana chips from Indonesia. Low-fat technology. Superior crunch. Bulk packaging available.",
    keywords: ["vacuum fried banana", "banana chips wholesale", "healthy banana chips"],
    specifications: {
      size: "Chips, Coins",
      moisture: "2-4%",
      color: "Golden Yellow",
      shelfLife: "9 months",
      origin: "Lampung, Indonesia",
      oilContent: "18-22% (low-fat)",
      additives: "No artificial additives",
      foreignMatter: "0%",
      processingMethod: "Vacuum frying (low temperature)",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Ice cream toppings", "Breakfast cereals", "Chocolate coating", "Trail mix"],
    packaging: { bulk: "10-20 kg cartons", retail: "50g-200g pouches", custom: true },
    pricing: {
      fobBase: "From $8.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$9.50 - $11.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$8.00 - $9.50/kg" },
        { volume: "Full Container (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-pineapple", "vacuum-mango"],
  },
  {
    id: "vacuum-pineapple",
    name: "Vacuum Fried Pineapple",
    category: "vacuum-fried",
    sku: "DFT-VFPI-001",
    hsCode: "2008.99.90",
    tagline: "Tangy crunch sensation",
    description: "Crispy pineapple chips with intense sweet-tangy flavor. Perfect balance of taste and texture using vacuum frying technology.",
    flavorProfile: "Intense tangy-sweet with concentrated pineapple essence",
    texture: "Delicate crisp, light and airy",
    metaTitle: "Wholesale Vacuum Fried Pineapple Chips - Bulk Export from Indonesia",
    metaDescription: "Premium vacuum fried pineapple chips from Indonesia. Tangy-sweet flavor. Low-fat. Bulk packaging available.",
    keywords: ["vacuum fried pineapple", "pineapple chips wholesale", "healthy fruit chips"],
    specifications: {
      size: "Chips, Rings",
      moisture: "2-4%",
      color: "Golden Yellow",
      shelfLife: "9 months",
      origin: "Lampung, Indonesia",
      oilContent: "15-20% (low-fat)",
      additives: "No artificial additives",
      foreignMatter: "0%",
      processingMethod: "Vacuum frying (low temperature)",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Premium snacking", "Cocktail garnish", "Dessert toppings", "Trail mix", "Gift packs"],
    packaging: { bulk: "5-10 kg cartons with nitrogen flush", retail: "30g-150g pouches", custom: true },
    pricing: {
      fobBase: "From $17.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$19.00 - $21.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$17.00 - $19.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-banana", "vacuum-mango"],
  },
  {
    id: "vacuum-mango",
    name: "Vacuum Fried Mango",
    category: "vacuum-fried",
    sku: "DFT-VFM-001",
    hsCode: "2008.99.90",
    tagline: "Intense mango crunch",
    description: "Premium vacuum fried mango chips. Concentrated mango flavor with satisfying crunch. The ultimate tropical snacking experience.",
    flavorProfile: "Intensely sweet mango with aromatic depth",
    texture: "Perfectly crispy, melts in mouth",
    metaTitle: "Wholesale Vacuum Fried Mango Chips - Bulk Export from Indonesia",
    metaDescription: "Premium vacuum fried mango chips from Indonesia. Intense flavor. Low-fat technology. Bulk packaging available.",
    keywords: ["vacuum fried mango", "mango chips wholesale", "healthy mango chips"],
    specifications: {
      size: "Chips, Slices",
      moisture: "2-4%",
      color: "Deep Orange",
      shelfLife: "9 months",
      origin: "East Java, Indonesia",
      oilContent: "15-20% (low-fat)",
      additives: "No artificial additives",
      foreignMatter: "0%",
      processingMethod: "Vacuum frying (low temperature)",
      grade: "Premium Export Quality",
    },
    availability: {
      peakSeason: "October - February",
      offPeakSeason: "March - September",
      currentStatus: "in-stock",
    },
    applications: ["Gourmet snacking", "Gift packs", "Retail products", "Trail mix", "Premium food service"],
    packaging: { bulk: "5-10 kg cartons with nitrogen flush", retail: "30g-150g pouches", custom: true },
    pricing: {
      fobBase: "From $18.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$20.00 - $22.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$18.00 - $20.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["vacuum-papaya", "vacuum-banana", "vacuum-pineapple"],
  },

  // ==================
  // GINGER & TURMERIC
  // ==================
  {
    id: "dried-ginger",
    name: "Dried Ginger",
    category: "ginger-turmeric",
    sku: "DFT-DG-001",
    hsCode: "0910.11.00",
    tagline: "Premium Indonesian ginger",
    description: "High-quality dried ginger slices and cuts. Strong, aromatic flavor from Java's finest ginger varieties. Ideal for tea and culinary applications.",
    flavorProfile: "Strong, spicy-warm with zesty citrus notes",
    texture: "Firm, fibrous slices",
    metaTitle: "Wholesale Dried Ginger - Bulk Export from Indonesia",
    metaDescription: "Premium dried ginger from Indonesia. Strong aroma. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["dried ginger wholesale", "Indonesian ginger", "ginger supplier"],
    specifications: {
      size: "Slices, Cuts, Whole",
      moisture: "10-12%",
      color: "Light Yellow to Brown",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Sun-dried",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Tea blends", "Cooking", "Beverages", "Herbal products", "Confectionery", "Pharmaceuticals"],
    packaging: { bulk: "25 kg bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $4.00/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$4.50 - $5.00/kg" },
        { volume: "5 - 20 Tons", priceRange: "$4.00 - $4.50/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["ginger-powder", "dried-turmeric", "turmeric-powder"],
  },
  {
    id: "ginger-powder",
    name: "Ginger Powder",
    category: "ginger-turmeric",
    sku: "DFT-GP-001",
    hsCode: "0910.11.00",
    tagline: "Concentrated ginger flavor",
    description: "Fine ginger powder made from premium dried ginger. Intense flavor for culinary and health applications. Consistent quality guaranteed.",
    flavorProfile: "Concentrated spicy-warm, aromatic",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Ginger Powder - Bulk Export from Indonesia",
    metaDescription: "Premium ginger powder from Indonesia. Strong flavor. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["ginger powder wholesale", "Indonesian ginger powder", "organic ginger powder"],
    specifications: {
      size: "80-120 mesh",
      meshSize: "80-120 mesh",
      moisture: "8-10%",
      color: "Light Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Hammer-milled",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Beverages", "Supplements", "Spice blends", "Health products", "Pharmaceuticals"],
    packaging: { bulk: "25 kg bags", retail: "50g-500g jars/pouches", custom: true },
    pricing: {
      fobBase: "From $5.00/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$5.50 - $6.00/kg" },
        { volume: "5 - 20 Tons", priceRange: "$5.00 - $5.50/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-ginger", "turmeric-powder", "dried-turmeric"],
  },
  {
    id: "dried-turmeric",
    name: "Dried Turmeric",
    category: "ginger-turmeric",
    sku: "DFT-DT-001",
    hsCode: "0910.30.00",
    tagline: "Golden superfood from Indonesia",
    description: "Premium dried turmeric fingers and cuts. High curcumin content from Java's best turmeric. Ideal for supplements and culinary use.",
    flavorProfile: "Earthy, slightly bitter with warm peppery notes",
    texture: "Hard, dense fingers",
    metaTitle: "Wholesale Dried Turmeric - High Curcumin from Indonesia",
    metaDescription: "Premium dried turmeric from Indonesia. High curcumin content. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["dried turmeric wholesale", "Indonesian turmeric", "high curcumin turmeric"],
    specifications: {
      size: "Fingers, Cuts, Slices",
      moisture: "10-12%",
      color: "Deep Orange-Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      curcuminContent: "3-5% (high curcumin)",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Boiled & Sun-dried",
      grade: "Grade A Export Quality",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Curry blends", "Health supplements", "Tea", "Natural coloring", "Beverages", "Pharmaceuticals"],
    packaging: { bulk: "25 kg bags", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $3.50/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$4.00 - $4.50/kg" },
        { volume: "5 - 20 Tons", priceRange: "$3.50 - $4.00/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["turmeric-powder", "dried-ginger", "ginger-powder"],
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "ginger-turmeric",
    sku: "DFT-TP-001",
    hsCode: "0910.30.00",
    tagline: "High-curcumin golden powder",
    description: "Fine turmeric powder with high curcumin content. Vibrant color and potent health benefits. Perfect for supplements and food manufacturing.",
    flavorProfile: "Earthy, warm, slightly bitter with mustard-like depth",
    texture: "Fine, vibrant golden powder",
    metaTitle: "Wholesale Turmeric Powder - High Curcumin from Indonesia",
    metaDescription: "Premium turmeric powder from Indonesia. High curcumin content. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["turmeric powder wholesale", "high curcumin powder", "organic turmeric powder"],
    specifications: {
      size: "80-120 mesh",
      meshSize: "80-120 mesh",
      moisture: "8-10%",
      color: "Bright Orange-Yellow",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      curcuminContent: "3-5% (high curcumin)",
      additives: "No additives",
      foreignMatter: "0%",
      processingMethod: "Hammer-milled",
      grade: "Food Grade",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Curry powder", "Golden milk", "Supplements", "Natural coloring", "Health products", "Beverages"],
    packaging: { bulk: "25 kg bags", retail: "50g-500g jars/pouches", custom: true },
    pricing: {
      fobBase: "From $4.00/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$4.50 - $5.00/kg" },
        { volume: "5 - 20 Tons", priceRange: "$4.00 - $4.50/kg" },
        { volume: "Full Container (>20T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-turmeric", "ginger-powder", "dried-ginger"],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
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
    description: "Premium sun-dried tropical fruits - chunks, slices, and cuts",
    productCount: products.filter(p => p.category === "dried-fruits").length,
  },
  {
    id: "powdered-fruits",
    name: "Powdered Dried Fruits",
    description: "Drum-dried fruit powders for food manufacturing",
    productCount: products.filter(p => p.category === "powdered-fruits").length,
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
    answer: "Yes, we encourage all potential buyers to request samples. Product samples are free, but courier costs (DHL/FedEx) are borne by the buyer.",
  },
  {
    question: "What quality documents do you provide?",
    answer: "We provide Certificate of Analysis (COA), phytosanitary certificates, organic certificates, bill of lading, packing list, commercial invoice, and any other documents required for import.",
  },
  {
    question: "What is the transit time to USA/Europe?",
    answer: "Ocean freight: USA West Coast ~25-30 days, Europe (Rotterdam/Hamburg) ~28-35 days. Air freight is available at 3-5 days for urgent orders.",
  },
  {
    question: "Do you offer CIF/CNF pricing?",
    answer: "Yes, we support multiple Incoterms including FOB, CIF, CNF, and Ex-Works. Contact us for CIF/CNF quotes to your destination port.",
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
