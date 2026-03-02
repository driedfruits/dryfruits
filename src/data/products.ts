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
    thumbnail?: string;
    gallery?: string[];
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

// Re-export products from the main data file to avoid breaking imports
// This file primarily defines the interface
