import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { B as Button, c as cn, u as useProducts } from "../main.mjs";
import { Leaf, X, Menu, Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock, FileText, MessageCircle, Package, Gift } from "lucide-react";
function CTAButton({ to, href, children, ...props }) {
  if (to) {
    return /* @__PURE__ */ jsx(Button, { asChild: true, ...props, children: /* @__PURE__ */ jsx(Link, { to, children }) });
  }
  if (href) {
    return /* @__PURE__ */ jsx(Button, { asChild: true, ...props, children: /* @__PURE__ */ jsx("a", { href, target: "_blank", rel: "noopener noreferrer", children }) });
  }
  return /* @__PURE__ */ jsx(Button, { ...props, children });
}
function PrimaryButton({ children, ...props }) {
  return /* @__PURE__ */ jsx(CTAButton, { variant: "default", ...props, children });
}
function SecondaryButton({ children, ...props }) {
  return /* @__PURE__ */ jsx(CTAButton, { variant: "outline", ...props, children });
}
function SecondaryLightButton({ children, ...props }) {
  return /* @__PURE__ */ jsx(CTAButton, { variant: "outline-light", ...props, children });
}
function IconButton({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(CTAButton, { variant: "ghost", size: "icon", className: cn("p-2", className), ...props, children });
}
const navigation = [
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certifications" }
];
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80", children: [
    /* @__PURE__ */ jsxs("nav", { className: "container flex h-16 items-center justify-between lg:h-20", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Leaf, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-foreground leading-tight", children: "DFT Indonesia" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Dried Fruits Exporter" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:items-center lg:gap-1", children: navigation.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.href,
          className: `px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${isActive(item.href) ? "text-primary" : "text-foreground"}`,
          children: item.name
        },
        item.name
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex lg:items-center lg:gap-3", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { to: "/samples", size: "sm", children: "Free Samples" }),
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", size: "sm", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          className: "lg:hidden",
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          "aria-label": "Toggle menu",
          children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6 text-foreground" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6 text-foreground" })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container py-4 space-y-2", children: [
      navigation.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.href,
          onClick: () => setMobileMenuOpen(false),
          className: `block px-3 py-3 min-h-[48px] text-base font-medium rounded-lg hover:bg-muted ${isActive(item.href) ? "text-primary" : "text-foreground"}`,
          children: item.name
        },
        item.name
      )),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-2 border-t border-border", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { to: "/samples", className: "w-full", onClick: () => setMobileMenuOpen(false), children: "Free Samples" }),
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", className: "w-full", onClick: () => setMobileMenuOpen(false), children: "Contact" })
      ] })
    ] }) })
  ] });
}
const companyInfo = {
  name: "PT Dried Fruits Total Indonesia",
  shortName: "DFT Indonesia",
  tagline: "Indonesia Dried Fruits Manufacturer",
  established: 2015,
  // Contact
  phone: "+62 811 8797 070",
  whatsapp: "+628118797070",
  email: "export@dryfruits.biz",
  // Address
  address: {
    street: "Jl. Mayor Unus KM 1.5",
    city: "Magelang",
    province: "Central Java",
    country: "Indonesia",
    postalCode: "56172",
    full: "Jl. Mayor Unus KM 1.5, Magelang, Central Java, Indonesia 56172"
  },
  // Working Hours
  workingHours: {
    days: "Monday - Friday",
    hours: "8:00 AM - 5:00 PM",
    timezone: "WIB (Western Indonesia Time)",
    full: "Monday - Friday, 8:00 AM - 5:00 PM (WIB)"
  },
  // Capacity & Stats
  stats: {
    productionCapacity: "100+ tons/month",
    yearsExperience: (/* @__PURE__ */ new Date()).getFullYear() - 2015,
    exportCountries: 18,
    productVarieties: 23
  },
  // Owners
  owners: [
    { name: "Budi Santoso", role: "Co-Founder & CEO" },
    { name: "Dewi Kusuma", role: "Co-Founder & COO" }
  ],
  // Payment Terms
  paymentTerms: {
    deposit: "50%",
    balance: "50% before shipping",
    methods: ["T/T (Bank Transfer)", "L/C (Letter of Credit)"],
    leadTime: "2-3 weeks",
    moq: "500 kg - 1 ton"
  },
  // Logistics defaults
  defaultLogistics: {
    portOfLoading: "Tanjung Priok (Jakarta) / Tanjung Perak (Surabaya)",
    incoterms: ["FOB", "CIF", "CNF", "Ex-Works"],
    containerLoad20ft: "~8-10 MT",
    containerLoad40ft: "~18-22 MT"
  },
  // Standard export documents
  standardExportDocuments: [
    "Bill of Lading (B/L)",
    "Commercial Invoice & Packing List",
    "Certificate of Origin (COO)",
    "Phytosanitary Certificate (Barantan)",
    "Certificate of Analysis (COA)",
    "Halal Certificate (MUI/BPJPH)"
  ],
  // Default compliance
  defaultCompliance: {
    usa: "FDA Registered, FSVP Compliant",
    eu: "EFSA compliant, meets EU Ochratoxin A & Sulfite limits",
    global: "HACCP / ISO 22000 Manufacturing"
  },
  // Legal / Government Registration
  legalInfo: {
    legalName: "PT Dried Fruits Total Indonesia",
    nib: {
      label: "NIB (Business ID Number)",
      value: "8962548791220"
    },
    npwp: {
      label: "NPWP (Tax ID Number)",
      value: "61.318.225.6-723.000"
    },
    bankAccount: {
      bankName: "BCA",
      accountNumber: "122 07071222",
      accountName: "PT Dried Fruits Total Indonesia"
    }
  }
};
const socialLinks = {
  linkedin: "https://linkedin.com/company/dft-indonesia",
  instagram: "https://instagram.com/dftindonesia",
  facebook: "https://facebook.com/dftindonesia",
  youtube: "https://youtube.com/@dftindonesia"
};
const certifications = [
  {
    id: "usda-organic",
    name: "USDA Organic",
    description: "United States Department of Agriculture Organic Certification",
    icon: "leaf"
  },
  {
    id: "eu-organic",
    name: "EU Organic",
    description: "European Union Organic Certification",
    icon: "leaf"
  },
  {
    id: "haccp",
    name: "HACCP",
    description: "Hazard Analysis Critical Control Points",
    icon: "shield"
  },
  {
    id: "halal",
    name: "Halal",
    description: "Halal Certification",
    icon: "check"
  }
];
const teamMembers = [
  { id: 1, name: "Budi Santoso", role: "CEO & Co-Founder", email: "budi@dryfruits.biz" },
  { id: 2, name: "Dewi Kusuma", role: "COO & Co-Founder", email: "dewi@dryfruits.biz" },
  { id: 3, name: "Ahmad Prasetyo", role: "Export Manager", email: "ahmad@dryfruits.biz" },
  { id: 4, name: "Siti Rahayu", role: "Quality Control Manager", email: "siti@dryfruits.biz" },
  { id: 5, name: "Rizki Hidayat", role: "Production Manager", email: "rizki@dryfruits.biz" },
  { id: 6, name: "Maya Indah", role: "Marketing Manager", email: "maya@dryfruits.biz" },
  { id: 7, name: "Eko Wijaya", role: "Logistics Coordinator", email: "eko@dryfruits.biz" },
  { id: 8, name: "Linda Permata", role: "Finance Manager", email: "linda@dryfruits.biz" },
  { id: 9, name: "Fajar Rahman", role: "R&D Specialist", email: "fajar@dryfruits.biz" }
];
const exportCountries = [
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Europe", countries: ["Germany", "Netherlands", "UK", "France", "Italy", "Spain"] },
  { region: "Asia Pacific", countries: ["Japan", "South Korea", "Australia", "New Zealand", "Singapore"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar"] },
  { region: "Others", countries: ["South Africa", "Brazil"] }
];
const targetSegments = [
  {
    name: "Food Manufacturers",
    description: "Ingredients for cereals, granola, snack bars, and baked goods",
    icon: "factory"
  },
  {
    name: "Beverage Companies",
    description: "Natural ingredients for smoothies, juices, and health drinks",
    icon: "glass-water"
  },
  {
    name: "Retail & Supermarkets",
    description: "Private label and branded dried fruit products",
    icon: "store"
  },
  {
    name: "Trading Companies",
    description: "Bulk supply for redistribution and wholesale",
    icon: "globe"
  }
];
const getProductById = (products, id) => {
  return products.find((p) => p.id === id);
};
const getProductsByCategory = (products, category) => {
  return products.filter((p) => p.category === category);
};
const getRelatedProducts = (products, productId) => {
  const product = getProductById(products, productId);
  if (!product) return [];
  return product.relatedProducts.map((id) => getProductById(products, id)).filter((p) => p !== void 0);
};
const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube
};
function Footer() {
  const { products } = useProducts();
  const driedFruits = getProductsByCategory(products, "dried-fruits");
  const footerLinks = {
    products: [
      { name: "All Dried Fruits", href: "/products" },
      ...driedFruits.map((p) => ({ name: p.shortName, href: `/products/dried-fruits/${p.id}` }))
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Certifications", href: "/certifications" }
    ],
    resources: [
      { name: "Shipping & Logistics", href: "/shipping" },
      { name: "Storage Guide", href: "/storage-guide" },
      { name: "Free Samples", href: "/samples" },
      { name: "Download Catalog", href: "/catalog" },
      { name: "Contact Us", href: "/contact" }
    ]
  };
  return /* @__PURE__ */ jsxs("footer", { className: "bg-foreground text-on-dark", children: [
    /* @__PURE__ */ jsxs("div", { className: "container py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Leaf, { className: "h-6 w-6", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-on-dark leading-tight", children: companyInfo.shortName }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-on-dark-muted", children: [
                "Est. ",
                companyInfo.established
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-on-dark-muted mb-6 max-w-sm", children: [
            companyInfo.tagline,
            ". Premium dried fruits for global B2B buyers."
          ] }),
          /* @__PURE__ */ jsxs("address", { className: "not-italic space-y-1", children: [
            /* @__PURE__ */ jsxs("a", { href: `mailto:${companyInfo.email}`, className: "flex items-center gap-3 py-2 min-h-[48px] text-base text-on-dark-muted hover:text-primary transition-colors", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 shrink-0", "aria-hidden": "true" }),
              companyInfo.email
            ] }),
            /* @__PURE__ */ jsxs("a", { href: `tel:${companyInfo.phone}`, className: "flex items-center gap-3 py-2 min-h-[48px] text-base text-on-dark-muted hover:text-primary transition-colors", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 shrink-0", "aria-hidden": "true" }),
              companyInfo.phone
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 py-2 text-base text-on-dark-muted", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 mt-0.5 shrink-0", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { children: companyInfo.address.full })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3 py-2 text-base text-on-dark-muted", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 shrink-0", "aria-hidden": "true" }),
              companyInfo.workingHours.full
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Product categories", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-on-dark mb-4", children: "Products" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: footerLinks.products.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "block py-2 text-base text-on-dark-muted hover:text-primary transition-colors", children: link.name }) }, link.name)) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Company pages", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-on-dark mb-4", children: "Company" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: footerLinks.company.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "block py-2 text-base text-on-dark-muted hover:text-primary transition-colors", children: link.name }) }, link.name)) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Resources", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-on-dark mb-4", children: "Resources" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: footerLinks.resources.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "block py-2 text-base text-on-dark-muted hover:text-primary transition-colors", children: link.name }) }, link.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-on-dark-subtle/30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-on-dark-subtle", children: "Certified:" }),
          certifications.map((cert) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm text-on-dark-muted bg-on-dark/10 px-3 py-1 rounded-full", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "h-4 w-4", "aria-hidden": "true" }),
            cert.name
          ] }, cert.id))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-on-dark-subtle", children: "Follow us:" }),
          Object.entries(socialLinks).map(([key, url]) => {
            const Icon = socialIcons[key];
            return /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "flex h-12 w-12 items-center justify-center rounded-full bg-on-dark/10 text-on-dark-muted hover:bg-primary hover:text-primary-foreground transition-colors", "aria-label": `Follow us on ${key}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }, key);
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-on-dark-subtle/30", children: /* @__PURE__ */ jsxs("div", { className: "container py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm text-on-dark-subtle", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "NIB: ",
            companyInfo.legalInfo.nib.value
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "NPWP: ",
            companyInfo.legalInfo.npwp.value
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-on-dark-subtle", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          companyInfo.name,
          ". All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "py-2 px-3 min-h-[44px] flex items-center text-base text-on-dark-subtle hover:text-primary transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx(Link, { to: "/terms", className: "py-2 px-3 min-h-[44px] flex items-center text-base text-on-dark-subtle hover:text-primary transition-colors", children: "Terms of Service" })
        ] })
      ] })
    ] }) })
  ] });
}
function trackGA4Event(eventName, params) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
function trackFBPixelEvent(eventName, params) {
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}
function useWhatsApp({
  message = "Hello! I'm interested in your dried fruit products.",
  source = "unknown"
} = {}) {
  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${companyInfo.whatsapp}?text=${encoded}`;
  }, [message]);
  const handleClick = useCallback(
    (e) => {
      e == null ? void 0 : e.preventDefault();
      trackGA4Event("whatsapp_click", {
        source,
        message_preview: message.slice(0, 100)
      });
      trackFBPixelEvent("Contact", {
        content_name: "WhatsApp",
        source
      });
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    },
    [whatsappUrl, source, message]
  );
  return { whatsappUrl, handleClick };
}
const tabs = [
  { name: "Products", href: "/products", icon: Package },
  { name: "Samples", href: "/samples", icon: Gift }
];
function MobileBottomNav() {
  const { handleClick } = useWhatsApp({ source: "mobile_nav" });
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md lg:hidden pb-safe",
      "aria-label": "Mobile navigation",
      children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center justify-around", children: [
        tabs.map((tab) => /* @__PURE__ */ jsx(
          NavLink,
          {
            to: tab.href,
            className: ({ isActive }) => `flex flex-1 flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] py-2 transition-colors duration-200 active:scale-95 ${isActive ? "text-primary" : "text-muted-foreground"}`,
            children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: `rounded-full p-2.5 transition-colors ${isActive ? "bg-primary/10" : ""}`, children: /* @__PURE__ */ jsx(tab.icon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: tab.name })
            ] })
          },
          tab.name
        )),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleClick,
            className: "flex flex-1 flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] py-2 text-whatsapp transition-colors duration-200 active:scale-95",
            "aria-label": "Contact us on WhatsApp",
            children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-full bg-whatsapp/10 p-2.5", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "WhatsApp" })
            ]
          }
        )
      ] })
    }
  );
}
function WhatsAppButton({
  message,
  className = "",
  variant = "inline",
  size = "default"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { handleClick } = useWhatsApp({ message, source: variant });
  useEffect(() => {
    if (variant !== "floating") return;
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);
  if (variant === "floating") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleClick,
        className: `fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 animate-[pulse-glow_8s_ease-in-out_infinite] [animation-delay:3s] hover:[animation-play-state:paused] motion-reduce:animate-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} ${className}`,
        "aria-label": "Contact us on WhatsApp",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" })
      }
    );
  }
  if (variant === "full") {
    return /* @__PURE__ */ jsxs(Button, { variant: "whatsapp", size, className, onClick: handleClick, children: [
      /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
      "Chat on WhatsApp"
    ] });
  }
  return /* @__PURE__ */ jsxs(Button, { variant: "whatsapp", size, className, onClick: handleClick, children: [
    /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
    "WhatsApp"
  ] });
}
const SITE_URL = "https://dryfruits.biz";
const WEB3FORMS_ACCESS_KEY = "cac19d89-6caa-40d7-b262-2f9ba0236a31";
const categoryLabels = {
  "dried-fruits": "Dried Fruits"
};
function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalInfo.legalName,
    alternateName: companyInfo.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: companyInfo.established.toString(),
    description: companyInfo.tagline,
    slogan: companyInfo.tagline,
    taxID: companyInfo.legalInfo.npwp.value,
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "NIB",
        name: "Business Identification Number (NIB)",
        value: companyInfo.legalInfo.nib.value
      },
      {
        "@type": "PropertyValue",
        propertyID: "NPWP",
        name: "Taxpayer Identification Number (NPWP)",
        value: companyInfo.legalInfo.npwp.value
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.province,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "ID"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "sales",
      email: companyInfo.email,
      availableLanguage: ["English", "Indonesian"],
      areaServed: ["North America", "Europe", "Asia Pacific", "Middle East"]
    },
    sameAs: [
      socialLinks.linkedin,
      socialLinks.instagram,
      socialLinks.facebook,
      socialLinks.youtube
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wholesale Dried Fruits Catalog",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Dried Fruits" }
      ]
    }
  };
}
function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodManufacturer",
    "@id": `${SITE_URL}/#localbusiness`,
    name: companyInfo.name,
    legalName: companyInfo.legalInfo.legalName,
    taxID: companyInfo.legalInfo.npwp.value,
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "NIB",
        name: "Business Identification Number (NIB)",
        value: companyInfo.legalInfo.nib.value
      }
    ],
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.province,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.4797,
      longitude: 110.2177
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00"
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 0,
        longitude: 0
      },
      geoRadius: "20000 km"
    }
  };
}
function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: companyInfo.name,
    description: `${companyInfo.tagline}. Premium dried tropical fruits from Indonesia for B2B buyers worldwide.`,
    publisher: {
      "@id": `${SITE_URL}/#organization`
    },
    inLanguage: "en-US"
  };
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function generateProductSchema(product) {
  var _a, _b;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.category}/${product.id}`,
    name: `Wholesale ${product.name} - Indonesian Origin`,
    description: product.metaDescription || product.description,
    sku: product.sku,
    gtin: product.hsCode,
    brand: {
      "@type": "Brand",
      name: companyInfo.name
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`
    },
    category: categoryLabels[product.category],
    countryOfOrigin: {
      "@type": "Country",
      name: "Indonesia"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.pricing.fobBase.replace(/[^0-9.]/g, ""),
      availability: ((_a = product.availability) == null ? void 0 : _a.currentStatus) === "in-stock" ? "https://schema.org/InStock" : ((_b = product.availability) == null ? void 0 : _b.currentStatus) === "limited" ? "https://schema.org/LimitedAvailability" : "https://schema.org/PreOrder",
      seller: {
        "@id": `${SITE_URL}/#organization`
      },
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: product.pricing.moq,
        unitCode: "KGM"
      }
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Wholesale Importers, Food Manufacturers, Private Label Brands"
    },
    additionalProperty: [
      product.specifications.moisture && {
        "@type": "PropertyValue",
        name: "Moisture Content",
        value: product.specifications.moisture
      },
      product.specifications.shelfLife && {
        "@type": "PropertyValue",
        name: "Shelf Life",
        value: product.specifications.shelfLife
      },
      product.specifications.origin && {
        "@type": "PropertyValue",
        name: "Origin",
        value: product.specifications.origin
      }
    ].filter(Boolean),
    hasCertification: product.certifications.map((cert) => ({
      "@type": "Certification",
      name: cert
    })),
    isRelatedTo: product.relatedProducts.map((relatedId) => ({
      "@type": "Product",
      "@id": `${SITE_URL}/products/${product.category}/${relatedId}`
    }))
  };
}
function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function generateItemListSchema(products, categoryName, categoryUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${categoryName} - Wholesale from Indonesia`,
    url: categoryUrl,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE_URL}/products/${product.category}/${product.id}`,
        name: product.name,
        description: product.tagline,
        url: `${SITE_URL}/products/${product.category}/${product.id}`
      }
    }))
  };
}
const ORGANIZATION_SCHEMA_STRING = JSON.stringify(generateOrganizationSchema());
const LOCAL_BUSINESS_SCHEMA_STRING = JSON.stringify(generateLocalBusinessSchema());
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: ORGANIZATION_SCHEMA_STRING }
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: LOCAL_BUSINESS_SCHEMA_STRING }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { id: "main-content", className: "flex-1 pb-16 lg:pb-0", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, { variant: "floating", className: "hidden lg:flex" }),
    /* @__PURE__ */ jsx(MobileBottomNav, {})
  ] });
}
export {
  Layout as L,
  PrimaryButton as P,
  SecondaryLightButton as S,
  WhatsAppButton as W,
  certifications as a,
  SecondaryButton as b,
  companyInfo as c,
  generateWebSiteSchema as d,
  exportCountries as e,
  generateBreadcrumbSchema as f,
  getProductsByCategory as g,
  generateItemListSchema as h,
  SITE_URL as i,
  getProductById as j,
  teamMembers as k,
  socialIcons as l,
  generateFAQSchema as m,
  WEB3FORMS_ACCESS_KEY as n,
  trackGA4Event as o,
  trackFBPixelEvent as p,
  categoryLabels as q,
  getRelatedProducts as r,
  socialLinks as s,
  targetSegments as t,
  generateProductSchema as u
};
