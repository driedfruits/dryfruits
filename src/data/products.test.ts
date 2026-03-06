import { describe, it, expect } from "vitest";
import { products } from "./products";

describe("products data validation", () => {
  const productIds = products.map((p) => p.id);

  it("has no duplicate product IDs", () => {
    const unique = new Set(productIds);
    expect(unique.size).toBe(productIds.length);
  });

  products.forEach((product) => {
    describe(`product: ${product.id}`, () => {
      // Required fields
      it("has all required string fields", () => {
        expect(product.id).toBeTruthy();
        expect(product.name).toBeTruthy();
        expect(product.shortName).toBeTruthy();
        expect(product.tagline).toBeTruthy();
        expect(product.description).toBeTruthy();
      });

      it("has valid category", () => {
        expect(product.category).toBe("dried-fruits");
      });

      it("has specifications object", () => {
        expect(product.specifications).toBeDefined();
        expect(typeof product.specifications).toBe("object");
      });

      it("has applications array", () => {
        expect(Array.isArray(product.applications)).toBe(true);
      });

      it("has valid packaging", () => {
        expect(product.packaging).toBeDefined();
        expect(product.packaging.bulk).toBeTruthy();
        expect(product.packaging.retail).toBeTruthy();
        expect(typeof product.packaging.custom).toBe("boolean");
      });

      it("has valid pricing", () => {
        expect(product.pricing).toBeDefined();
        expect(product.pricing.fobBase).toBeTruthy();
        expect(product.pricing.moq).toBeTruthy();
        expect(product.pricing.leadTime).toBeTruthy();
      });

      it("has at least one certification", () => {
        expect(Array.isArray(product.certifications)).toBe(true);
        expect(product.certifications.length).toBeGreaterThan(0);
      });

      it("has isOrganic as boolean", () => {
        expect(typeof product.isOrganic).toBe("boolean");
      });

      it("references only valid related product IDs", () => {
        expect(Array.isArray(product.relatedProducts)).toBe(true);
        product.relatedProducts.forEach((id) => {
          expect(productIds).toContain(id);
        });
      });

      // Optional fields — if present, must be well-formed

      if (product.images) {
        it("has valid images structure", () => {
          const { images } = product;
          if (images!.main) expect(typeof images!.main).toBe("string");
          if (images!.mainAlt) expect(typeof images!.mainAlt).toBe("string");
          if (images!.thumbnail) expect(typeof images!.thumbnail).toBe("string");
          if (images!.thumbnailAlt) expect(typeof images!.thumbnailAlt).toBe("string");
          if (images!.gallery) {
            expect(Array.isArray(images!.gallery)).toBe(true);
            images!.gallery!.forEach((img) => {
              expect(img.src).toBeTruthy();
              expect(img.alt).toBeTruthy();
            });
          }
        });
      }

      if (product.logistics) {
        it("has valid logistics structure", () => {
          const { logistics } = product;
          if (logistics!.portOfLoading) expect(typeof logistics!.portOfLoading).toBe("string");
          if (logistics!.incoterms) {
            expect(Array.isArray(logistics!.incoterms)).toBe(true);
            logistics!.incoterms!.forEach((t) => expect(typeof t).toBe("string"));
          }
          if (logistics!.containerLoad20ft) expect(typeof logistics!.containerLoad20ft).toBe("string");
          if (logistics!.containerLoad40ft) expect(typeof logistics!.containerLoad40ft).toBe("string");
          if (logistics!.estimatedDelivery) expect(typeof logistics!.estimatedDelivery).toBe("string");
        });
      }

      if (product.faqs) {
        it("has valid FAQs structure", () => {
          expect(Array.isArray(product.faqs)).toBe(true);
          product.faqs!.forEach((faq) => {
            expect(faq.question).toBeTruthy();
            expect(faq.answer).toBeTruthy();
          });
        });
      }

      if (product.availability) {
        it("has valid availability structure", () => {
          const { availability } = product;
          if (availability!.currentStatus) {
            expect(["in-stock", "limited", "pre-order"]).toContain(availability!.currentStatus);
          }
        });
      }

      if (product.harvestMonths) {
        it("has valid harvestMonths (12 entries, values 0-2)", () => {
          expect(product.harvestMonths).toHaveLength(12);
          product.harvestMonths!.forEach((v) => {
            expect(v).toBeGreaterThanOrEqual(0);
            expect(v).toBeLessThanOrEqual(2);
          });
        });
      }


      if (product.exportDocuments) {
        it("has valid export documents array", () => {
          expect(Array.isArray(product.exportDocuments)).toBe(true);
          product.exportDocuments!.forEach((doc) => expect(typeof doc).toBe("string"));
        });
      }

      if (product.compliance) {
        it("has valid compliance structure", () => {
          const { compliance } = product;
          if (compliance!.usa) expect(typeof compliance!.usa).toBe("string");
          if (compliance!.eu) expect(typeof compliance!.eu).toBe("string");
          if (compliance!.global) expect(typeof compliance!.global).toBe("string");
        });
      }
    });
  });
});
