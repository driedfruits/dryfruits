// Product interface and type definitions
export interface Product {
  // Identity
  id: string;
  name: string;
  shortName: string;
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

  // Harvest calendar: 12-element array (Jan–Dec), 0=low, 1=off-peak, 2=peak
  harvestMonths?: number[];

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
  };

  // Logistics (optional - uses company defaults if not set)
  logistics?: {
    portOfLoading?: string;
    incoterms?: string[];
    containerLoad20ft?: string;
    containerLoad40ft?: string;
    estimatedDelivery?: string;
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
export const products: Product[] = [];

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
