// Product interface and type definitions
export interface Product {
  // Identity
  id: string;
  name: string;
  category: "dried-fruits";
  sku?: string;
  hsCode?: string;

  // Images (optional - uses placeholder if not set)
  images?: {
    main?: string;
    mainAlt?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    gallery?: Array<{ src: string; alt: string }>;
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
    additives?: string;
    foreignMatter?: string;
    processingMethod?: string;
    grade?: string;
    fatContent?: string;
    defects?: string;
    salmonella?: string;
    eColi?: string;
    aflatoxins?: string;
    testingMethod?: string;
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
    name: "Wholesale Bulk Dried Dehydrated Papaya Chunks & Slices",
    metaTitle: "Wholesale Dried Papaya (Slices) - Bulk Export from Indonesia",
    metaDescription:
      "Direct manufacturer of premium dried papaya from Indonesia. USDA/EU Organic certified. Bulk 10-25kg cartons. MOQ 500kg. View specs & pricing.",
    tagline: "Tropical sweetness in every bite",
    description:
      "Premium dried papaya slices made from sun-ripened Indonesian papayas. Natural sweetness with no added sugar options available.",
    pricing: {
      fobBase: "From $7.50/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        {
          volume: "Sample (<5kg)",
          priceRange: "Free (buyer pays shipping)",
        },
        {
          volume: "MOQ - 1 Ton",
          priceRange: "$8.50 - $9.50/kg",
        },
        {
          volume: "1 - 10 Tons",
          priceRange: "$7.50 - $8.50/kg",
        },
        {
          volume: "Full Container (>10T)",
          priceRange: "Contact for quote",
        },
      ],
      samplePolicy: "Free sample available, buyer pays courier",
    },
    certifications: ["HACCP", "Halal", "Kosher"],
    availability: {
      peakSeason: "Year-round (Indonesia)",
      currentStatus: "pre-order",
    },
    specifications: {
      size: "Chunks 1-2cm, Shreds, Slices, Dices",
    },
    applications: ["Breakfast cereals", "Trail mix", "Baked goods", "Smoothie bowls", "Snacking", "Confectionery"],
    packaging: {
      bulk: "10-12.5kg carton with PE liner",
      retail: "50g-500g stand-up pouches (OEM available)",
      custom: true,
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
      {
        question: "What are the microbiological specifications?",
        answer:
          "Our dried papaya meets strict microbiology standards: Total Plate Count <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent, E. coli absent. ISO 17025 lab certified.",
      },
      {
        question: "What is the water activity level?",
        answer:
          "Premium export grade maintains aw ≤0.60 to prevent microbial growth and ensure 18-24 month shelf life. Standard bulk grade is aw ≤0.65.",
      },
      {
        question: "Is dried papaya available without added sugar?",
        answer:
          "Yes, we offer no-sugar-added options using naturally ripe papayas. We also provide sulfite-free options.",
      },
      {
        question: "What storage conditions are required?",
        answer:
          "Store at 10-20°C (50-68°F) in <60% relative humidity. Keep in cool, dry, dark warehouse with pallets off floor to prevent condensation.",
      },
    ],
    relatedProducts: ["dried-pineapple", "dried-mango", "dried-dragon-fruit", "dried-banana"],
  },
  {
    id: "dried-pineapple",
    name: "Dried Pineapple",
    category: "dried-fruits",
    sku: "DFT-DPI-001",
    hsCode: "0813.40.10",
    tagline: "Sweet and tangy tropical delight",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Naturally dried pineapple rings and chunks from premium Cayenne pineapples. Perfect balance of sweet and tangy.",
    flavorProfile: "Vibrant sweet-tangy balance with aromatic pineapple essence",
    texture: "Chewy with slight crispness on edges",
    metaTitle: "Wholesale Dried Pineapple (Rings/Chunks) - Bulk Export from Indonesia",
    metaDescription:
      "Premium dried pineapple from Indonesia. USDA/EU Organic certified. Bulk packaging available. MOQ 500kg. Direct from manufacturer.",
    keywords: [
      "bulk dried pineapple",
      "wholesale dried pineapple Indonesia",
      "dried pineapple supplier",
      "dried pineapple specifications",
    ],
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
        { volume: "MOQ - 1 Ton", priceRange: "$9.50 - $10.50/kg" },
        { volume: "1 - 10 Tons", priceRange: "$8.00 - $9.50/kg" },
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
      {
        question: "Do you offer cored pineapple rings?",
        answer:
          "Yes, we offer both cored rings (with hole) and natural slices with core. Core-rings are most popular for retail packaging.",
      },
      {
        question: "What are the microbiological standards?",
        answer:
          "Total Plate Count <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. All batches tested by ISO 17025 accredited labs.",
      },
      {
        question: "What is the water activity for dried pineapple?",
        answer:
          "Our dried pineapple maintains aw ≤0.60 for optimal shelf stability of 18-24 months under proper storage conditions.",
      },
      {
        question: "Can you provide sulfite-free options?",
        answer:
          "Yes, we offer sulfite-free dried pineapple for clean-label products. Slightly darker color but excellent flavor retention.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-banana", "dried-dragon-fruit"],
  },
  {
    id: "dried-avocado",
    name: "Dried Avocado",
    category: "dried-fruits",
    sku: "DFT-DA-001",
    hsCode: "0813.40.90",
    tagline: "Rare superfood innovation",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Unique dried avocado slices - a rare product offering. Rich, creamy flavor preserved through our special low-temperature drying process.",
    flavorProfile: "Rich, buttery, and creamy with subtle nutty undertones",
    texture: "Firm yet tender, satisfying bite",
    metaTitle: "Wholesale Dried Avocado (Slices) - Rare Superfood from Indonesia",
    metaDescription:
      "Unique dried avocado slices from Indonesia. Premium superfood innovation. Limited availability. Contact for bulk pricing.",
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
    applications: [
      "Health snacks",
      "Smoothie ingredients",
      "Gourmet cooking",
      "Salad toppings",
      "Supplement ingredients",
    ],
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
      {
        question: "Why are storage conditions stricter for dried avocado?",
        answer:
          "Due to high fat content (15-25%), dried avocado requires cooler storage (10-15°C) and lower humidity (<55% RH) to prevent fat oxidation and rancidity.",
      },
      {
        question: "What is the fat content of dried avocado?",
        answer:
          "Our dried avocado retains 15-25% fat content, preserving the healthy monounsaturated fats that make avocado a superfood.",
      },
      {
        question: "Why is the TPC limit stricter for dried avocado?",
        answer:
          "Higher fat content products require stricter microbial controls. We maintain TPC <10⁴ CFU/g (10x stricter than standard dried fruits).",
      },
      {
        question: "Is dried avocado available year-round?",
        answer:
          "Peak availability is February-August. We can fulfill orders year-round but recommend advance booking for off-peak season.",
      },
    ],
    certifications: ["USDA Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-coconut", "dried-jackfruit", "dried-mango", "dried-papaya"],
  },
  {
    id: "dried-mango",
    name: "Dried Mango",
    category: "dried-fruits",
    sku: "DFT-DM-001",
    hsCode: "0813.40.10",
    tagline: "King of tropical dried fruits",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Premium dried mango slices from hand-selected Gedong and Harum Manis mangoes. Intense tropical flavor with naturally high sweetness.",
    flavorProfile: "Intense tropical sweetness with a rich, aromatic fragrance typical of Indonesian mangoes",
    texture: "Soft and chewy, not fibrous",
    metaTitle: "Wholesale Dried Mango (Slices) - Bulk Export from Indonesia",
    metaDescription:
      "Direct manufacturer of premium dried mango from Indonesia. USDA/EU Organic certified. Bulk 10-25kg cartons. MOQ 500kg. View specs & pricing.",
    keywords: [
      "bulk dried mango",
      "wholesale dried mango Indonesia",
      "dried mango supplier",
      "organic dried mango",
      "dried mango water activity",
    ],
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
    applications: [
      "Snacking",
      "Trail mix",
      "Smoothies",
      "Baking",
      "Ice cream toppings",
      "Cereal & Muesli",
      "Confectionery",
    ],
    packaging: {
      bulk: "10-12.5kg carton with PE liner",
      retail: "50g-500g stand-up pouches (OEM available)",
      custom: true,
    },
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
      {
        question: "Can you provide Organic Certification?",
        answer:
          "Yes, we offer USDA Organic and EU Organic certified dried mango. Full traceability from farm to export.",
      },
      {
        question: "What is transit time to USA/Europe?",
        answer:
          "Ocean freight: USA West Coast ~25-30 days, Europe (Rotterdam/Hamburg) ~28-35 days. Air freight: 3-5 days.",
      },
      {
        question: "Do you offer sulfite-free options?",
        answer:
          "Yes, we have both conventional and sulfite-free/preservative-free options. Sulfite-free has slightly darker color but excellent flavor.",
      },
      {
        question: "What are the microbiological specifications?",
        answer:
          "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw for 18-24 month shelf life.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "dried-banana", "dried-dragon-fruit"],
  },
  {
    id: "dried-dragon-fruit",
    name: "Dried Dragon Fruit",
    category: "dried-fruits",
    sku: "DFT-DDF-001",
    hsCode: "0813.40.90",
    tagline: "Exotic superfood from the tropics",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Vibrant dried dragon fruit (pitaya) slices. Stunning visual appeal with subtle sweetness and high antioxidant content.",
    flavorProfile: "Subtly sweet with mild berry-like notes, refreshing finish",
    texture: "Crisp yet chewy, delicate crunch",
    metaTitle: "Wholesale Dried Dragon Fruit (Pitaya) - Bulk Export from Indonesia",
    metaDescription:
      "Premium dried dragon fruit from Indonesia. Vibrant natural color. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: [
      "dried dragon fruit",
      "dried pitaya wholesale",
      "dragon fruit supplier Indonesia",
      "dried dragon fruit specifications",
    ],
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
    applications: [
      "Smoothie bowls",
      "Decorative garnish",
      "Health snacks",
      "Breakfast cereals",
      "Natural coloring",
      "Confectionery",
    ],
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
      {
        question: "Do you offer both red and white dragon fruit?",
        answer:
          "Yes, we offer both red-fleshed (magenta) and white-fleshed dried dragon fruit. Red variety has more vibrant color for visual applications.",
      },
      {
        question: "Is the color natural or added?",
        answer:
          "100% natural color from the fruit. No artificial colorings added. Red dragon fruit contains natural betacyanins (antioxidants).",
      },
      {
        question: "What are the microbiological standards?",
        answer:
          "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw.",
      },
      {
        question: "Why is nitrogen flush packaging used?",
        answer:
          "Nitrogen flush prevents oxidation and preserves the vibrant natural color. Essential for maintaining visual appeal in retail applications.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-mango", "dried-snake-fruit", "dried-pineapple"],
  },
  {
    id: "dried-snake-fruit",
    name: "Dried Snake Fruit (Salak)",
    category: "dried-fruits",
    sku: "DFT-DSF-001",
    hsCode: "0813.40.90",
    tagline: "Indonesia's exotic treasure",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Rare dried salak (snake fruit) - a uniquely Indonesian delicacy with sweet-tangy flavor profile and distinctive texture.",
    flavorProfile: "Complex sweet-tangy profile with apple-pineapple notes and slight astringency",
    texture: "Firm and crunchy, unique bite",
    metaTitle: "Wholesale Dried Snake Fruit (Salak) - Exotic Indonesian Delicacy",
    metaDescription:
      "Rare dried salak from Indonesia. Unique exotic flavor. Premium quality. Limited availability. Contact for bulk pricing.",
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
    relatedProducts: ["dried-jackfruit", "dried-breadfruit", "dried-dragon-fruit", "dried-papaya"],
  },
  {
    id: "dried-breadfruit",
    name: "Dried Breadfruit",
    category: "dried-fruits",
    sku: "DFT-DBF-001",
    hsCode: "0813.40.90",
    tagline: "Sustainable superfood alternative",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Dried breadfruit chips and slices - high in fiber, gluten-free, and sustainable. A versatile ingredient for health-conscious products.",
    flavorProfile: "Mild, slightly nutty with subtle sweetness, similar to potato",
    texture: "Crispy when chips, chewy when slices",
    metaTitle: "Wholesale Dried Breadfruit - Gluten-Free Superfood from Indonesia",
    metaDescription:
      "Sustainable dried breadfruit from Indonesia. High fiber, gluten-free. Bulk packaging. Perfect for health food manufacturers.",
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
    relatedProducts: ["dried-jackfruit", "dried-coconut", "dried-snake-fruit", "dried-mango"],
  },
  {
    id: "dried-jackfruit",
    name: "Dried Jackfruit",
    category: "dried-fruits",
    sku: "DFT-DJF-001",
    hsCode: "0813.40.90",
    tagline: "Nature's candy from the tropics",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Sweet, chewy dried jackfruit pieces. Intense tropical aroma and naturally sweet taste. Popular for snacking and vegan applications.",
    flavorProfile: "Intensely sweet with distinctive tropical aroma, hints of banana and pineapple",
    texture: "Chewy and slightly sticky, satisfying",
    metaTitle: "Wholesale Dried Jackfruit - Bulk Export from Indonesia",
    metaDescription:
      "Premium dried jackfruit from Indonesia. Natural sweetness. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: [
      "dried jackfruit wholesale",
      "bulk dried jackfruit",
      "jackfruit supplier Indonesia",
      "dried jackfruit specifications",
    ],
    specifications: {
      size: "Chunks, Slices, Pods",
      moisture: "15-20%",
      waterActivity: "≤0.60 aw",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Yellow",
      shelfLife: "18-24 months",
      origin: "Central Java, Indonesia",
      brixLevel: ">16° Brix (Very sweet)",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Sun-dried / Low-temp dehydrated",
      grade: "Grade A Export Quality",
      storageTemp: "10-20°C (50-68°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "January - March (main), June - August (secondary)",
      currentStatus: "in-stock",
    },
    applications: ["Snacking", "Vegan meat alternative", "Baking", "Trail mix", "Smoothies", "Desserts"],
    packaging: { bulk: "10-12.5kg carton with PE liner", retail: "50g-500g stand-up pouches", custom: true },
    pricing: {
      fobBase: "From $10.00/kg FOB",
      moq: "500 kg",
      leadTime: "2-3 weeks",
      priceTiers: [
        { volume: "Sample (<5kg)", priceRange: "Free (buyer pays shipping)" },
        { volume: "MOQ - 1 Ton", priceRange: "$12.00 - $14.00/kg" },
        { volume: "1 - 5 Tons", priceRange: "$10.00 - $12.00/kg" },
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
      eu: "Phytosanitary certified; MRL compliant (Reg. 396/2005); Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      {
        question: "Can dried jackfruit be used as vegan meat alternative?",
        answer:
          "Yes! Young (unripe) jackfruit is popular as a vegan pulled pork substitute. Our dried mature jackfruit is sweet and best for snacking, not savory applications.",
      },
      {
        question: "What makes Indonesian jackfruit special?",
        answer:
          "Indonesian jackfruit has exceptional sweetness (>16° Brix) and aromatic profile. We use selected 'nangka madu' (honey jackfruit) variety.",
      },
      {
        question: "What are the microbiological specifications?",
        answer:
          "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw.",
      },
      {
        question: "Is jackfruit available year-round?",
        answer:
          "Main season is January-March with secondary harvest June-August. We maintain inventory for year-round supply but recommend booking in advance for large orders.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-breadfruit", "dried-coconut", "dried-snake-fruit", "dried-banana"],
  },
  {
    id: "dried-coconut",
    name: "Dried Coconut",
    category: "dried-fruits",
    sku: "DFT-DC-001",
    hsCode: "0801.11.00",
    tagline: "Tropical versatility in every form",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Premium dried coconut in multiple forms - desiccated, chips, flakes, and shreds. Perfect for bakery, confectionery, and health food applications.",
    flavorProfile: "Rich, sweet coconut with mild toasted notes",
    texture: "Varies by cut - fine (desiccated) to chunky (chips)",
    metaTitle: "Wholesale Dried Coconut (Desiccated/Chips) - Bulk Export from Indonesia",
    metaDescription:
      "Premium dried coconut from Indonesia. Desiccated, chips, flakes. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: ["dried coconut wholesale", "desiccated coconut Indonesia", "coconut chips bulk", "coconut supplier"],
    specifications: {
      size: "Desiccated (fine/medium/coarse), Chips, Flakes, Shreds",
      moisture: "3-6%",
      waterActivity: "≤0.50 aw",
      totalPlateCount: "<10⁴ CFU/g",
      yeastMold: "<10² CFU/g",
      color: "White to Cream",
      shelfLife: "12-18 months",
      origin: "Sulawesi, Indonesia",
      fatContent: "60-65%",
      additives: "Preservative-free",
      foreignMatter: "0%",
      processingMethod: "Kiln-dried / Sun-dried",
      grade: "Grade A Export Quality",
      storageTemp: "15-25°C (59-77°F)",
      storageHumidity: "<60% RH",
      salmonella: "Absent/25g",
      eColi: "Absent",
    },
    availability: {
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: ["Bakery", "Confectionery", "Cereal toppings", "Snacking", "Granola", "Smoothies", "Curries"],
    packaging: { bulk: "25kg multi-wall paper bags", retail: "100g-500g pouches", custom: true },
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
      portOfLoading: "Semarang, Indonesia",
      incoterms: ["FOB", "CIF", "CFR"],
      containerLoad20ft: "18-20 MT",
      containerLoad40ft: "24-26 MT",
    },
    compliance: {
      usa: "FDA facility registered; Prior Notice compliant",
      eu: "Phytosanitary certified; MRL compliant; Health Certificate included",
      global: "Codex Alimentarius compliant; GFSI-recognized food safety certification",
    },
    faqs: [
      {
        question: "What coconut grades are available?",
        answer:
          "We offer fine, medium, and coarse desiccated coconut, plus chips, flakes, and shreds. Fat content 60-65%, moisture 3-6%. All grades available organic.",
      },
      {
        question: "What is the fat content of dried coconut?",
        answer:
          "Our dried coconut contains 60-65% healthy fats (primarily lauric acid MCT). This makes it excellent for keto and health food applications.",
      },
      {
        question: "Is white vs cream color significant?",
        answer:
          "White indicates minimal toasting during drying (preferred for bakery). Light cream indicates mild toasting (preferred for snacking/granola with enhanced flavor).",
      },
      {
        question: "What are the microbiological specifications?",
        answer:
          "TPC <10⁴ CFU/g, Yeast & Mold <10² CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.50 aw for 12-18 month shelf life.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-jackfruit", "dried-breadfruit", "dried-papaya", "dried-mango"],
  },
  {
    id: "dried-banana",
    name: "Dried Banana",
    category: "dried-fruits",
    sku: "DFT-DB-001",
    hsCode: "0813.40.10",
    tagline: "Classic tropical staple",
    images: {
      main: "",
      thumbnail: "",
      gallery: [],
    },
    description:
      "Premium dried banana in multiple forms - coins, chips, and whole. Natural sweetness from ripe Cavendish bananas. Perfect for snacking, cereals, and baking applications.",
    flavorProfile: "Sweet, rich banana with caramelized notes",
    texture: "Soft and chewy (coins) to semi-crisp (chips)",
    metaTitle: "Wholesale Dried Banana (Coins/Chips) - Bulk Export from Indonesia",
    metaDescription:
      "Premium dried banana from Indonesia. Natural sweetness. USDA/EU Organic certified. Bulk packaging. Direct from manufacturer.",
    keywords: ["dried banana wholesale", "banana chips bulk", "dried banana Indonesia", "organic dried banana"],
    specifications: {
      size: "Coins, Chips, Slices, Whole",
      moisture: "12-25%",
      waterActivity: "≤0.60 aw",
      so2Level: "<100ppm SO₂ (sulfite-free options available)",
      totalPlateCount: "<10⁵ CFU/g",
      yeastMold: "<10³ CFU/g",
      color: "Golden Brown",
      shelfLife: "18-24 months",
      origin: "Lampung, Indonesia",
      brixLevel: ">18° Brix (Very sweet)",
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
      peakSeason: "Year-round",
      currentStatus: "in-stock",
    },
    applications: [
      "Snacking",
      "Trail mix",
      "Baking",
      "Breakfast cereals",
      "Chocolate coating",
      "Granola bars",
      "Baby food",
    ],
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
      {
        question: "What banana varieties do you use?",
        answer:
          "We use Cavendish for consistent flavor and local Pisang Raja for premium sweetness. Variety can be specified for large orders.",
      },
      {
        question: "Are sulfite-free options available?",
        answer:
          "Yes, we offer sulfite-free dried banana for clean-label products. Slightly shorter shelf life (12-18 months) but meets organic and natural requirements.",
      },
      {
        question: "What is the difference between soft and crisp texture?",
        answer:
          "Moisture 20-25% gives soft, chewy texture for snacking. Moisture 12-18% gives semi-crisp texture for cereals and trail mix. Specify your preference.",
      },
      {
        question: "What are the microbiological specifications?",
        answer:
          "TPC <10⁵ CFU/g, Yeast & Mold <10³ CFU/g, Salmonella absent/25g, E. coli absent. Water activity ≤0.60 aw for 18-24 month shelf life.",
      },
    ],
    certifications: ["USDA Organic", "EU Organic", "HACCP", "Halal"],
    isOrganic: true,
    relatedProducts: ["dried-papaya", "dried-pineapple", "dried-mango", "dried-dragon-fruit"],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined);
};

export const productCategories = [
  {
    id: "dried-fruits",
    name: "Dried Fruits",
    description: "Premium sun-dried tropical fruits - chunks, slices, and cuts",
    productCount: products.filter((p) => p.category === "dried-fruits").length,
  },
] as const;
