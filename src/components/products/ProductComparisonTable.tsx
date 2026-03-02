import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { products, productCategories, type Product } from "@/data/companyData";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Scale, Leaf, ExternalLink } from "lucide-react";

interface ComparisonSpec {
  key: string;
  label: string;
  category: "pricing" | "quality" | "safety" | "storage" | "logistics" | "certifications";
  getValue: (product: Product) => string | React.ReactNode;
}

const comparisonSpecs: ComparisonSpec[] = [
  // Pricing
  { key: "fobBase", label: "FOB Base Price", category: "pricing", getValue: (p) => p.pricing.fobBase },
  { key: "moq", label: "MOQ", category: "pricing", getValue: (p) => p.pricing.moq },
  { key: "leadTime", label: "Lead Time", category: "pricing", getValue: (p) => p.pricing.leadTime },
  // Quality
  { key: "moisture", label: "Moisture", category: "quality", getValue: (p) => p.specifications.moisture || "-" },
  { key: "waterActivity", label: "Water Activity", category: "quality", getValue: (p) => p.specifications.waterActivity || "-" },
  { key: "brixLevel", label: "Brix Level", category: "quality", getValue: (p) => p.specifications.brixLevel || "-" },
  { key: "grade", label: "Grade", category: "quality", getValue: (p) => p.specifications.grade || "-" },
  
  // Safety
  { key: "so2Level", label: "SO₂ Level", category: "safety", getValue: (p) => p.specifications.so2Level || "-" },
  { key: "totalPlateCount", label: "Total Plate Count", category: "safety", getValue: (p) => p.specifications.totalPlateCount || "-" },
  { key: "yeastMold", label: "Yeast & Mold", category: "safety", getValue: (p) => p.specifications.yeastMold || "-" },
  // Storage
  { key: "storageTemp", label: "Storage Temp", category: "storage", getValue: (p) => p.specifications.storageTemp || "-" },
  { key: "storageHumidity", label: "Storage Humidity", category: "storage", getValue: (p) => p.specifications.storageHumidity || "-" },
  { key: "shelfLife", label: "Shelf Life", category: "storage", getValue: (p) => p.specifications.shelfLife || "-" },
  // Logistics
  { key: "containerLoad20ft", label: "20ft Container", category: "logistics", getValue: (p) => p.logistics?.containerLoad20ft || "-" },
  { key: "containerLoad40ft", label: "40ft Container", category: "logistics", getValue: (p) => p.logistics?.containerLoad40ft || "-" },
  { key: "portOfLoading", label: "Port of Loading", category: "logistics", getValue: (p) => p.logistics?.portOfLoading || "-" },
  // Certifications
  { 
    key: "organic", 
    label: "Organic Certified", 
    category: "certifications", 
    getValue: (p) => p.isOrganic ? (
      <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
        <Leaf className="h-3 w-3 mr-1" /> Yes
      </Badge>
    ) : "No" 
  },
  { 
    key: "certifications", 
    label: "Certifications", 
    category: "certifications", 
    getValue: (p) => p.certifications.length > 0 ? p.certifications.join(", ") : "-" 
  },
];

const categoryLabels: Record<string, string> = {
  "all": "All Products",
  "dried-fruits": "Dried Fruits",
};

const specCategoryLabels: Record<string, string> = {
  pricing: "Pricing",
  quality: "Quality Parameters",
  safety: "Safety & Microbiology",
  storage: "Storage Conditions",
  logistics: "Logistics",
  certifications: "Certifications",
};

