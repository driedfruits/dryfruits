

## Update Homepage SEO Meta to Match Hero Content

The hero section emphasizes "OEM Manufacturer" and "Dehydrated Dried Tropical Fruits" while the SEO title/description use different phrasing. Aligning them improves consistency and click-through from search results.

### Changes — `src/pages/HomePage.tsx`

**Title**: Change from  
`"Wholesale Dried Fruit Manufacturer & Exporter from Indonesia"`  
to  
`"Dehydrated Dried Tropical Fruits OEM Manufacturer from Indonesia"`

**Description**: Change from  
`"Indonesia's premier B2B dried fruit manufacturer. USDA & EU Organic certified. Premium dried tropical fruits & private label solutions. MOQ 500kg. Export to 18+ countries."`  
to  
`"Fully export licensed OEM manufacturer of organic and non-organic dehydrated dried fruits from Indonesia. Chunks, slices, cuts packed with your brand. MOQ 800kg. HACCP & Fair Trade certified."`

**Keywords**: Update to include `"OEM dried fruit manufacturer"`, `"dehydrated tropical fruits Indonesia"`, `"private label dried fruit manufacturer"`.

### Changes — `src/components/SEO.tsx`

**Default description** (fallback): Update to match the new messaging style, replacing "HACCP & Halal certified" with "HACCP & Fair Trade certified" and mentioning OEM/private label.

