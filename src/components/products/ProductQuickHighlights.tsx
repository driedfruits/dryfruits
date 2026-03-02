import { type Product } from "@/data/companyData";

interface ProductQuickHighlightsProps {
  product: Product;
}

export function ProductQuickHighlights({ product }: ProductQuickHighlightsProps) {
  const highlights = [
    { label: "Certifications", value: product.certifications.join(", ") },
    { label: "MOQ", value: product.pricing.moq },
    { label: "Lead Time", value: product.pricing.leadTime },
    { label: "Cut Size / Form", value: product.specifications.size },
    { label: "Season", value: product.availability?.peakSeason },
    { label: "Moisture", value: product.specifications.moisture },
    { label: "Shelf Life", value: product.specifications.shelfLife },
    { label: "Origin", value: product.specifications.origin },
  ].filter((item) => item.value);

  return (
    <ul className="space-y-2 mb-6 text-sm">
      {highlights.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <span className="font-medium">{item.label}:</span>
          <span className="text-muted-foreground">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
