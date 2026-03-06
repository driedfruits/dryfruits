import type { Product } from "@/data/products";
import type { Tables } from "@/integrations/supabase/types";

type ProductRow = Tables<"products">;

/** Convert a Supabase products row (snake_case) to our frontend Product interface (camelCase) */
export function mapRowToProduct(row: ProductRow): Product {
  const images = row.images as Record<string, unknown> | null;
  const specs = (row.specifications ?? {}) as Record<string, string>;
  const packaging = (row.packaging ?? {}) as Record<string, unknown>;
  const pricing = (row.pricing ?? {}) as Record<string, string>;
  const logistics = row.logistics as Record<string, unknown> | null;
  const availability = row.availability as Record<string, unknown> | null;
  const compliance = row.compliance as Record<string, unknown> | null;
  const faqs = row.faqs as Array<{ question: string; answer: string }> | null;

  return {
    id: row.id,
    name: row.name,
    shortName: row.short_name,
    category: row.category as "dried-fruits",
    isOrganic: row.is_organic,
    sku: row.sku ?? undefined,
    hsCode: row.hs_code ?? undefined,
    images: images
      ? {
          main: (images.main as string) || undefined,
          mainAlt: (images.mainAlt as string) || undefined,
          thumbnail: (images.thumbnail as string) || undefined,
          thumbnailAlt: (images.thumbnailAlt as string) || undefined,
          gallery: (images.gallery as Array<{ src: string; alt: string }>) || undefined,
        }
      : undefined,
    tagline: row.tagline,
    description: row.description,
    flavorProfile: row.flavor_profile ?? undefined,
    texture: row.texture ?? undefined,
    metaTitle: row.meta_title ?? undefined,
    metaDescription: row.meta_description ?? undefined,
    keywords: row.keywords ?? undefined,
    specifications: specs as Product["specifications"],
    availability: availability
      ? {
          peakSeason: (availability.peakSeason as string) || undefined,
          offPeakSeason: (availability.offPeakSeason as string) || undefined,
          currentStatus: (availability.currentStatus as Product["availability"]["currentStatus"]) || undefined,
        }
      : undefined,
    harvestMonths: row.harvest_months ?? undefined,
    applications: row.applications ?? [],
    packaging: {
      bulk: (packaging.bulk as string) || "",
      retail: (packaging.retail as string) || "",
      custom: (packaging.custom as boolean) ?? false,
    },
    pricing: {
      fobBase: pricing.fobBase || "",
      moq: pricing.moq || "",
      leadTime: pricing.leadTime || "",
    },
    logistics: logistics
      ? {
          portOfLoading: (logistics.portOfLoading as string) || undefined,
          incoterms: (logistics.incoterms as string[]) || undefined,
          containerLoad20ft: (logistics.containerLoad20ft as string) || undefined,
          containerLoad40ft: (logistics.containerLoad40ft as string) || undefined,
          estimatedDelivery: (logistics.estimatedDelivery as string) || undefined,
        }
      : undefined,
    exportDocuments: row.export_documents ?? undefined,
    compliance: compliance
      ? {
          usa: (compliance.usa as string) || undefined,
          eu: (compliance.eu as string) || undefined,
          global: (compliance.global as string) || undefined,
        }
      : undefined,
    faqs: faqs ?? undefined,
    certifications: row.certifications ?? [],
    relatedProducts: row.related_products ?? [],
  };
}

/** Convert a frontend Product to a Supabase insert/update row */
export function mapProductToRow(product: Product): ProductRow {
  return {
    id: product.id,
    name: product.name,
    short_name: product.shortName,
    category: product.category,
    is_organic: product.isOrganic,
    sku: product.sku ?? null,
    hs_code: product.hsCode ?? null,
    images: product.images
      ? {
          main: product.images.main || "",
          mainAlt: product.images.mainAlt || "",
          thumbnail: product.images.thumbnail || "",
          thumbnailAlt: product.images.thumbnailAlt || "",
          gallery: product.images.gallery || [],
        }
      : null,
    tagline: product.tagline,
    description: product.description,
    flavor_profile: product.flavorProfile ?? null,
    texture: product.texture ?? null,
    meta_title: product.metaTitle ?? null,
    meta_description: product.metaDescription ?? null,
    keywords: product.keywords ?? null,
    specifications: product.specifications as unknown as Record<string, string>,
    availability: product.availability
      ? {
          peakSeason: product.availability.peakSeason || "",
          offPeakSeason: product.availability.offPeakSeason || "",
          currentStatus: product.availability.currentStatus || "in-stock",
        }
      : null,
    harvest_months: product.harvestMonths ?? null,
    applications: product.applications,
    packaging: {
      bulk: product.packaging.bulk,
      retail: product.packaging.retail,
      custom: product.packaging.custom,
    },
    pricing: {
      fobBase: product.pricing.fobBase,
      moq: product.pricing.moq,
      leadTime: product.pricing.leadTime,
    },
    logistics: product.logistics
      ? {
          portOfLoading: product.logistics.portOfLoading || "",
          incoterms: product.logistics.incoterms || [],
          containerLoad20ft: product.logistics.containerLoad20ft || "",
          containerLoad40ft: product.logistics.containerLoad40ft || "",
          estimatedDelivery: product.logistics.estimatedDelivery || "",
        }
      : null,
    export_documents: product.exportDocuments ?? null,
    compliance: product.compliance
      ? {
          usa: product.compliance.usa || "",
          eu: product.compliance.eu || "",
          global: product.compliance.global || "",
        }
      : null,
    faqs: product.faqs ?? null,
    certifications: product.certifications,
    related_products: product.relatedProducts,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}
