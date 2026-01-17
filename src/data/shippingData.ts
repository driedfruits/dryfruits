// Shipping process and export documentation data
export const shippingProcess = [
  {
    step: "1",
    title: "Order Confirmation",
    description: "Receive proforma invoice, confirm order details and specifications",
  },
  {
    step: "2",
    title: "Deposit Payment",
    description: "50% deposit via T/T or L/C opening",
  },
  {
    step: "3",
    title: "Production",
    description: "2-3 weeks production and quality control",
  },
  {
    step: "4",
    title: "Balance Payment",
    description: "50% balance before shipment",
  },
  {
    step: "5",
    title: "Shipment",
    description: "Container loading and shipping with full documentation",
  },
  {
    step: "6",
    title: "Delivery",
    description: "Arrival at destination port with customs-ready documents",
  },
] as const;

export const exportDocs = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Health Certificate",
  "Certificate of Analysis",
  "Organic Certificate",
  "Fumigation Certificate (if required)",
  "Insurance Certificate (if required)",
] as const;
