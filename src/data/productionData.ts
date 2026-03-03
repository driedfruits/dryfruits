export const processSteps = [
  {
    icon: "PackageSearch" as const,
    title: "Intake & Sorting",
    description: "Fresh fruit received, inspected, and sorted by ripeness and size using industrial conveyors.",
    statLabel: "QA Checkpoints",
    statValue: "3",
  },
  {
    icon: "Droplets" as const,
    title: "Washing & Blanching",
    description: "High-capacity washers and blanchers remove contaminants and stabilize enzymes for consistent dehydration.",
    statLabel: "Continuous Process",
    statValue: "24/7",
  },
  {
    icon: "Flame" as const,
    title: "Drying",
    description: "4 electric ovens (solar-assisted) + 3 biomass ovens process batches to achieve stable moisture content and shelf life.",
    statLabel: "Total Ovens",
    statValue: "7",
  },
];

export const detailedBlocks = [
  {
    title: "Raw Material Intake & Sorting",
    copy: "Fresh tropical fruits arrive in bulk crates from our partner farms across Indonesia. Each batch passes through a multi-point QA checkpoint where trained staff remove foreign matter and grade fruit by size, ripeness, and variety using industrial conveyor systems. Only fruit meeting our export-grade specifications proceeds to processing.",
    imageAlt: "Workers sorting fresh tropical fruit on industrial conveyor belt",
    imageCaption: "Fruit grading and sorting line",
    direction: "left" as const,
  },
  {
    title: "Cleaning & Industrial Blanching",
    copy: "Industrial-grade fruit washers thoroughly clean produce using filtered water jets at high pressure. Cleaned fruit then enters our continuous blanching system operating at {{REPLACE_WITH_ACTUAL}} °C for {{REPLACE_WITH_ACTUAL}} minutes — inactivating enzymes responsible for browning, retaining natural color, and ensuring food safety compliance.",
    imageAlt: "Industrial blanching equipment processing tropical fruits",
    imageCaption: "Continuous blanching line",
    direction: "right" as const,
  },
  {
    title: "Drying Process",
    copy: "Our facility runs 4 electric ovens powered by grid electricity supplemented by on-site solar panels, plus 3 industrial biomass-powered ovens. Temperature and humidity are precisely controlled per fruit type. Separate production lines allow simultaneous processing. Combined capacity: 3 tons of dried fruit per day with {{REPLACE_WITH_ACTUAL}} hour turn-around per batch.",
    imageAlt: "Industrial electric drying ovens with solar panels in background",
    imageCaption: "Electric drying ovens — solar-assisted",
    direction: "left" as const,
  },
  {
    title: "Quality Control & Packaging",
    copy: "Dried fruit undergoes final moisture testing to verify shelf-stability targets. Metal detection scanners ensure product purity. Automated weighing systems guarantee accurate fill weights. Product is hygienically packed in food-grade export packaging with full traceability labeling for international shipping.",
    imageAlt: "Quality control station with moisture testing and metal detection equipment",
    imageCaption: "QC and export packaging station",
    direction: "right" as const,
  },
];

export const technicalSpecs = [
  { key: "Electric Ovens", value: "4 units (industry-grade)" },
  { key: "Biomass Ovens", value: "3 units (industrial)" },
  { key: "Total Drying Capacity", value: "3 tons/day" },
  { key: "Blanching Equipment", value: "Industrial continuous blancher — {{REPLACE_WITH_ACTUAL}}" },
  { key: "Washing", value: "Industrial fruit washers (high-pressure)" },
  { key: "Power Source", value: "Grid electricity + on-site solar panels ({{REPLACE_WITH_ACTUAL}}% solar)" },
  { key: "Typical Batch Throughput", value: "{{REPLACE_WITH_ACTUAL}}" },
];

export const processImages = [
  { src: "/placeholder.svg", alt: "Panoramic view of drying ovens with solar panels in background", caption: "Our solar-assisted drying facility" },
  { src: "/placeholder.svg", alt: "Interior of electric drying oven showing loaded fruit racks", caption: "Electric oven interior with fruit racks" },
  { src: "/placeholder.svg", alt: "Close-up of industrial blanching equipment in operation", caption: "Continuous blanching system" },
  { src: "/placeholder.svg", alt: "Industrial fruit washing and cleaning line with water jets", caption: "High-pressure fruit washing line" },
  { src: "/placeholder.svg", alt: "Workers loading trays of sliced fruit into drying ovens", caption: "Loading trays into drying ovens" },
  { src: "/placeholder.svg", alt: "Horizontal process flow diagram showing fruit dehydration stages", caption: "Production process overview" },
];

export const statCards = [
  { value: "4", label: "Electric Ovens", sublabel: "Solar-assisted" },
  { value: "3", label: "Biomass Ovens", sublabel: "Industrial-grade" },
  { value: "3", label: "Tons/Day", sublabel: "Drying capacity" },
];

export const sustainabilityBadges = [
  "Solar-Powered",
  "Renewable Energy",
  "3 Tons/Day Capacity",
  "Export-Ready",
];
