// Company information - single source of truth
export const companyInfo = {
  name: "PT Dried Fruits Total Indonesia",
  shortName: "DFT Indonesia",
  tagline: "Indonesia Dried & Vacuum Fruits Manufacturer",
  established: 2015,
  
  // Contact
  phone: "+62 857 2528 5059",
  whatsapp: "+6285725285059",
  email: "export@dryfruits.biz",
  
  // Address
  address: {
    street: "Jl. Mayor Unus KM 1.5",
    city: "Magelang",
    province: "Central Java",
    country: "Indonesia",
    postalCode: "56172",
    full: "Jl. Mayor Unus KM 1.5, Magelang, Central Java, Indonesia 56172",
  },
  
  // Working Hours
  workingHours: {
    days: "Monday - Friday",
    hours: "8:00 AM - 5:00 PM",
    timezone: "WIB (Western Indonesia Time)",
    full: "Monday - Friday, 8:00 AM - 5:00 PM (WIB)",
  },
  
  // Capacity & Stats
  stats: {
    productionCapacity: "100+ tons/month",
    yearsExperience: new Date().getFullYear() - 2015,
    exportCountries: 18,
    productVarieties: 23,
  },
  
  // Owners
  owners: [
    { name: "Budi Santoso", role: "Co-Founder & CEO" },
    { name: "Dewi Kusuma", role: "Co-Founder & COO" },
  ],
  
  // Payment Terms
  paymentTerms: {
    deposit: "50%",
    balance: "50% before shipping",
    methods: ["T/T (Bank Transfer)", "L/C (Letter of Credit)"],
    leadTime: "2-3 weeks",
    moq: "500 kg - 1 ton",
  },
  
  // Logistics defaults
  defaultLogistics: {
    portOfLoading: "Tanjung Priok (Jakarta) / Tanjung Perak (Surabaya)",
    incoterms: ["FOB", "CIF", "CNF", "Ex-Works"],
    containerLoad20ft: "~8-10 MT",
    containerLoad40ft: "~18-22 MT",
  },
  
  // Standard export documents
  standardExportDocuments: [
    "Bill of Lading (B/L)",
    "Commercial Invoice & Packing List",
    "Certificate of Origin (COO)",
    "Phytosanitary Certificate (Barantan)",
    "Certificate of Analysis (COA)",
    "Halal Certificate (MUI/BPJPH)",
  ],
  
  // Default compliance
  defaultCompliance: {
    usa: "FDA Registered, FSVP Compliant",
    eu: "EFSA compliant, meets EU Ochratoxin A & Sulfite limits",
    global: "HACCP / ISO 22000 Manufacturing",
  },
  
  // Legal / Government Registration
  legalInfo: {
    legalName: "PT Dried Fruits Total Indonesia",
    nib: {
      label: "NIB (Business ID Number)",
      value: "8962548791220",
    },
    npwp: {
      label: "NPWP (Tax ID Number)",
      value: "61.318.225.6-723.000",
    },
  },
} as const;

export const socialLinks = {
  linkedin: "https://linkedin.com/company/dft-indonesia",
  instagram: "https://instagram.com/dftindonesia",
  facebook: "https://facebook.com/dftindonesia",
  youtube: "https://youtube.com/@dftindonesia",
} as const;

export const certifications = [
  {
    id: "usda-organic",
    name: "USDA Organic",
    description: "United States Department of Agriculture Organic Certification",
    icon: "leaf",
  },
  {
    id: "eu-organic",
    name: "EU Organic",
    description: "European Union Organic Certification",
    icon: "leaf",
  },
  {
    id: "haccp",
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points",
    icon: "shield",
  },
  {
    id: "halal",
    name: "Halal",
    description: "Halal Certification",
    icon: "check",
  },
] as const;

export const teamMembers = [
  { id: 1, name: "Budi Santoso", role: "CEO & Co-Founder", email: "budi@dryfruits.biz" },
  { id: 2, name: "Dewi Kusuma", role: "COO & Co-Founder", email: "dewi@dryfruits.biz" },
  { id: 3, name: "Ahmad Prasetyo", role: "Export Manager", email: "ahmad@dryfruits.biz" },
  { id: 4, name: "Siti Rahayu", role: "Quality Control Manager", email: "siti@dryfruits.biz" },
  { id: 5, name: "Rizki Hidayat", role: "Production Manager", email: "rizki@dryfruits.biz" },
  { id: 6, name: "Maya Indah", role: "Marketing Manager", email: "maya@dryfruits.biz" },
  { id: 7, name: "Eko Wijaya", role: "Logistics Coordinator", email: "eko@dryfruits.biz" },
  { id: 8, name: "Linda Permata", role: "Finance Manager", email: "linda@dryfruits.biz" },
  { id: 9, name: "Fajar Rahman", role: "R&D Specialist", email: "fajar@dryfruits.biz" },
] as const;

export const exportCountries = [
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Europe", countries: ["Germany", "Netherlands", "UK", "France", "Italy", "Spain"] },
  { region: "Asia Pacific", countries: ["Japan", "South Korea", "Australia", "New Zealand", "Singapore"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar"] },
  { region: "Others", countries: ["South Africa", "Brazil"] },
] as const;

export const targetSegments = [
  {
    name: "Food Manufacturers",
    description: "Ingredients for cereals, granola, snack bars, and baked goods",
    icon: "factory",
  },
  {
    name: "Beverage Companies",
    description: "Natural ingredients for smoothies, juices, and health drinks",
    icon: "glass-water",
  },
  {
    name: "Retail & Supermarkets",
    description: "Private label and branded dried fruit products",
    icon: "store",
  },
  {
    name: "Trading Companies",
    description: "Bulk supply for redistribution and wholesale",
    icon: "globe",
  },
] as const;
