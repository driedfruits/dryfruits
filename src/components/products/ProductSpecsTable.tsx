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
  meshSize: "Mesh Size",
  oilContent: "Oil Content",
  curcuminContent: "Curcumin Content",
  additives: "Additives",
  foreignMatter: "Foreign Matter",
  processingMethod: "Processing Method",
  grade: "Grade",
  // B2B ginger/turmeric specs
  volatileOil: "Volatile Oil Content",
  gingerolContent: "Gingerol Content",
  totalAsh: "Total Ash",
  acidInsolubleAsh: "Acid Insoluble Ash",
  particleSize: "Particle Size",
  purity: "Purity",
  defects: "Defects (max)",
  fatContent: "Fat Content",
  starchContent: "Starch Content",
  chromeTest: "Chrome Test (Adulteration)",
  astaColor: "ASTA Color Value",
  salmonella: "Salmonella",
  eColi: "E. coli",
  aflatoxins: "Aflatoxins (max)",
  testingMethod: "Testing Method",
  // B2B dried/powdered fruit specs
  so2Level: "SO₂ / Preservatives",
  totalPlateCount: "Total Plate Count (TPC)",
  waterActivity: "Water Activity (aw)",
  storageTemp: "Storage Temperature",
  storageHumidity: "Storage Humidity",
  yeastMold: "Yeast & Mold",
  // B2B vacuum-fried specs
  sliceThickness: "Slice Thickness",
  fryingTemperature: "Frying Temperature",
  vacuumPressure: "Vacuum Pressure",
  peroxideValue: "Peroxide Value (max)",
  freeFattyAcids: "Free Fatty Acids (max)",
  colorRetention: "Color Retention",
  vitaminRetention: "Vitamin Retention",
  antioxidant: "Antioxidant (optional)",
  packagingMethod: "Bulk Packaging Method",
};

export function ProductSpecsTable({ product }: ProductSpecsTableProps) {
  const specs = Object.entries(product.specifications).filter(([_, value]) => value);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
      <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications & Quality Parameters</h2>
        <div className="bg-card rounded-xl overflow-hidden shadow-soft overflow-x-auto">
          <Table className="min-w-[400px]">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground w-1/3">Parameter</TableHead>
                <TableHead className="font-semibold text-foreground">Specification Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Product Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              {product.hsCode && (
                <TableRow>
                  <TableCell className="font-medium">HS Code</TableCell>
                  <TableCell>{product.hsCode} <span className="text-muted-foreground text-sm">(for import duty calculation)</span></TableCell>
                </TableRow>
              )}
              {specs.map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-medium">{specLabels[key] || key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
