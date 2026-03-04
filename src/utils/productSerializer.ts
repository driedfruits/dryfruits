import type { Product } from "@/data/products";

const FILE_HEADER = `// Product interface and type definitions
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
export const products: Product[] = [
  // ==================
  // DRIED FRUITS
  // ==================`;

const FILE_FOOTER = `];

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
] as const;`;

function indent(str: string, level: number): string {
  const pad = "  ".repeat(level);
  return str.split("\n").map(line => pad + line).join("\n");
}

function serializeString(val: string): string {
  // Use template literal for multiline, otherwise double quotes
  if (val.includes("\n")) {
    return `\n      "${val.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, '\\n"\n      + "')}"`;
  }
  return `"${val.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function serializeValue(val: unknown, depth: number): string {
  if (val === undefined || val === null) return "undefined";
  if (typeof val === "boolean") return val ? "true" : "false";
  if (typeof val === "number") return String(val);
  if (typeof val === "string") return serializeString(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return "[]";
    // Check if simple array of primitives
    if (val.every(v => typeof v === "string" || typeof v === "number")) {
      const items = val.map(v => serializeValue(v, depth + 1)).join(", ");
      if (items.length < 80) return `[${items}]`;
    }
    const pad = "  ".repeat(depth);
    const innerPad = "  ".repeat(depth + 1);
    const items = val.map(v => `${innerPad}${serializeValue(v, depth + 1)},`).join("\n");
    return `[\n${items}\n${pad}]`;
  }
  if (typeof val === "object") {
    const pad = "  ".repeat(depth);
    const innerPad = "  ".repeat(depth + 1);
    const entries = Object.entries(val as Record<string, unknown>)
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => {
        const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`;
        return `${innerPad}${key}: ${serializeValue(v, depth + 1)},`;
      });
    if (entries.length === 0) return "{}";
    return `{\n${entries.join("\n")}\n${pad}}`;
  }
  return String(val);
}

export function serializeProduct(product: Product): string {
  return serializeValue(product, 1);
}

export function buildFullProductsFile(allProducts: Product[]): string {
  const productEntries = allProducts.map(p => `  ${serializeProduct(p)}`).join(",\n");
  return `${FILE_HEADER}\n${productEntries},\n${FILE_FOOTER}\n`;
}
