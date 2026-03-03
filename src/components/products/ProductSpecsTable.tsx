import { type Product } from "@/data/companyData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ProductSpecsTableProps {
  product: Product;
}

const specLabels: Record<string, string> = {
  size: "Cut Size / Form",
  moisture: "Moisture Content",
  color: "Color",
  shelfLife: "Shelf Life",
  origin: "Origin",
  brixLevel: "Brix (Sweetness)",
  additives: "Additives",
  foreignMatter: "Foreign Matter",
  processingMethod: "Processing Method",
  grade: "Grade",
  so2Level: "SO₂ / Preservatives",
  totalPlateCount: "Total Plate Count (TPC)",
  waterActivity: "Water Activity (aw)",
  storageTemp: "Storage Temperature",
  storageHumidity: "Storage Humidity",
  yeastMold: "Yeast & Mold",
  packagingMethod: "Bulk Packaging Method",
  salmonella: "Salmonella",
  eColi: "E. coli",
  fatContent: "Fat Content",
  defects: "Defects",
  aflatoxins: "Aflatoxins",
  testingMethod: "Testing Method",
};

export function ProductSpecsTable({ product }: ProductSpecsTableProps) {
  const specs = Object.entries(product.specifications).filter(([_, value]) => value);

  const allRows = [
    { label: "Product Name", value: product.name },
    ...(product.hsCode
      ? [{ label: "HS Code", value: <>{product.hsCode} <span className="text-muted-foreground text-xs">(for import duty calculation)</span></> }]
      : []),
    ...specs.map(([key, value]) => ({
      label: specLabels[key] || key,
      value: value as string,
    })),
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container">
        <h2 className="text-xl font-bold text-foreground mb-4">Technical Specifications & Quality Parameters</h2>

        {/* Mobile: Stacked list */}
        <div className="md:hidden bg-card rounded-xl shadow-soft divide-y divide-border">
          {allRows.map((row, i) => (
            <div key={i} className="px-4 py-2.5">
              <p className="text-xs font-semibold text-muted-foreground">{row.label}</p>
              <p className="text-sm text-foreground mt-0.5">{row.value}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Compact table */}
        <div className="hidden md:block bg-card rounded-xl overflow-hidden shadow-soft">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground w-1/3 px-3 py-2 h-auto text-sm">Parameter</TableHead>
                <TableHead className="font-semibold text-foreground px-3 py-2 h-auto text-sm">Specification Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allRows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium px-3 py-2 text-sm">{row.label}</TableCell>
                  <TableCell className="px-3 py-2 text-sm">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
