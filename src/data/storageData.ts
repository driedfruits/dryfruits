// Storage Guidelines Data
export const storageGuidelines = {
  categories: [
    {
      name: "Dried Fruits",
      tempRange: "10-20°C (50-68°F)",
      humidityMax: "<60% RH",
      waterActivity: "≤0.60 aw",
      shelfLife: "12-24 months",
      icon: "apple",
      tips: ["Store in cool, dark area", "Keep sealed when not in use", "Check for condensation regularly"],
    },
  ],
  bestPractices: [
    {
      title: "Temperature Monitoring",
      description: "Use data loggers to track 24/7 temperature. Set alerts for deviations >2°C from target range.",
      icon: "thermometer",
    },
    {
      title: "Humidity Control",
      description: "Install industrial dehumidifiers in tropical climates. Maintain consistent RH levels year-round.",
      icon: "droplets",
    },
    {
      title: "Pallet Placement",
      description: "Keep pallets minimum 10cm off floor and 50cm from walls. Allows air circulation and prevents condensation.",
      icon: "package",
    },
    {
      title: "FIFO Rotation",
      description: "First-In-First-Out system is essential. Label all incoming stock with receipt dates clearly visible.",
      icon: "timer",
    },
    {
      title: "Pest Control",
      description: "Regular fumigation schedule. Use pheromone traps for early detection. Seal all entry points.",
      icon: "shield",
    },
    {
      title: "Ventilation",
      description: "Ensure adequate air circulation to prevent moisture pockets. Avoid dead zones in warehouse corners.",
      icon: "wind",
    },
  ],
  commonMistakes: [
    {
      mistake: "Storing near heat sources",
      consequence: "Accelerates oxidation, causes moisture migration, and degrades color/flavor compounds",
      solution: "Maintain 2+ meter distance from heaters, machinery, or sun-exposed walls",
    },
    {
      mistake: "Direct sunlight exposure",
      consequence: "UV degradation of natural pigments (carotenoids, anthocyanins) and vitamins",
      solution: "Use opaque packaging and store in windowless areas or use UV-blocking films",
    },
    {
      mistake: "Humidity fluctuations",
      consequence: "Causes moisture cycling - products absorb/release water, leading to caking and mold",
      solution: "Maintain steady RH with HVAC systems; avoid opening warehouse doors frequently",
    },
    {
      mistake: "Improper sealing after sampling",
      consequence: "Exposed product absorbs ambient moisture rapidly, especially powders",
      solution: "Use heat sealers or zip-lock closures immediately. Never leave bags open overnight",
    },
    {
      mistake: "Floor storage without pallets",
      consequence: "Ground condensation transfers moisture to bottom cartons; pest access easier",
      solution: "Always use pallets. Consider moisture-barrier floor sheets in humid climates",
    },
  ],
} as const;

// Storage-related FAQs (used on Storage Guide page)
export const storageFAQs = [
  { 
    question: "What is water activity (aw) and why does it matter?", 
    answer: "Water activity measures moisture available for microbial growth. Dried fruits with aw ≤0.60 prevent bacteria and mold growth, extending shelf life to 18-24 months." 
  },
  { 
    question: "What temperature should I store dried fruits at?", 
    answer: "Most dried fruits should be stored at 10-20°C (50-68°F). Avoid temperature fluctuations." 
  },
  { 
    question: "How does humidity affect dried fruit storage?", 
    answer: "High humidity causes moisture reabsorption, leading to mold growth and quality degradation. Keep relative humidity below 60% for dried fruits." 
  },
] as const;
