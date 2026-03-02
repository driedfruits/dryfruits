import { useState, useMemo } from "react";
import { Ship, Package, Calculator } from "lucide-react";
import { products, companyInfo, type Product } from "@/data/companyData";
import { FormSelect } from "@/components/forms/FormElements";

const bagSizeOptions = [
  { value: "10", label: "10 kg bag" },
  { value: "12.5", label: "12.5 kg bag" },
  { value: "15", label: "15 kg bag" },
  { value: "20", label: "20 kg bag" },
  { value: "25", label: "25 kg bag" },
];

const categoryLabels: Record<Product["category"], string> = {
  "dried-fruits": "Dried Fruits",
};

// Parse container load string like "15-18 MT" into { min, max } in kg
function parseContainerLoad(loadStr: string): { min: number; max: number } {
  const match = loadStr.match(/([\d.]+)\s*-\s*([\d.]+)\s*(MT|mt|T|t)?/);
  if (match) {
    return {
      min: parseFloat(match[1]) * 1000,
      max: parseFloat(match[2]) * 1000,
    };
  }
  // Try single value like "~18 MT"
  const singleMatch = loadStr.match(/~?([\d.]+)\s*(MT|mt|T|t)?/);
  if (singleMatch) {
    const val = parseFloat(singleMatch[1]) * 1000;
    return { min: val * 0.9, max: val * 1.1 };
  }
  // Default fallback
  return { min: 15000, max: 18000 };
}

interface ContainerCalculatorProps {
  defaultProductId?: string;
  compact?: boolean;
  headingLevel?: "h2" | "h3";
}

export function ContainerCalculator({ defaultProductId, compact = false, headingLevel = "h2" }: ContainerCalculatorProps) {
  const [selectedProductId, setSelectedProductId] = useState(defaultProductId || "");
  const [bagSize, setBagSize] = useState("25");

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, []);

  // Get selected product
  const selectedProduct = useMemo(() => {
    return products.find((p) => p.id === selectedProductId);
  }, [selectedProductId]);

  // Calculate container loads
  const calculations = useMemo(() => {
    const bagSizeKg = parseFloat(bagSize);
    
    // Get container loads from product or company defaults
    const load20ftStr = selectedProduct?.logistics?.containerLoad20ft || companyInfo.defaultLogistics.containerLoad20ft;
    const load40ftStr = selectedProduct?.logistics?.containerLoad40ft || companyInfo.defaultLogistics.containerLoad40ft;
    
    const load20ft = parseContainerLoad(load20ftStr);
    const load40ft = parseContainerLoad(load40ftStr);

    return {
      container20ft: {
        tonnageMin: (load20ft.min / 1000).toFixed(0),
        tonnageMax: (load20ft.max / 1000).toFixed(0),
        bagsMin: Math.floor(load20ft.min / bagSizeKg),
        bagsMax: Math.floor(load20ft.max / bagSizeKg),
      },
      container40ft: {
        tonnageMin: (load40ft.min / 1000).toFixed(0),
        tonnageMax: (load40ft.max / 1000).toFixed(0),
        bagsMin: Math.floor(load40ft.min / bagSizeKg),
        bagsMax: Math.floor(load40ft.max / bagSizeKg),
      },
    };
  }, [selectedProduct, bagSize]);

  return (
    <div className={`rounded-xl bg-card shadow-soft ${compact ? "p-4" : "p-6"}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <div>
        {headingLevel === "h2" ? (
          <h2 className={`font-bold text-foreground ${compact ? "text-lg" : "text-xl"}`}>
            Container Load Calculator
          </h2>
        ) : (
          <h3 className={`font-bold text-foreground ${compact ? "text-lg" : "text-xl"}`}>
            Container Load Calculator
          </h3>
        )}
        {!compact && (
          <p className="text-sm text-muted-foreground">
            Estimate how many bags fit in your container
          </p>
        )}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Product Type
          </label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a product...</option>
            {Object.entries(productsByCategory).map(([category, prods]) => (
              <optgroup key={category} label={categoryLabels[category as Product["category"]]}>
                {prods.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Bag Size
          </label>
          <select
            value={bagSize}
            onChange={(e) => setBagSize(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {bagSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* 20ft Container */}
        <div className="rounded-lg bg-muted/50 p-4 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Ship className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">20ft Container</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Capacity</span>
              <span className="font-bold text-foreground">
                {calculations.container20ft.tonnageMin}-{calculations.container20ft.tonnageMax} MT
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bags ({bagSize}kg)</span>
              <span className="font-bold text-primary">
                {calculations.container20ft.bagsMin.toLocaleString()}-{calculations.container20ft.bagsMax.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* 40ft Container */}
        <div className="rounded-lg bg-muted/50 p-4 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Ship className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">40ft Container</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Capacity</span>
              <span className="font-bold text-foreground">
                {calculations.container40ft.tonnageMin}-{calculations.container40ft.tonnageMax} MT
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bags ({bagSize}kg)</span>
              <span className="font-bold text-primary">
                {calculations.container40ft.bagsMin.toLocaleString()}-{calculations.container40ft.bagsMax.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-4 text-xs text-muted-foreground text-center">
        * Estimates based on product density and standard packing. Actual capacity may vary.
        {selectedProduct && selectedProduct.logistics?.containerLoad20ft && (
          <> Product-specific container loads applied.</>
        )}
      </p>
    </div>
  );
}
