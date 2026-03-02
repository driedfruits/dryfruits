

## Fix: Populate dried-papaya specifications

The `dried-papaya` entry has only one specification field (`size`), while all other products have 15-18 fields (moisture, waterActivity, so2Level, totalPlateCount, yeastMold, color, shelfLife, origin, brixLevel, additives, foreignMatter, processingMethod, grade, storageTemp, storageHumidity, salmonella, eColi).

### Change

In `src/data/products.ts`, expand the `dried-papaya` specifications object (line 162-164) to include the full set of technical parameters, consistent with other products like dried-pineapple:

```typescript
specifications: {
  size: "Chunks 1-2cm, Shreds, Slices, Dices",
  moisture: "14-18%",
  waterActivity: "≤0.60 aw",
  so2Level: "<200ppm SO₂ (sulfite-free options available)",
  totalPlateCount: "<10⁵ CFU/g",
  yeastMold: "<10³ CFU/g",
  color: "Golden Orange to Yellow",
  shelfLife: "18-24 months",
  origin: "Central Java, Indonesia",
  brixLevel: ">12° Brix (Naturally sweet)",
  additives: "Preservative-free / Sulfite-free options",
  foreignMatter: "0%",
  processingMethod: "Sun-dried / Low-temp dehydrated",
  grade: "Grade A Export Quality",
  storageTemp: "10-20°C (50-68°F)",
  storageHumidity: "<60% RH",
  salmonella: "Absent/25g",
  eColi: "Absent",
},
```

Single edit, one file. Values are based on typical papaya specs consistent with other products in the catalog.