export function ProductComparisonTable() {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const maxProducts = 4;

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setActiveCardIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => { carouselApi.off("select", onSelect); };
  }, [carouselApi]);

  const filteredProducts = useMemo(() => {
    if (categoryFilter === "all") return products;
    return products.filter((p) => p.category === categoryFilter);
  }, [categoryFilter]);

  const availableProducts = useMemo(() => {
    return filteredProducts.filter((p) => !selectedProductIds.includes(p.id));
  }, [filteredProducts, selectedProductIds]);

  const selectedProducts = useMemo(() => {
    return selectedProductIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean) as Product[];
  }, [selectedProductIds]);

  const handleAddProduct = (productId: string) => {
    if (selectedProductIds.length < maxProducts && !selectedProductIds.includes(productId)) {
      setSelectedProductIds([...selectedProductIds, productId]);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProductIds(selectedProductIds.filter((id) => id !== productId));
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    // Clear products not in new category
    if (value !== "all") {
      setSelectedProductIds(
        selectedProductIds.filter((id) => {
          const product = products.find((p) => p.id === id);
          return product?.category === value;
        })
      );
    }
  };

  const specsByCategory = useMemo(() => {
    const grouped: Record<string, ComparisonSpec[]> = {};
    comparisonSpecs.forEach((spec) => {
      if (!grouped[spec.category]) {
        grouped[spec.category] = [];
      }
      grouped[spec.category].push(spec);
    });
    return grouped;
  }, []);

  // Check if values differ for highlighting
  const valuesDiffer = (spec: ComparisonSpec): boolean => {
    if (selectedProducts.length < 2) return false;
    const values = selectedProducts.map((p) => {
      const val = spec.getValue(p);
      return typeof val === "string" ? val : JSON.stringify(val);
    });
    return new Set(values).size > 1;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="h-6 w-6 text-primary" />
        <div>
          <h2 className="text-2xl font-bold text-foreground">Compare Products</h2>
          <p className="text-muted-foreground text-sm">
            Select up to {maxProducts} products to compare specifications side-by-side
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-foreground mb-2 block">
          Filter by Category
        </label>
        <Select value={categoryFilter} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Product Selection Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {Array.from({ length: maxProducts }).map((_, index) => {
          const product = selectedProducts[index];
          return (
            <div
              key={index}
              className={`rounded-lg border-2 border-dashed p-3 min-h-[80px] flex items-center justify-center transition-colors ${
                product
                  ? "border-primary/50 bg-primary/5"
                  : "border-muted-foreground/20 bg-muted/30"
              }`}
            >
              {product ? (
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {categoryLabels[product.category] || product.category}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 min-h-[48px] min-w-[48px] shrink-0"
                    onClick={() => handleRemoveProduct(product.id)}
                    aria-label={`Remove ${product.name}`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Select
                  value=""
                  onValueChange={handleAddProduct}
                  disabled={availableProducts.length === 0}
                >
                  <SelectTrigger className="border-0 shadow-none bg-transparent h-auto p-0 w-full">
                    <div className="flex flex-col items-center gap-1 text-muted-foreground">
                      <Plus className="h-5 w-5" />
                      <span className="text-xs">Add Product</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {availableProducts.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          );
        })}
      </div>

      {/* Comparison Table */}
      {selectedProducts.length > 0 ? (
        <>
          {/* Desktop: Horizontal Table */}
          <div className="hidden md:block overflow-x-auto -mx-6 px-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[160px] sticky left-0 bg-card z-10">
                    Specification
                  </TableHead>
                  {selectedProducts.map((product) => (
                    <TableHead key={product.id} className="min-w-[140px] text-center">
                      {product.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(specsByCategory).map(([category, specs]) => (
                  <>
                    <TableRow key={`cat-${category}`} className="bg-muted/50">
                      <TableCell
                        colSpan={selectedProducts.length + 1}
                        className="font-semibold text-foreground py-2"
                      >
                        {specCategoryLabels[category]}
                      </TableCell>
                    </TableRow>
                    {specs.map((spec) => {
                      const differs = valuesDiffer(spec);
                      return (
                        <TableRow
                          key={spec.key}
                          className={differs ? "bg-amber-50/50 dark:bg-amber-950/20" : ""}
                        >
                          <TableCell className="font-medium text-muted-foreground sticky left-0 bg-inherit">
                            {spec.label}
                          </TableCell>
                          {selectedProducts.map((product) => (
                            <TableCell key={product.id} className="text-center text-sm">
                              {spec.getValue(product)}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
                  </>
                ))}
                <TableRow>
                  <TableCell className="font-medium text-muted-foreground sticky left-0 bg-card">
                    Details
                  </TableCell>
                  {selectedProducts.map((product) => (
                    <TableCell key={product.id} className="text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/products/${product.category}/${product.id}`}>
                          View <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Mobile: Swipeable Cards */}
          <div className="md:hidden">
            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mb-3">
              {selectedProducts.map((_, idx) => (
                <button
                  key={idx}
                  className="min-h-[48px] min-w-[48px] flex items-center justify-center"
                  onClick={() => carouselApi?.scrollTo(idx)}
                  aria-label={`Go to product ${idx + 1}`}
                >
                  <span className={`block w-2.5 h-2.5 rounded-full transition-colors ${idx === activeCardIndex ? "bg-primary" : "bg-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
            {selectedProducts.length >= 2 && (
              <p className="text-xs text-muted-foreground text-center mb-3">Swipe to compare</p>
            )}
            <Carousel opts={{ align: "start" }} setApi={setCarouselApi}>
              <CarouselContent>
                {selectedProducts.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
                        <Button asChild variant="outline" size="sm" className="min-h-[44px]">
                          <Link to={`/products/${product.category}/${product.id}`}>
                            View <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                      {Object.entries(specsByCategory).map(([category, specs]) => (
                        <div key={category} className="mb-3 last:mb-0">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                            {specCategoryLabels[category]}
                          </p>
                          <div className="space-y-1.5">
                            {specs.map((spec) => (
                              <div key={spec.key} className="flex items-center justify-between gap-4 py-1.5 border-b border-border/30 last:border-0">
                                <span className="text-sm text-muted-foreground">{spec.label}</span>
                                <span className="text-sm font-medium text-foreground text-right">{spec.getValue(product)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <Scale className="h-12 w-12 mx-auto mb-3 opacity-30" />
          <p>Select products above to compare their specifications</p>
        </div>
      )}

      {/* Legend */}
      {selectedProducts.length >= 2 && (
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-4 h-4 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800" />
          <span>Highlighted rows indicate differing values</span>
        </div>
      )}
    </div>
  );
}
