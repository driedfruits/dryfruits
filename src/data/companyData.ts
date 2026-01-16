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

// Storage Guidelines Data
export const storageGuidelines = {
  categories: [
    {
      name: "Dried Fruits",
      tempRange: "10-20°C (50-68°F)",
      humidityMax: "<60% RH",
      waterActivity: "≤0.60 aw",
      shelfLife: "12-24 months",
      icon: "apple",
      tips: ["Store in cool, dark area", "Keep sealed when not in use", "Check for condensation regularly"],
    },
    {
      name: "Fruit Powders",
      tempRange: "10-18°C (50-64°F)",
      humidityMax: "<50% RH",
      waterActivity: "≤0.45 aw",
      shelfLife: "18-24 months",
      icon: "sparkles",
      tips: ["Highly hygroscopic - minimize air exposure", "Use desiccants in storage", "Nitrogen-flush after opening"],
    },
    {
      name: "Vacuum Fried",
      tempRange: "15-25°C (59-77°F)",
      humidityMax: "<55% RH",
      waterActivity: "≤0.40 aw",
      shelfLife: "12-18 months",
      icon: "snowflake",
      tips: ["Protect from light exposure", "Keep away from heat sources", "Crispy texture sensitive to humidity"],
    },
    {
      name: "Ginger & Turmeric",
      tempRange: "10-20°C (50-68°F)",
      humidityMax: "<55% RH",
      waterActivity: "≤0.50 aw",
      shelfLife: "18-24 months",
      icon: "leaf",
      tips: ["Store away from strong odors", "Curcumin is light-sensitive", "Maintain volatile oil content"],
    },
  ],
  bestPractices: [
    {
      title: "Temperature Monitoring",
      description: "Use data loggers to track 24/7 temperature. Set alerts for deviations >2°C from target range.",
      icon: "thermometer",
    },
    {
      title: "Humidity Control",
      description: "Install industrial dehumidifiers in tropical climates. Maintain consistent RH levels year-round.",
      icon: "droplets",
    },
    {
      title: "Pallet Placement",
      description: "Keep pallets minimum 10cm off floor and 50cm from walls. Allows air circulation and prevents condensation.",
      icon: "package",
    },
    {
      title: "FIFO Rotation",
      description: "First-In-First-Out system is essential. Label all incoming stock with receipt dates clearly visible.",
      icon: "timer",
    },
    {
      title: "Pest Control",
      description: "Regular fumigation schedule. Use pheromone traps for early detection. Seal all entry points.",
      icon: "shield",
    },
    {
      title: "Ventilation",
      description: "Ensure adequate air circulation to prevent moisture pockets. Avoid dead zones in warehouse corners.",
      icon: "wind",
    },
  ],
  commonMistakes: [
    {
      mistake: "Storing near heat sources",
      consequence: "Accelerates oxidation, causes moisture migration, and degrades color/flavor compounds",
      solution: "Maintain 2+ meter distance from heaters, machinery, or sun-exposed walls",
    },
    {
      mistake: "Direct sunlight exposure",
      consequence: "UV degradation of natural pigments (carotenoids, anthocyanins) and vitamins",
      solution: "Use opaque packaging and store in windowless areas or use UV-blocking films",
    },
    {
      mistake: "Humidity fluctuations",
      consequence: "Causes moisture cycling - products absorb/release water, leading to caking and mold",
      solution: "Maintain steady RH with HVAC systems; avoid opening warehouse doors frequently",
    },
    {
      mistake: "Improper sealing after sampling",
      consequence: "Exposed product absorbs ambient moisture rapidly, especially powders",
      solution: "Use heat sealers or zip-lock closures immediately. Never leave bags open overnight",
    },
    {
      mistake: "Floor storage without pallets",
      consequence: "Ground condensation transfers moisture to bottom cartons; pest access easier",
      solution: "Always use pallets. Consider moisture-barrier floor sheets in humid climates",
    },
  ],
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
  
  // Images (optional - uses placeholder if not set)
  images?: {
    main?: string;           // Main product image URL
    thumbnail?: string;      // Low-quality placeholder for blur-up
    gallery?: string[];      // Additional product images
  };
  
  // Content & SEO
  tagline: string;
  description: string;
  flavorProfile?: string;
  texture?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Specifications (enhanced for B2B)
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
    // Ginger/turmeric specific B2B specs
    volatileOil?: string;
    gingerolContent?: string;
    totalAsh?: string;
    acidInsolubleAsh?: string;
    particleSize?: string;
    purity?: string;
    defects?: string;
    fatContent?: string;
    starchContent?: string;
    chromeTest?: string;
    astaColor?: string;
    // Microbial limits
    salmonella?: string;
    eColi?: string;
    aflatoxins?: string;
    // Quality testing
    testingMethod?: string;
    // Dried/powdered fruit B2B specs
    so2Level?: string;
    totalPlateCount?: string;
    waterActivity?: string;
    storageTemp?: string;
    storageHumidity?: string;
    yeastMold?: string;
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
    keywords: ["bulk dried papaya", "wholesale dried papaya Indonesia", "dried papaya supplier", "dried papaya water activity"],
    specifications: {
      size: "Chunks 1-2cm, Shreds, Slices, Dices",
      moisture: "18-25%",
      waterActivity: "≤0.60 aw",
      so2Level: "<100ppm SO₂ (sulfite-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Orange",
      shelfLife: "18-24 months (premium) / 12-18 months (standard)",
      origin: "Central Java, Indonesia",
      brixLevel: ">12° Brix",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Slow dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round (Indonesia)",
      currentStatus: "in-stock",
    },
    applications: ["Breakfast cereals", "Trail mix", "Baked goods", "Smoothie bowls", "Snacking", "Confectionery"],
    packaging: { bulk: "10-12.5kg carton with PE liner", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "15-18 MT",
      containerLoad40ft: "22-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert requirements",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What are the microbiological specifications?", answer: "Our dried papaya meets strict microbiology standards: Total Plate Count <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent, E. coli absent. ISO 17025 lab certified." },
      { question: "What is the water activity level?", answer: "Premium export grade maintains aw ≤0.60 to prevent microbial growth and ensure 18-24 month shelf life. Standard bulk grade is aw ≤0.65." },
      { question: "Is dried papaya available without added sugar?", answer: "Yes, we offer no-sugar-added options using naturally ripe papayas. We also provide sulfite-free options." },
      { question: "What storage conditions are required?", answer: "Store at 10-20°C (50-68°F) in <60% relative humidity. Keep in cool, dry, dark warehouse with pallets off floor to prevent condensation." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-pineapple", "dried-mango", "dried-dragon-fruit", "papaya-powder", "dried-banana"],
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
    keywords: ["bulk dried pineapple", "wholesale dried pineapple Indonesia", "dried pineapple supplier", "dried pineapple specifications"],
    specifications: {
      size: "Rings, Core-rings, Tidbits, Chunks, Slices",
      moisture: "15-20%",
      waterActivity: "≤0.60 aw",
      so2Level: "<200ppm SO₂ (sulfite-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Yellow",
      shelfLife: "18-24 months",
      origin: "Lampung, Indonesia",
      brixLevel: ">14° Brix (Naturally sweet-tangy)",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Fruit salads", "Dessert toppings", "Baking", "Cocktails", "Snacking", "Trail mix", "Confectionery"],
    packaging: { bulk: "10kg plastic bag in box", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "15-18 MT",
      containerLoad40ft: "22-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert requirements",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Do you offer cored pineapple rings?", answer: "Yes, we offer both cored rings (with hole) and natural slices with core. Core-rings are most popular for retail packaging." },
      { question: "What are the microbiological standards?", answer: "Total Plate Count <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. All batches tested by ISO 17025 accredited labs." },
      { question: "What is the water activity for dried pineapple?", answer: "Our dried pineapple maintains aw ≤0.60 for optimal shelf stability of 18-24 months under proper storage conditions." },
      { question: "Can you provide sulfite-free options?", answer: "Yes, we offer sulfite-free dried pineapple for clean-label products. Slightly darker color but excellent flavor retention." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "vacuum-pineapple", "pineapple-powder", "dried-banana"],
  },
  {
    id: "dried-avocado",
    name: "Dried Avocado",
    category: "dried-fruits",
    sku: "DFT-DA-001",
    hsCode: "0813.40.90",
    tagline: "Rare superfood innovation",
    description: "Unique dried avocado slices - a rare product offering. Rich, creamy flavor preserved through our special low-temperature drying process.",
    flavorProfile: "Rich, buttery, and creamy with subtle nutty undertones",
    texture: "Firm yet tender, satisfying bite",
    metaTitle: "Wholesale Dried Avocado (Slices) - Rare Superfood from Indonesia",
    metaDescription: "Unique dried avocado slices from Indonesia. Premium superfood innovation. Limited availability. Contact for bulk pricing.",
    keywords: ["dried avocado", "dried avocado wholesale", "avocado chips supplier", "dried avocado specifications"],
    specifications: {
      size: "Diced 1cm, Slices, Pieces",
      moisture: "10-15%",
      waterActivity: "≤0.55 aw",
      so2Level: "None / Low SO₂ options",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Light Green to Cream",
      shelfLife: "12-15 months",
      origin: "West Java, Indonesia",
      fatContent: "15-25%",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated (prevents fat oxidation)",
      grade: "Premium Export Quality",
      storageTemp: "10-15°C (50-59°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "February - August",
      offPeakSeason: "September - January",
      currentStatus: "limited",
    },
    applications: ["Health snacks", "Smoothie ingredients", "Gourmet cooking", "Salad toppings", "Supplement ingredients"],
    packaging: { bulk: "12kg foil liner box (nitrogen flush)", retail: "30g-200g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "8-10 MT",
      containerLoad40ft: "12-15 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Why are storage conditions stricter for dried avocado?", answer: "Due to high fat content (15-25%), dried avocado requires cooler storage (10-15°C) and lower humidity (<55% RH) to prevent fat oxidation and rancidity." },
      { question: "What is the fat content of dried avocado?", answer: "Our dried avocado retains 15-25% fat content, preserving the healthy monounsaturated fats that make avocado a superfood." },
      { question: "Why is the TPC limit stricter for dried avocado?", answer: "Higher fat content products require stricter microbial controls. We maintain TPC <10⁴ CFU/g (10x stricter than standard dried fruits)." },
      { question: "Is dried avocado available year-round?", answer: "Peak availability is February-August. We can fulfill orders year-round but recommend advance booking for off-peak season." },
    ],
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "dried-jackfruit", "dried-mango", "avocado-powder"],
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
    keywords: ["bulk dried mango", "wholesale dried mango Indonesia", "dried mango supplier", "organic dried mango", "dried mango water activity"],
    specifications: {
      size: "Slices 2cm, Chunks, Strips, Dices",
      moisture: "15-20%",
      waterActivity: "≤0.60 aw",
      so2Level: "<150ppm SO₂ (sulfite-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Deep Orange to Yellow",
      shelfLife: "18-24 months",
      origin: "East Java, Indonesia",
      brixLevel: ">14° Brix (Naturally sweet)",
      additives: "Preservative-free / Sulfite-free options",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "October - February",
      offPeakSeason: "March - September",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Trail mix", "Smoothies", "Baking", "Ice cream toppings", "Cereal & Muesli", "Confectionery"],
    packaging: { bulk: "10-12.5kg carton with PE liner", retail: "50g-500g stand-up pouches (OEM available)", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "15-18 MT",
      containerLoad40ft: "22-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert requirements",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Can you provide Organic Certification?", answer: "Yes, we offer USDA Organic and EU Organic certified dried mango. Full traceability from farm to export." },
      { question: "What is transit time to USA/Europe?", answer: "Ocean freight: USA West Coast ~25-30 days, Europe (Rotterdam/Hamburg) ~28-35 days. Air freight: 3-5 days." },
      { question: "Do you offer sulfite-free options?", answer: "Yes, we have both conventional and sulfite-free/preservative-free options. Sulfite-free has slightly darker color but excellent flavor." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw for 18-24 month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "vacuum-mango", "mango-powder", "dried-banana"],
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
    keywords: ["dried dragon fruit", "dried pitaya wholesale", "dragon fruit supplier Indonesia", "dried dragon fruit specifications"],
    specifications: {
      size: "Chunks 1-2cm, Slices, Chips",
      moisture: "15-20%",
      waterActivity: "≤0.60 aw",
      so2Level: "<150ppm SO₂ (preservative-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Deep Magenta (Red) / White",
      shelfLife: "18-24 months",
      origin: "Banyuwangi, Indonesia",
      brixLevel: ">10° Brix (Subtly sweet)",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Smoothie bowls", "Decorative garnish", "Health snacks", "Breakfast cereals", "Natural coloring", "Confectionery"],
    packaging: { bulk: "12.5kg carton with nitrogen flush", retail: "30g-250g stand-up pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-15 MT",
      containerLoad40ft: "18-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Do you offer both red and white dragon fruit?", answer: "Yes, we offer both red-fleshed (magenta) and white-fleshed dried dragon fruit. Red variety has more vibrant color for visual applications." },
      { question: "Is the color natural or added?", answer: "100% natural color from the fruit. No artificial colorings added. Red dragon fruit contains natural betacyanins (antioxidants)." },
      { question: "What are the microbiological standards?", answer: "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw." },
      { question: "Why is nitrogen flush packaging used?", answer: "Nitrogen flush prevents oxidation and preserves the vibrant natural color. Essential for maintaining visual appeal in retail applications." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-snake-fruit", "dragon-fruit-powder"],
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
    keywords: ["dried jackfruit wholesale", "bulk dried jackfruit", "jackfruit supplier Indonesia", "dried jackfruit specifications"],
    specifications: {
      size: "Shreds 2-3cm, Strips, Pieces, Chips",
      moisture: "18-22%",
      waterActivity: "≤0.60 aw",
      so2Level: "<100ppm SO₂ (preservative-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Yellow",
      shelfLife: "18-24 months",
      origin: "Central Java, Indonesia",
      brixLevel: ">18° Brix (Naturally very sweet)",
      additives: "Preservative-free options available",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "January - April, August - October",
      offPeakSeason: "May - July, November - December",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Vegan meat alternative", "Baking", "Trail mix", "Confectionery", "Ice cream inclusions"],
    packaging: { bulk: "10kg vacuum bag", retail: "50g-400g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "14-16 MT",
      containerLoad40ft: "20-24 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Is dried jackfruit suitable for vegan meat alternatives?", answer: "Yes, our dried jackfruit has a fibrous texture ideal for pulled-pork style applications. Popular with vegan food manufacturers." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw for 18-24 month shelf life." },
      { question: "Why is vacuum packaging used?", answer: "Vacuum packaging prevents oxidation and maintains the chewy texture. Also extends shelf life by reducing oxygen exposure." },
      { question: "Do you offer preservative-free options?", answer: "Yes, we offer both conventional and preservative-free dried jackfruit. No artificial additives or sulfites in preservative-free version." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-breadfruit", "jackfruit-powder"],
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
    keywords: ["desiccated coconut wholesale", "coconut chips bulk", "coconut supplier Indonesia", "desiccated coconut specifications"],
    specifications: {
      size: "Shreds 0.5-1cm, Desiccated, Chips, Flakes",
      moisture: "3-7%",
      waterActivity: "≤0.50 aw",
      so2Level: "None",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Pure White",
      shelfLife: "18-24 months",
      origin: "Sulawesi, Indonesia",
      oilContent: "60-65%",
      fatContent: "60-65%",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Drum-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Confectionery", "Cooking", "Snacking", "Beverages", "Health products", "Cosmetics"],
    packaging: { bulk: "25kg PP bag with PE liner", retail: "100g-1kg pouches", custom: true },
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
    logistics: {
      portOfLoading: "Makassar, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "18-20 MT",
      containerLoad40ft: "25-28 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What grades of desiccated coconut are available?", answer: "We offer Fine (mesh 60), Medium (mesh 40), Chips, and Flakes. Each grade suits different applications - fine for baking, chips for snacking." },
      { question: "Why is the TPC limit stricter for coconut?", answer: "Due to high fat content (60-65%), coconut requires stricter microbial controls. We maintain TPC <10⁴ CFU/g to ensure product stability." },
      { question: "What is the water activity for desiccated coconut?", answer: "Our desiccated coconut maintains aw ≤0.50 - lower than other dried fruits due to the low moisture requirement for this product." },
      { question: "Is this product Kosher certified?", answer: "Yes, our desiccated coconut is Kosher certified in addition to USDA Organic, EU Organic, HACCP, and Halal certifications." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal", "Kosher"],
    isOrganic: true,
    relatedProducts: ["dried-avocado", "dried-breadfruit", "dried-jackfruit", "coconut-powder", "dried-banana"],
  },
  {
    id: "dried-banana",
    name: "Dried Banana",
    category: "dried-fruits",
    sku: "DFT-DB-001",
    hsCode: "0803.90.00",
    tagline: "Classic tropical sweetness",
    description: "Premium dried banana slices and chips from Indonesian Cavendish and local Pisang Raja varieties. Sweet, chewy texture perfect for snacking, baking, and trail mixes. Available in various cuts and sweetness levels.",
    flavorProfile: "Naturally sweet, caramelized banana with honey notes",
    texture: "Soft and chewy to semi-crisp depending on moisture",
    metaTitle: "Wholesale Dried Banana - Bulk Export from Indonesia | Premium Quality",
    metaDescription: "Premium dried banana from Indonesia. Chewy texture, natural sweetness. USDA/EU Organic certified. Bulk 10-12.5kg cartons. Direct from manufacturer.",
    keywords: ["dried banana wholesale", "dried banana supplier", "banana chips bulk", "dried fruit Indonesia", "organic dried banana"],
    specifications: {
      size: "Slices 1cm, Chips, Coins, Dices",
      moisture: "18-25%",
      waterActivity: "≤0.60 aw",
      so2Level: "<200ppm SO₂ (sulfite-free available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Yellow to Light Brown",
      shelfLife: "18-24 months",
      origin: "Lampung, Indonesia",
      brixLevel: ">16° Brix",
      additives: "Preservative-free options available",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Slow dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Trail mix", "Baking", "Breakfast cereals", "Chocolate coating", "Granola bars", "Baby food"],
    packaging: { bulk: "10-12.5kg carton with PE liner", retail: "50g-500g stand-up pouches", custom: true },
    pricing: {
      fobBase: "From $4.50/kg FOB",
      moq: "1 ton",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "1 - 5 Tons", priceRange: "$5.50 - $6.50/kg" },
        { volume: "5 - 10 Tons", priceRange: "$4.50 - $5.50/kg" },
        { volume: "Full Container (>10T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "15-18 MT",
      containerLoad40ft: "22-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert requirements",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What banana varieties do you use?", answer: "We use Cavendish for consistent flavor and local Pisang Raja for premium sweetness. Variety can be specified for large orders." },
      { question: "Are sulfite-free options available?", answer: "Yes, we offer sulfite-free dried banana for clean-label products. Slightly shorter shelf life (12-18 months) but meets organic and natural requirements." },
      { question: "What is the difference between soft and crisp texture?", answer: "Moisture 20-25% gives soft, chewy texture for snacking. Moisture 12-18% gives semi-crisp texture for cereals and trail mix. Specify your preference." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw for 18-24 month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "dried-mango", "vacuum-banana", "banana-powder"],
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
    keywords: ["papaya powder wholesale", "dried papaya powder", "fruit powder supplier", "papaya powder specifications"],
    specifications: {
      particleSize: "60-100 mesh (149-250 microns)",
      meshSize: "60-100 mesh",
      moisture: "5-8%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Orange to Golden",
      shelfLife: "24+ months",
      origin: "Central Java, Indonesia",
      additives: "No additives - 100% pure fruit",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Smoothies", "Baking", "Baby food", "Supplements", "Beverages", "Natural flavoring", "Cosmetics"],
    packaging: { bulk: "20kg multi-layer bag with PE liner", retail: "100g-500g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-14 MT",
      containerLoad40ft: "18-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What particle size options are available?", answer: "Standard is 60-100 mesh (149-250 microns). We can provide finer grinding up to 200 mesh for specialized applications like supplements or beverages." },
      { question: "Is this powder spray-dried or drum-dried?", answer: "We use drum drying which preserves more nutrients and flavor compared to spray drying. No maltodextrin or carriers are added - 100% pure fruit." },
      { question: "What is the papain enzyme content?", answer: "Our papaya powder retains natural papain enzyme activity. Contact us for specific enzyme activity specifications if required for your application." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 24+ month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["pineapple-powder", "mango-powder", "dried-papaya", "banana-powder", "avocado-powder"],
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
    keywords: ["pineapple powder wholesale", "dried pineapple powder", "fruit powder supplier", "pineapple powder specifications"],
    specifications: {
      particleSize: "80-120 mesh (125-177 microns)",
      meshSize: "80-120 mesh",
      moisture: "4-7%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Light Yellow",
      shelfLife: "24+ months",
      origin: "Lampung, Indonesia",
      additives: "No additives - 100% pure fruit",
      foreignMatter: "0%",
      processingMethod: "Drum dehydrated",
      grade: "Food Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Baking", "Confectionery", "Smoothies", "Natural flavoring", "Ice cream", "Baby food"],
    packaging: { bulk: "25kg carton with liner", retail: "100g-500g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-14 MT",
      containerLoad40ft: "18-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What is the bromelain enzyme content?", answer: "Our pineapple powder retains natural bromelain enzyme activity from fresh pineapples. Contact us for specific enzyme activity specifications." },
      { question: "What particle size is best for beverages?", answer: "For instant beverages, we recommend 80-120 mesh for optimal dissolution. Finer grinding available upon request." },
      { question: "Is maltodextrin or carrier added?", answer: "No, our pineapple powder is 100% pure fruit with no maltodextrin, carriers, or fillers. True fruit powder." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 24+ month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "mango-powder", "dried-pineapple", "banana-powder"],
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
    keywords: ["mango powder wholesale", "dried mango powder", "fruit powder supplier Indonesia", "mango powder specifications"],
    specifications: {
      particleSize: "80-120 mesh (125-177 microns)",
      meshSize: "80-120 mesh",
      moisture: "4-7%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Deep Orange to Yellow",
      shelfLife: "24+ months",
      origin: "East Java, Indonesia",
      additives: "No additives - 100% pure fruit",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "October - February (peak harvest)",
      offPeakSeason: "March - September",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Ice cream", "Baking", "Smoothies", "Confectionery", "Yogurt flavoring", "Baby food"],
    packaging: { bulk: "20kg multi-wall bag", retail: "100g-500g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-14 MT",
      containerLoad40ft: "18-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What mango varieties are used?", answer: "We use premium Gedong and Harum Manis mangoes known for their intense sweetness and aromatic profile - distinctive Indonesian varieties." },
      { question: "Is the powder color natural?", answer: "Yes, 100% natural color from the fruit. No artificial colorings added. Color intensity varies with mango variety and ripeness." },
      { question: "What particle size is available?", answer: "Standard is 80-120 mesh (125-177 microns). Finer grinding up to 200 mesh available for supplement and instant beverage applications." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 24+ month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal", "Kosher"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "pineapple-powder", "dried-mango", "banana-powder"],
  },
  {
    id: "dragon-fruit-powder",
    name: "Dragon Fruit Powder",
    category: "powdered-fruits",
    sku: "DFT-DFP-001",
    hsCode: "1106.30.00",
    tagline: "Vibrant natural coloring",
    description: "Stunning pink dragon fruit powder. Natural food coloring with mild sweetness, perfect for smoothie bowls, confectionery, and clean-label products requiring natural pink/magenta hues.",
    flavorProfile: "Mildly sweet with subtle berry notes",
    texture: "Fine, vibrant colored powder",
    metaTitle: "Wholesale Dragon Fruit Powder - Natural Pink Coloring from Indonesia",
    metaDescription: "Vibrant dragon fruit powder from Indonesia. Natural pink coloring. USDA/EU Organic certified. Perfect for food & beverage.",
    keywords: ["dragon fruit powder", "pitaya powder wholesale", "natural pink food coloring", "betacyanin natural colorant"],
    specifications: {
      particleSize: "60-100 mesh (149-250 microns)",
      meshSize: "60-100 mesh",
      moisture: "5-8%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Deep Magenta to Pink (natural betacyanin)",
      shelfLife: "24+ months",
      origin: "Banyuwangi, Indonesia",
      additives: "No additives - 100% pure fruit",
      foreignMatter: "0%",
      processingMethod: "Freeze-dried / Drum-dried",
      grade: "Food Grade / Natural Coloring Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Natural coloring", "Smoothie bowls", "Confectionery", "Beverages", "Desserts", "Ice cream", "Cosmetics"],
    packaging: { bulk: "10-20kg multilayer bags with moisture barrier", retail: "50g-300g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "10-12 MT",
      containerLoad40ft: "16-20 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; Natural color exempt from certification",
      eu: "Phytosanitary certified; Approved natural colorant (E162 equivalent); MRL compliant",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Is the pink color stable in food applications?", answer: "Betacyanin from dragon fruit is heat-sensitive. Best for cold applications, smoothie bowls, ice cream, and confectionery. For baking, color may shift slightly." },
      { question: "What makes freeze-dried vs drum-dried different?", answer: "Freeze-dried retains brighter color and is more expensive. Drum-dried is cost-effective for high-volume food manufacturing. Both are 100% pure fruit." },
      { question: "Can this replace synthetic food coloring?", answer: "Yes, dragon fruit powder is an excellent natural pink/magenta colorant. FDA exempt from certification, EU approved as E162 equivalent. Clean label friendly." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 24+ month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "mango-powder", "dried-dragon-fruit", "banana-powder"],
  },
  {
    id: "coconut-powder",
    name: "Coconut Powder",
    category: "powdered-fruits",
    sku: "DFT-CP-001",
    hsCode: "1106.30.00",
    tagline: "Creamy tropical versatility",
    description: "Fine coconut powder for beverages, baking, and food manufacturing. Rich coconut flavor and creamy texture. 100% pure coconut with no maltodextrin or carriers.",
    flavorProfile: "Rich, creamy coconut with natural sweetness",
    texture: "Fine, creamy powder",
    metaTitle: "Wholesale Coconut Powder - Bulk Export from Indonesia",
    metaDescription: "Premium coconut powder from Indonesia. Creamy texture. USDA/EU Organic certified. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["coconut powder wholesale", "coconut milk powder", "coconut supplier Indonesia", "coconut cream powder"],
    specifications: {
      particleSize: "100-200 mesh (74-149 microns)",
      meshSize: "100-200 mesh",
      moisture: "2-5%",
      waterActivity: "≤0.45 aw",
      totalPlateCount: "<10³ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Pure White to Cream",
      shelfLife: "18-24 months",
      origin: "Sulawesi, Indonesia",
      oilContent: "60-65%",
      fatContent: "60-65%",
      additives: "No additives - 100% pure coconut",
      foreignMatter: "0%",
      processingMethod: "Spray-dried",
      grade: "Food Grade",
      storageTemp: "10-18°C (50-64°F)",
      storageHumidity: "<50% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Beverages", "Confectionery", "Cooking", "Smoothies", "Dairy alternatives", "Keto products"],
    packaging: { bulk: "20kg PE bag in box with nitrogen flush", retail: "100g-1kg pouches", custom: true },
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
    logistics: {
      portOfLoading: "Makassar / Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "16-18 MT",
      containerLoad40ft: "24-28 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets allergen labeling requirements (tree nut)",
      eu: "Phytosanitary certified; MRL compliant; Allergen declaration included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What is the fat/oil content?", answer: "Our coconut powder contains 60-65% natural coconut oil. This gives the creamy mouthfeel and rich flavor. Higher fat content than many spray-dried alternatives." },
      { question: "Does this contain maltodextrin or carriers?", answer: "No, our coconut powder is 100% pure coconut with no maltodextrin, carriers, or anti-caking agents. True coconut cream powder." },
      { question: "Is coconut considered an allergen?", answer: "FDA classifies coconut as a tree nut for labeling purposes. We provide allergen declarations for all markets. EU also requires allergen labeling." },
      { question: "What storage conditions prevent rancidity?", answer: "Store at 10-18°C in <50% RH. High fat content requires cool, dark storage. Nitrogen-flushed packaging recommended for extended shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal", "Kosher"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "papaya-powder", "mango-powder", "avocado-powder", "banana-powder"],
  },
  {
    id: "jackfruit-powder",
    name: "Jackfruit Powder",
    category: "powdered-fruits",
    sku: "DFT-JP-001",
    hsCode: "1106.30.00",
    tagline: "Unique tropical essence",
    description: "Natural jackfruit powder with intense tropical aroma. Ideal for beverages, desserts, and specialty food products. Slow drum-dried to preserve distinctive aromatic compounds.",
    flavorProfile: "Sweet, intensely aromatic with tropical complexity",
    texture: "Fine, aromatic powder",
    metaTitle: "Wholesale Jackfruit Powder - Bulk Export from Indonesia",
    metaDescription: "Premium jackfruit powder from Indonesia. Unique tropical flavor. USDA/EU Organic certified. Bulk 15-20kg bags.",
    keywords: ["jackfruit powder wholesale", "dried jackfruit powder", "fruit powder supplier", "jackfruit powder specifications"],
    specifications: {
      particleSize: "80-120 mesh (125-177 microns)",
      meshSize: "80-120 mesh",
      moisture: "6-9%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Golden Yellow",
      shelfLife: "18-24 months",
      origin: "Central Java, Indonesia",
      additives: "No additives - 100% pure fruit",
      foreignMatter: "0%",
      processingMethod: "Slow drum-dried",
      grade: "Food Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "January - April, August - October",
      offPeakSeason: "May - July, November - December",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Desserts", "Baking", "Ice cream", "Confectionery", "Smoothies", "Flavor concentrates"],
    packaging: { bulk: "20kg vacuum bag with PE liner", retail: "100g-500g pouches", custom: true },
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
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-14 MT",
      containerLoad40ft: "18-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "How is the strong jackfruit aroma preserved?", answer: "Slow drum-drying at low temperature preserves the volatile aromatic compounds. Our process maintains the distinctive tropical aroma better than spray-drying." },
      { question: "What applications work best for jackfruit powder?", answer: "Excellent for ice cream, beverages, baking, and confectionery. The intense aroma works well in flavor concentrates and specialty desserts." },
      { question: "Is jackfruit powder available in larger mesh sizes?", answer: "Standard is 80-120 mesh. We can provide coarser 40-60 mesh for applications requiring texture, or finer 200 mesh for supplements." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 18-24 month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "papaya-powder", "mango-powder", "banana-powder"],
  },
  
  // ==================
  // NEW POWDERED FRUITS
  // ==================
  {
    id: "avocado-powder",
    name: "Avocado Powder",
    category: "powdered-fruits",
    sku: "DFT-AVP-001",
    hsCode: "1106.30.00",
    tagline: "Premium superfood powder",
    description: "Fine avocado powder made from premium Indonesian Hass and local avocado varieties. Rich in healthy fats and nutrients, perfect for smoothies, supplements, cosmetics, and food manufacturing applications.",
    flavorProfile: "Mild, creamy with subtle nutty notes",
    texture: "Fine, creamy powder with natural fat content",
    metaTitle: "Wholesale Avocado Powder - Bulk Superfood Export from Indonesia",
    metaDescription: "Premium avocado powder from Indonesia. Rich in healthy fats. Perfect for smoothies, supplements, cosmetics. Bulk 12-20kg bags.",
    keywords: ["avocado powder wholesale", "avocado powder bulk", "superfood powder supplier", "avocado powder Indonesia"],
    specifications: {
      particleSize: "100-150 mesh (105-149 microns)",
      meshSize: "100-150 mesh",
      moisture: "3-6%",
      waterActivity: "≤0.45 aw",
      totalPlateCount: "<10³ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Light Green to Olive",
      shelfLife: "18-24 months",
      origin: "West Java, Indonesia",
      fatContent: "25-35%",
      oilContent: "25-35%",
      additives: "No additives - 100% pure avocado",
      foreignMatter: "0%",
      processingMethod: "Freeze-dried / Spray-dried",
      grade: "Food Grade / Cosmetic Grade available",
      storageTemp: "10-15°C (50-59°F)",
      storageHumidity: "<50% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "November - March (peak harvest)",
      offPeakSeason: "April - October",
      currentStatus: "in-stock",
    },
    applications: ["Smoothies", "Supplements", "Cosmetics", "Face masks", "Food manufacturing", "Baby food", "Protein shakes"],
    packaging: { bulk: "12-20kg foil-lined box with nitrogen flush", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $28.00/kg FOB",
      moq: "300 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 500 kg", priceRange: "$32.00 - $36.00/kg" },
        { volume: "500 kg - 2 Tons", priceRange: "$28.00 - $32.00/kg" },
        { volume: "Large orders (>2T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "8-10 MT",
      containerLoad40ft: "14-18 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; GRAS for food applications",
      eu: "Phytosanitary certified; MRL compliant; Cosmetic grade meets EU Regulation 1223/2009",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "What is the fat content and composition?", answer: "Our avocado powder contains 25-35% healthy fats, primarily monounsaturated oleic acid. This makes it excellent for keto, paleo, and health-focused applications." },
      { question: "Is this suitable for cosmetic applications?", answer: "Yes, we offer cosmetic-grade avocado powder meeting EU Regulation 1223/2009. Popular for face masks, hair treatments, and skincare formulations." },
      { question: "How do you prevent oxidation of the fats?", answer: "Nitrogen-flushed packaging, strict temperature control, and low water activity (≤0.45 aw) prevent rancidity. Store at 10-15°C in dark conditions." },
      { question: "What processing methods are available?", answer: "Freeze-dried retains more nutrients and brighter color (premium). Spray-dried is cost-effective for high-volume applications. Both are 100% pure avocado." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["coconut-powder", "papaya-powder", "dried-avocado"],
  },
  {
    id: "banana-powder",
    name: "Banana Powder",
    category: "powdered-fruits",
    sku: "DFT-BP-001",
    hsCode: "1106.30.00",
    tagline: "Natural energy and sweetness",
    description: "Premium drum-dried banana powder from Indonesian Cavendish bananas. Natural energy boost with potassium and fiber. Perfect for beverages, baby food, baking, and natural sweetening applications.",
    flavorProfile: "Sweet, rich banana with natural caramel notes",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Banana Powder - Bulk Export from Indonesia | Natural Energy",
    metaDescription: "Premium banana powder from Indonesia. Natural sweetness, rich in potassium. USDA/EU Organic certified. Bulk 20-25kg bags.",
    keywords: ["banana powder wholesale", "banana powder bulk", "fruit powder supplier", "banana powder Indonesia", "organic banana powder"],
    specifications: {
      particleSize: "60-100 mesh (149-250 microns)",
      meshSize: "60-100 mesh",
      moisture: "5-8%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "Cream to Light Yellow",
      shelfLife: "24+ months",
      origin: "Lampung, Indonesia",
      additives: "No additives - 100% pure banana",
      foreignMatter: "0%",
      processingMethod: "Drum-dried",
      grade: "Food Grade",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<55% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Beverages", "Baby food", "Baking", "Smoothies", "Natural sweetening", "Protein shakes", "Ice cream", "Breakfast cereals"],
    packaging: { bulk: "20-25kg multi-layer bag with PE liner", retail: "100g-500g pouches", custom: true },
    pricing: {
      fobBase: "From $6.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$7.50 - $9.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$6.00 - $7.50/kg" },
        { volume: "Large orders (>5T)", priceRange: "Contact for quote" },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    logistics: {
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "14-16 MT",
      containerLoad40ft: "20-24 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      { question: "Is banana powder good for baby food?", answer: "Yes, our banana powder is widely used in baby food manufacturing. No additives, natural sweetness, and easily digestible. Meets strict infant food standards." },
      { question: "Can banana powder replace sugar in recipes?", answer: "Banana powder provides natural sweetness with fiber and nutrients. Use 1:1 ratio for mild sweetening. Popular in clean-label products." },
      { question: "What is the potassium content?", answer: "Banana powder retains approximately 1200-1500mg potassium per 100g, making it valuable for sports nutrition and health food applications." },
      { question: "What are the microbiological specifications?", answer: "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 24+ month shelf life." },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["papaya-powder", "pineapple-powder", "mango-powder", "dried-banana"],
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
    tagline: "Premium Indonesian ginger for B2B buyers",
    description: "High-quality dried ginger in whole, splits, slices, and flakes. Strong aromatic flavor from Java's finest ginger varieties (Zingiber officinale). Ideal for tea blends, confectionery, spice processing, and pharmaceutical applications. Sun-dried for optimal volatile oil retention.",
    flavorProfile: "Strong, spicy-warm with zesty citrus notes and pungent finish",
    texture: "Firm, fibrous slices with clean break",
    metaTitle: "Wholesale Dried Ginger (Whole/Splits/Slices) - Bulk Export from Indonesia",
    metaDescription: "Premium dried ginger from Indonesia. 1.5-3% volatile oil, 1-2.5% gingerol. USDA/EU Organic certified. 12-18 MT per 20ft container. Direct from manufacturer.",
    keywords: ["dried ginger wholesale", "Indonesian ginger", "ginger supplier", "bulk ginger export", "ginger slices B2B"],
    specifications: {
      size: "Whole, Splits, Slices, Flakes",
      moisture: "≤12%",
      color: "Golden-Yellow to Light Brown",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      volatileOil: "1.5-3%",
      gingerolContent: "1-2.5%",
      totalAsh: "≤8%",
      acidInsolubleAsh: "≤2%",
      defects: "≤2%",
      foreignMatter: "≤1%",
      purity: "Free of off-odors, PAH, pesticide residues",
      processingMethod: "Sun-dried (traditional)",
      grade: "Grade A Export Quality",
      salmonella: "Absent in 25g",
      eColi: "Absent",
      aflatoxins: "<5 ppb (EU compliant)",
      additives: "None",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Tea blends", "Confectionery", "Spice processing", "Herbal products", "Beverages", "Pharmaceuticals", "Essential oil extraction"],
    packaging: { 
      bulk: "25-50kg PP woven bags with HDPE liner; ventilated for moisture control", 
      retail: "100g-500g vacuum pouches", 
      custom: true 
    },
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
    logistics: {
      portOfLoading: "Semarang / Tanjung Perak (Surabaya), Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "12-18 MT",
      containerLoad40ft: "24-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert 99-41 standards",
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); aflatoxins <5 ppb",
      global: "CODEX CXS 343-2021 compliant; ISO 17025 lab tested",
    },
    faqs: [
      {
        question: "What testing do you provide for dried ginger?",
        answer: "We provide Certificate of Analysis (CoA) with each shipment including volatile oil content (1.5-3%), gingerol levels, moisture, heavy metals, pesticide residues, and microbial tests. Testing is done by ISO 17025 accredited labs."
      },
      {
        question: "How many tons fit in a 40ft container?",
        answer: "A 40ft container can hold 24-26 MT of dried ginger in 25-50kg bags. For 20ft containers, capacity is 12-18 MT depending on packaging density."
      },
      {
        question: "What certifications are included for EU/US import?",
        answer: "We provide Phytosanitary Certificate, Certificate of Origin, HACCP documentation, and organic certificates (USDA/EU). Fumigation certificate (methyl bromide free) available upon request."
      },
      {
        question: "What is the difference between Grade A and Grade B ginger?",
        answer: "Grade A features uniform golden color, premium aroma, lower defects (<2%), and higher volatile oil (>2%). Grade B is cost-effective with slightly higher defects, suitable for extraction or processing applications."
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["ginger-powder", "dried-turmeric", "turmeric-powder"],
  },
  {
    id: "ginger-powder",
    name: "Ginger Powder",
    category: "ginger-turmeric",
    sku: "DFT-GP-001",
    hsCode: "0910.12.00",
    tagline: "Concentrated ginger flavor for food manufacturing",
    description: "Fine ginger powder made from premium Grade A dried ginger. 80-100 mesh particle size ideal for uniform blending in spice mixes, beverages, and supplements. Steam-treated for microbial reduction without irradiation. ISO 1003:2025 compliant.",
    flavorProfile: "Concentrated spicy-warm with intense aromatic pungency",
    texture: "Fine, free-flowing powder",
    metaTitle: "Wholesale Ginger Powder (80-100 Mesh) - Bulk Export from Indonesia",
    metaDescription: "Premium ginger powder from Indonesia. 80-100 mesh, 5-7% gingerol, steam-treated. USDA/EU Organic certified. Bulk 12.5-25kg bags. ISO 1003 compliant.",
    keywords: ["ginger powder wholesale", "Indonesian ginger powder", "organic ginger powder", "bulk ginger powder", "ginger powder B2B"],
    specifications: {
      particleSize: "80-100 mesh",
      meshSize: "80-100 mesh",
      moisture: "≤8-10%",
      color: "Light Yellow to Cream",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      volatileOil: "1-3%",
      gingerolContent: "5-7%",
      totalAsh: "≤6-8%",
      acidInsolubleAsh: "≤1-2%",
      fatContent: "5-8%",
      foreignMatter: "0%",
      processingMethod: "Hammer-milled from Grade A dried ginger; steam-treated",
      grade: "Food Grade (ISO 1003:2025 compliant)",
      salmonella: "Absent in 25g",
      eColi: "Absent",
      aflatoxins: "<10 ppb",
      additives: "None - 100% pure ginger",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Baking", "Beverages", "Supplements", "Spice blends", "Health products", "Pharmaceuticals", "Confectionery"],
    packaging: { 
      bulk: "12.5-25kg multi-wall laminated bags with PE/foil liner; heat-sealed", 
      retail: "50g-500g jars/pouches", 
      custom: true 
    },
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
    logistics: {
      portOfLoading: "Semarang / Tanjung Perak (Surabaya), Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "14-16 MT",
      containerLoad40ft: "20-22 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; steam-treated (no irradiation)",
      eu: "Phytosanitary certified; MRL compliant; steam treatment preferred",
      global: "ISO 1003:2025 compliant; CODEX standards met",
    },
    faqs: [
      {
        question: "What particle size is best for food manufacturing?",
        answer: "80-100 mesh is ideal for uniform blending in spice mixes, beverages, and supplements. Finer grinding (120+ mesh) available for specialized applications upon request."
      },
      {
        question: "How do you prevent moisture and clumping?",
        answer: "We use multi-layer laminated bags with HDPE/foil liners maintaining moisture below 10%. Silica gel sachets included for humid climate destinations."
      },
      {
        question: "Is your ginger powder steam-treated or irradiated?",
        answer: "We use steam treatment for microbial reduction - preferred by EU and organic buyers. Irradiation is NOT used. This preserves volatile oils and complies with organic standards."
      },
      {
        question: "What is the difference between 80 mesh and 100 mesh?",
        answer: "100 mesh is finer and dissolves more easily in beverages. 80 mesh provides better texture for baking and spice blends. Both meet food-grade standards."
      },
    ],
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
    tagline: "High-curcumin golden superfood for B2B buyers",
    description: "Premium dried turmeric fingers (polished), bulbs, splits, and slices. High curcumin content (3-5% HPLC tested) from Java's best Curcuma longa. Boiled, sun-dried, and polished per traditional methods. Chrome test negative - no synthetic dyes. Ideal for supplements, spice blends, and extraction.",
    flavorProfile: "Earthy, slightly bitter with warm peppery notes and woody undertones",
    texture: "Hard, dense fingers with uniform deep orange color",
    metaTitle: "Wholesale Dried Turmeric (Fingers/Polished) - High Curcumin from Indonesia",
    metaDescription: "Premium dried turmeric from Indonesia. 3-5% curcumin (HPLC tested), chrome test negative. USDA/EU Organic certified. 18-25 MT per container. Direct from manufacturer.",
    keywords: ["dried turmeric wholesale", "Indonesian turmeric", "high curcumin turmeric", "turmeric fingers bulk", "organic turmeric supplier"],
    specifications: {
      size: "Fingers (polished), Bulbs, Splits, Slices",
      moisture: "≤10-12%",
      color: "Deep Orange-Yellow (uniform)",
      shelfLife: "24 months",
      origin: "Central Java, Indonesia",
      curcuminContent: "3-5% (HPLC tested)",
      totalAsh: "≤9%",
      acidInsolubleAsh: "≤1.5%",
      purity: "99.5%",
      starchContent: "≤50%",
      chromeTest: "Negative (no synthetic dyes)",
      defects: "≤1%",
      foreignMatter: "≤2%",
      processingMethod: "Boiled, Sun-dried, Polished",
      grade: "Grade A / FAQ Export Quality",
      salmonella: "Absent in 25g",
      eColi: "Absent",
      aflatoxins: "<5 ppb (EU compliant)",
      testingMethod: "HPLC for curcumin content",
      additives: "None",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Curry blends", "Health supplements", "Tea", "Natural coloring", "Beverages", "Pharmaceuticals", "Curcumin extraction"],
    packaging: { 
      bulk: "25kg PP woven bags with PE liner; optional vacuum seal", 
      retail: "100g-500g pouches", 
      custom: true 
    },
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
    logistics: {
      portOfLoading: "Semarang / Tanjung Perak (Surabaya), Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "18 MT",
      containerLoad40ft: "22-25 MT (900-1000 x 25kg bags)",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; lead <2.5 ppm per Import Alert 99-41",
      eu: "Phytosanitary certified; aflatoxins <5 ppb; TRACES registration supported",
      global: "ISO 5562 (turmeric) compliant; CODEX standards met",
    },
    faqs: [
      {
        question: "What curcumin levels do you guarantee?",
        answer: "Our Indonesian turmeric consistently delivers 3-5% curcumin content, tested by HPLC method. Each shipment includes Certificate of Analysis with exact curcumin percentage."
      },
      {
        question: "How do you verify there's no adulteration?",
        answer: "We perform chrome test (negative result required), starch content analysis, and third-party lab testing for synthetic dyes. Lead content verified below 2.5 ppm for US FDA compliance."
      },
      {
        question: "What documents are needed for EU import?",
        answer: "EU requires: Phytosanitary Certificate, Health Certificate, Certificate of Analysis (curcumin, heavy metals, aflatoxins <5 ppb), Certificate of Origin. We provide all documents and TRACES registration support."
      },
      {
        question: "Can you supply premium high-curcumin grades?",
        answer: "Yes, we can source specialty grades with 5-7% curcumin for nutraceutical applications. Contact us for custom requirements and lead times."
      },
    ],
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
    tagline: "High-curcumin golden powder for supplements & food",
    description: "Fine turmeric powder with high curcumin content (3-5% HPLC tested). Bright orange-yellow color (ASTA >200). 80-200 mesh particle sizes for food, beverage, and nutraceutical applications. Chrome test negative - no adulterants. Perfect for supplements, golden milk, curry blends, and natural coloring.",
    flavorProfile: "Earthy, warm, slightly bitter with mustard-like depth and aromatic complexity",
    texture: "Fine, vibrant golden powder with excellent solubility",
    metaTitle: "Wholesale Turmeric Powder (80-200 Mesh) - High Curcumin from Indonesia",
    metaDescription: "Premium turmeric powder from Indonesia. 3-5% curcumin (HPLC), ASTA >200 color. Food grade & nutraceutical grade. Bulk 25kg bags. Direct from manufacturer.",
    keywords: ["turmeric powder wholesale", "high curcumin powder", "organic turmeric powder", "turmeric powder B2B", "nutraceutical turmeric"],
    specifications: {
      particleSize: "80-200 mesh",
      meshSize: "80-200 mesh",
      moisture: "≤10%",
      color: "Bright Orange-Yellow (ASTA >200)",
      astaColor: ">200",
      shelfLife: "12-24 months (proper storage)",
      origin: "Central Java, Indonesia",
      curcuminContent: "3-5% (HPLC tested)",
      totalAsh: "≤6.5%",
      acidInsolubleAsh: "≤0.6%",
      purity: "No adulterants (starch, dyes)",
      chromeTest: "Negative",
      foreignMatter: "0%",
      processingMethod: "Hammer-milled from Grade A fingers",
      grade: "Food Grade / Nutraceutical Grade available",
      salmonella: "Absent in 25g",
      eColi: "Absent",
      aflatoxins: "<5 ppb",
      testingMethod: "HPLC for curcumin; ISO 17025 lab certified",
      additives: "None - 100% pure turmeric",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Curry powder", "Golden milk", "Supplements & capsules", "Natural coloring", "Health products", "Beverages", "Cosmetics"],
    packaging: { 
      bulk: "25kg laminated kraft bags with foil liner; airtight seal", 
      retail: "50g-500g jars/pouches", 
      custom: true 
    },
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
    logistics: {
      portOfLoading: "Semarang / Tanjung Perak (Surabaya), Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "14-16 MT",
      containerLoad40ft: "18-20 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant; meets Import Alert 99-41 (lead <2.5 ppm)",
      eu: "Phytosanitary certified; aflatoxins <5 ppb; no irradiation",
      global: "ISO 5562 compliant; CODEX CXS 343-2021 standards",
    },
    faqs: [
      {
        question: "What's the difference between food grade and nutraceutical grade?",
        answer: "Food grade (3-5% curcumin) suits curry blends, coloring, and beverages. Nutraceutical grade (5%+ curcumin) is for supplements and health products with additional heavy metal and pesticide testing per pharmacopeia standards."
      },
      {
        question: "What particle size do supplement manufacturers need?",
        answer: "Supplement capsules typically require 100-200 mesh for optimal solubility and bioavailability. Food coloring applications work well with 80-100 mesh for even dispersion."
      },
      {
        question: "How do you ensure consistent curcumin levels batch to batch?",
        answer: "We source from verified farms in Central Java, test incoming raw materials, and perform HPLC testing on finished powder. Each batch comes with Certificate of Analysis guaranteeing spec compliance."
      },
      {
        question: "What FDA requirements apply to US imports?",
        answer: "US imports require: FDA Facility Registration, Prior Notice filing (72 hrs), FSVP compliance. We provide COA for lead (<2.5 ppm), aflatoxins, and pathogen testing per FDA Import Alert 99-41 standards."
      },
    ],
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

// Storage-related FAQs (used on Storage Guide page)
export const storageFAQs = [
  { 
    question: "What is water activity (aw) and why does it matter?", 
    answer: "Water activity measures moisture available for microbial growth. Dried fruits with aw ≤0.60 prevent bacteria and mold growth, extending shelf life to 18-24 months." 
  },
  { 
    question: "What temperature should I store dried fruits at?", 
    answer: "Most dried fruits should be stored at 10-20°C (50-68°F). Powders require stricter 10-18°C (50-64°F). Avoid temperature fluctuations." 
  },
  { 
    question: "How does humidity affect dried fruit storage?", 
    answer: "High humidity causes moisture reabsorption, leading to mold growth and quality degradation. Keep relative humidity below 60% for dried fruits and below 50% for powders." 
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
