import { describe, it, expect } from "vitest";
import { products } from "./products";

describe("products data validation", () => {
  const productIds = products.map((p) => p.id);

  // Ensure no duplicate IDs
  it("has no duplicate product IDs", () => {
    const unique = new Set(productIds);
    expect(unique.size).toBe(productIds.length);
  });

  products.forEach((product) => {
    describe(`product: ${product.id}`, () => {
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
    });
  });
});
