import { jsx, jsxs } from "react/jsx-runtime";
import { L as Layout } from "./Layout-C1jIX7PL.js";
import { S as SEO } from "./SEO-DyJUFjbz.js";
import { c as cn, B as Button } from "../main.mjs";
import * as React from "react";
import { useState, useEffect } from "react";
import { L as Label } from "./label-DPO1kvhT.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-Blg67-Ce.js";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Home, Search, Settings, User, Menu, Filter, SortAsc, ChevronRight, ArrowRight, ExternalLink, Mail, Phone, MessageCircle, Send, Bell, BellOff, Share2, Clipboard, Copy, Download, Package, Truck, Globe, ShoppingCart, CreditCard, Tag, Percent, BarChart3, PieChart, TrendingUp, Leaf, Award, Shield, Star, Heart, Bookmark, BookmarkCheck, Zap, MapPin, Calendar, Check, X, AlertTriangle, Eye, Edit, Trash2, Plus, Minus, Lock, Unlock } from "lucide-react";
import "react-router-dom";
import "react-helmet-async";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "@radix-ui/react-label";
import "@radix-ui/react-accordion";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }));
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function parseHSL(raw) {
  if (!raw) return null;
  const parts = raw.trim().split(/\s+/).map((v) => parseFloat(v));
  if (parts.length < 3 || parts.some(isNaN)) return null;
  const [h, s, l] = parts;
  return { h, s, l, hex: hslToHex(h, s, l), hsl: `hsl(${h}, ${s}%, ${l}%)` };
}
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
function ColorSwatch({ name, varName }) {
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(parseHSL(getCSSVar(varName)));
  }, [varName]);
  if (!color) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full h-20 rounded-lg border border-border shadow-sm",
        style: { backgroundColor: color.hsl }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: name }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground font-mono", children: varName }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground font-mono", children: color.hex }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground font-mono", children: `${color.h} ${color.s}% ${color.l}%` })
    ] })
  ] });
}
function SectionTitle({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mb-6 pb-3 border-b border-border", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children }) });
}
function SubSection({ title, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-4", children: title }),
    children
  ] });
}
const COLOR_GROUPS = [
  {
    title: "Core",
    colors: [
      { name: "Primary", varName: "--primary" },
      { name: "Primary Foreground", varName: "--primary-foreground" },
      { name: "Secondary", varName: "--secondary" },
      { name: "Secondary Foreground", varName: "--secondary-foreground" },
      { name: "Background", varName: "--background" },
      { name: "Foreground", varName: "--foreground" }
    ]
  },
  {
    title: "UI",
    colors: [
      { name: "Card", varName: "--card" },
      { name: "Card Foreground", varName: "--card-foreground" },
      { name: "Popover", varName: "--popover" },
      { name: "Popover Foreground", varName: "--popover-foreground" },
      { name: "Muted", varName: "--muted" },
      { name: "Muted Foreground", varName: "--muted-foreground" },
      { name: "Accent", varName: "--accent" },
      { name: "Accent Foreground", varName: "--accent-foreground" },
      { name: "Destructive", varName: "--destructive" },
      { name: "Border", varName: "--border" },
      { name: "Input", varName: "--input" },
      { name: "Ring", varName: "--ring" }
    ]
  },
  {
    title: "Brand",
    colors: [
      { name: "Tropical Green", varName: "--tropical-green" },
      { name: "Tropical Green Light", varName: "--tropical-green-light" },
      { name: "Tropical Green Dark", varName: "--tropical-green-dark" },
      { name: "Earth Brown", varName: "--earth-brown" },
      { name: "Earth Brown Light", varName: "--earth-brown-light" },
      { name: "Earth Brown Dark", varName: "--earth-brown-dark" },
      { name: "Gold", varName: "--gold" },
      { name: "Gold Light", varName: "--gold-light" },
      { name: "WhatsApp", varName: "--whatsapp" },
      { name: "WhatsApp Hover", varName: "--whatsapp-hover" }
    ]
  },
  {
    title: "Contrast Tokens (for text on colored backgrounds)",
    colors: [
      { name: "On Primary", varName: "--on-primary" },
      { name: "On Primary Muted", varName: "--on-primary-muted" },
      { name: "On Accent", varName: "--on-accent" },
      { name: "On Dark", varName: "--on-dark" },
      { name: "On Dark Muted", varName: "--on-dark-muted" },
      { name: "On Dark Subtle", varName: "--on-dark-subtle" }
    ]
  }
];
const HEADING_SAMPLES = [
  { tag: "h1", className: "text-4xl md:text-5xl", label: "Heading 1 — 36px / 48px" },
  { tag: "h2", className: "text-3xl md:text-4xl", label: "Heading 2 — 30px / 36px" },
  { tag: "h3", className: "text-2xl md:text-3xl", label: "Heading 3 — 24px / 30px" },
  { tag: "h4", className: "text-xl md:text-2xl", label: "Heading 4 — 20px / 24px" },
  { tag: "h5", className: "text-lg md:text-xl", label: "Heading 5 — 18px / 20px" },
  { tag: "h6", className: "text-base md:text-lg", label: "Heading 6 — 16px / 18px" }
];
const BODY_SIZES = [
  { name: "XS", className: "text-xs", px: "12px" },
  { name: "SM", className: "text-sm", px: "14px" },
  { name: "Base", className: "text-base", px: "16px" },
  { name: "LG", className: "text-lg", px: "18px" },
  { name: "XL", className: "text-xl", px: "20px" },
  { name: "2XL", className: "text-2xl", px: "24px" }
];
const SPACING_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64];
const BUTTON_VARIANTS = [
  "default",
  "outline",
  "outline-light",
  "secondary",
  "ghost",
  "link",
  "whatsapp",
  "accent",
  "gold",
  "destructive"
];
const BUTTON_SIZES = ["sm", "default", "lg", "xl", "icon"];
function DesignSystemPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Design System — PT Dried Fruits Total Indonesia",
        description: "Internal design system and style guide reference.",
        noIndex: true
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container py-12 max-w-6xl space-y-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-foreground mb-3", children: "Design System" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Visual reference for designers and developers. All values are pulled live from CSS custom properties and stay in sync with the site theme." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "1. Color Palette" }),
        COLOR_GROUPS.map((group) => /* @__PURE__ */ jsx(SubSection, { title: group.title, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4", children: group.colors.map((c) => /* @__PURE__ */ jsx(ColorSwatch, { name: c.name, varName: c.varName }, c.varName)) }) }, group.title))
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "2. Typography" }),
        /* @__PURE__ */ jsx(SubSection, { title: "Font Families", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-card border border-border", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1 font-mono", children: "font-heading / font-body" }),
            /* @__PURE__ */ jsx("p", { className: "font-heading text-xl", children: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-card border border-border", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1 font-mono", children: "font-mono" }),
            /* @__PURE__ */ jsx("p", { className: "font-mono text-xl", children: "SFMono-Regular, Menlo, Monaco, Consolas, monospace" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Heading Scale", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: HEADING_SAMPLES.map((h) => /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-card border border-border flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
            `<${h.tag}>`,
            " — ",
            h.label
          ] }),
          /* @__PURE__ */ jsx("div", { className: h.className + " font-heading font-bold tracking-tight text-foreground", children: "The quick brown fox jumps" })
        ] }, h.tag)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Body Text Sizes", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: BODY_SIZES.map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-4 p-3 rounded-lg bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground font-mono w-20 shrink-0", children: [
            s.className,
            " (",
            s.px,
            ")"
          ] }),
          /* @__PURE__ */ jsx("span", { className: `${s.className} text-foreground`, children: "Pack dried mango into 10kg cartons for export." })
        ] }, s.name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Font Weight", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
          { name: "Normal", className: "font-normal" },
          { name: "Medium", className: "font-medium" },
          { name: "Semibold", className: "font-semibold" },
          { name: "Bold", className: "font-bold" }
        ].map((w) => /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground font-mono mb-2", children: w.className }),
          /* @__PURE__ */ jsx("p", { className: `text-lg text-foreground ${w.className}`, children: w.name })
        ] }, w.name)) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "3. Spacing & Layout" }),
        /* @__PURE__ */ jsx(SubSection, { title: "Base Unit: 4px (--spacing: 0.25rem)", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: SPACING_SCALE.map((n) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground font-mono w-16 shrink-0 text-right", children: [
            "p-",
            n
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground w-12 shrink-0", children: [
            n * 4,
            "px"
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-4 rounded-sm bg-primary/30",
              style: { width: `${n * 4}px` }
            }
          )
        ] }, n)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Container Widths", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4 text-muted-foreground font-medium", children: "Breakpoint" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4 text-muted-foreground font-medium", children: "Max Width" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 text-muted-foreground font-medium", children: "Padding" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "font-mono text-foreground", children: [
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "Default" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "100%" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "1rem (16px)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "sm (640px)" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "100%" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "1.5rem (24px)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "lg (1024px)" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "100%" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "2rem (32px)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "2xl (1536px)" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "1400px" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "2rem (32px)" })
            ] })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "4. Border Radius" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6", children: [
          { name: "SM", className: "rounded-sm", value: "calc(0.75rem - 4px) = 8px" },
          { name: "MD", className: "rounded-md", value: "calc(0.75rem - 2px) = 10px" },
          { name: "LG", className: "rounded-lg", value: "0.75rem = 12px" }
        ].map((r) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: `w-24 h-24 mx-auto bg-primary/20 border-2 border-primary ${r.className}` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: r.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground font-mono", children: r.className }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.value })
        ] }, r.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "5. Shadows" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: [
          { name: "Shadow Soft", className: "shadow-soft" },
          { name: "Shadow Glow", className: "shadow-glow" },
          { name: "Shadow SM", className: "shadow-sm" },
          { name: "Shadow MD", className: "shadow-md" },
          { name: "Shadow LG", className: "shadow-lg" },
          { name: "Shadow XL", className: "shadow-xl" }
        ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: `w-full h-24 rounded-lg bg-card ${s.className}` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: s.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
            ".",
            s.className
          ] })
        ] }, s.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "6. Button Variants" }),
        /* @__PURE__ */ jsxs(SubSection, { title: "All Variants (default size)", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 p-6 rounded-lg bg-card border border-border", children: BUTTON_VARIANTS.map((v) => /* @__PURE__ */ jsx(Button, { variant: v, children: v }, v)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-6 rounded-lg bg-primary", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-on-primary mb-3 font-mono", children: "On primary background:" }),
            /* @__PURE__ */ jsx(Button, { variant: "outline-light", children: "outline-light" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(SubSection, { title: "All Sizes (default variant)", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-end gap-3 p-6 rounded-lg bg-card border border-border", children: BUTTON_SIZES.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsx(Button, { size: s, children: s === "icon" ? "★" : s }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
            'size="',
            s,
            '"'
          ] })
        ] }, s)) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "7. Contrast & Accessibility" }),
        /* @__PURE__ */ jsx(SubSection, { title: "WCAG AA Requirements", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-foreground p-4 rounded-lg bg-card border border-border", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Normal text" }),
            " (<18px): ",
            /* @__PURE__ */ jsx("strong", { children: "4.5:1" }),
            " minimum contrast ratio"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Large text" }),
            " (≥18px bold / ≥24px): ",
            /* @__PURE__ */ jsx("strong", { children: "3:1" }),
            " minimum"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "UI components" }),
            " (borders, icons): ",
            /* @__PURE__ */ jsx("strong", { children: "3:1" }),
            " minimum"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Touch targets" }),
            ": minimum ",
            /* @__PURE__ */ jsx("strong", { children: "48×48px" }),
            " on mobile"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Contrast Utility Classes", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg", style: { backgroundColor: "hsl(20, 90%, 48%)" }, children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono mb-2 text-on-primary-muted", children: "On --primary background:" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-primary text-lg font-semibold", children: ".text-on-primary — Main heading text" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-primary-muted", children: ".text-on-primary-muted — Supporting text" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg", style: { backgroundColor: "hsl(30, 35%, 12%)" }, children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono mb-2 text-on-dark-subtle", children: "On dark background (footer etc):" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-dark text-lg font-semibold", children: ".text-on-dark — Main heading text" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-dark-muted", children: ".text-on-dark-muted — Supporting text" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-dark-subtle", children: ".text-on-dark-subtle — Tertiary text" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg bg-tropical-green", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono mb-2 text-on-primary-muted", children: "On --tropical-green background:" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-primary text-lg font-semibold", children: ".text-on-primary — Heading" }),
            /* @__PURE__ */ jsx("p", { className: "text-on-primary-muted", children: ".text-on-primary-muted — Body" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Focus States", children: /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg bg-card border border-border space-y-3", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-3", children: [
            "All interactive elements use ",
            /* @__PURE__ */ jsx("code", { className: "font-mono text-xs bg-muted px-1 py-0.5 rounded", children: "focus-visible:ring-2 ring-ring ring-offset-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(Button, { children: "Tab to me" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-primary underline", children: "Focus this link" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "8. Gradients" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          { name: "gradient-primary", className: "gradient-primary" },
          { name: "gradient-hero", className: "gradient-hero" },
          { name: "gradient-gold", className: "gradient-gold" }
        ].map((g) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: `h-24 rounded-lg ${g.className}` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: g.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
            ".",
            g.className
          ] })
        ] }, g.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "9. Animations" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4 text-muted-foreground font-medium", children: "Class" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4 text-muted-foreground font-medium", children: "Duration" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 text-muted-foreground font-medium", children: "Use Case" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "text-foreground", children: [
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-fade-in" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "0.5s" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "General fade entrance" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-slide-up" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "0.5s" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Cards, sections entering viewport" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-scale-in" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "0.3s" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Modals, popovers" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-content-reveal" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "0.4s" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Content sections" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-blur-up" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "0.5s" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Image loading transitions" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-float" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "3s ∞" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Floating elements (WhatsApp)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: ".animate-pulse-glow" }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: "4s ∞" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Glowing attention elements" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          "Stagger delays: ",
          /* @__PURE__ */ jsx("code", { className: "font-mono bg-muted px-1 rounded", children: ".animation-delay-75" }),
          " through ",
          /* @__PURE__ */ jsx("code", { className: "font-mono bg-muted px-1 rounded", children: ".animation-delay-300" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "10. Icon Library (Lucide React)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
          "Import individually: ",
          /* @__PURE__ */ jsx("code", { className: "font-mono bg-muted px-1.5 py-0.5 rounded text-xs", children: "import { IconName } from 'lucide-react'" }),
          ". All icons are tree-shaken — only imported icons ship in the bundle."
        ] }),
        /* @__PURE__ */ jsx(SubSection, { title: "Navigation & UI", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4", children: [
          { icon: Home, name: "Home" },
          { icon: Search, name: "Search" },
          { icon: Settings, name: "Settings" },
          { icon: User, name: "User" },
          { icon: Menu, name: "Menu" },
          { icon: Filter, name: "Filter" },
          { icon: SortAsc, name: "SortAsc" },
          { icon: ChevronRight, name: "ChevronRight" },
          { icon: ArrowRight, name: "ArrowRight" },
          { icon: ExternalLink, name: "ExternalLink" }
        ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate w-full text-center", children: name })
        ] }, name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Communication & Actions", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4", children: [
          { icon: Mail, name: "Mail" },
          { icon: Phone, name: "Phone" },
          { icon: MessageCircle, name: "MessageCircle" },
          { icon: Send, name: "Send" },
          { icon: Bell, name: "Bell" },
          { icon: BellOff, name: "BellOff" },
          { icon: Share2, name: "Share2" },
          { icon: Clipboard, name: "Clipboard" },
          { icon: Copy, name: "Copy" },
          { icon: Download, name: "Download" }
        ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate w-full text-center", children: name })
        ] }, name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Business & Commerce", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4", children: [
          { icon: Package, name: "Package" },
          { icon: Truck, name: "Truck" },
          { icon: Globe, name: "Globe" },
          { icon: ShoppingCart, name: "ShoppingCart" },
          { icon: CreditCard, name: "CreditCard" },
          { icon: Tag, name: "Tag" },
          { icon: Percent, name: "Percent" },
          { icon: BarChart3, name: "BarChart3" },
          { icon: PieChart, name: "PieChart" },
          { icon: TrendingUp, name: "TrendingUp" }
        ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate w-full text-center", children: name })
        ] }, name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Brand & Industry", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4", children: [
          { icon: Leaf, name: "Leaf" },
          { icon: Award, name: "Award" },
          { icon: Shield, name: "Shield" },
          { icon: Star, name: "Star" },
          { icon: Heart, name: "Heart" },
          { icon: Bookmark, name: "Bookmark" },
          { icon: BookmarkCheck, name: "BookmarkCheck" },
          { icon: Zap, name: "Zap" },
          { icon: MapPin, name: "MapPin" },
          { icon: Calendar, name: "Calendar" }
        ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate w-full text-center", children: name })
        ] }, name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Status & Feedback", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4", children: [
          { icon: Check, name: "Check" },
          { icon: X, name: "X" },
          { icon: AlertTriangle, name: "AlertTriangle" },
          { icon: Eye, name: "Eye" },
          { icon: Edit, name: "Edit" },
          { icon: Trash2, name: "Trash2" },
          { icon: Plus, name: "Plus" },
          { icon: Minus, name: "Minus" },
          { icon: Lock, name: "Lock" },
          { icon: Unlock, name: "Unlock" }
        ].map(({ icon: Icon, name }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground font-mono truncate w-full text-center", children: name })
        ] }, name)) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Icon Sizes", children: /* @__PURE__ */ jsx("div", { className: "flex items-end gap-6 p-6 rounded-lg bg-card border border-border", children: [
          { size: 16, label: "16px (xs)" },
          { size: 20, label: "20px (sm)" },
          { size: 24, label: "24px (default)" },
          { size: 32, label: "32px (lg)" },
          { size: 48, label: "48px (xl)" }
        ].map(({ size, label }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(Package, { size, className: "text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground font-mono", children: label })
        ] }, size)) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx(SectionTitle, { children: "11. Component Examples" }),
        /* @__PURE__ */ jsx(SubSection, { title: "Cards", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Basic Card" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Default card with header, content, and footer." })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Cards use ",
              /* @__PURE__ */ jsx("code", { className: "font-mono text-xs bg-muted px-1 rounded", children: "--card" }),
              " background with ",
              /* @__PURE__ */ jsx("code", { className: "font-mono text-xs bg-muted px-1 rounded", children: "--card-foreground" }),
              " text."
            ] }) }),
            /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Action" }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "h-40 bg-gradient-to-br from-tropical-green to-tropical-green-light flex items-center justify-center", children: /* @__PURE__ */ jsx(Package, { className: "h-12 w-12 text-on-primary" }) }),
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-primary-foreground", children: "Organic" }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Premium" })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Dried Mango" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Sweet, chewy tropical fruit slices" })
            ] }),
            /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: "$8.50/kg" }),
              /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
                " Details"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Monthly Orders" }),
              /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-tropical-green" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-foreground", children: "2,350" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-tropical-green flex items-center gap-1 mt-1", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
                " +12.5% from last month"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Forms", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Contact Form" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Standard form layout with labels and inputs." })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "ds-first", children: "First Name" }),
                  /* @__PURE__ */ jsx(Input, { id: "ds-first", placeholder: "John" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "ds-last", children: "Last Name" }),
                  /* @__PURE__ */ jsx(Input, { id: "ds-last", placeholder: "Doe" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "ds-email", children: "Email" }),
                /* @__PURE__ */ jsx(Input, { id: "ds-email", type: "email", placeholder: "john@company.com" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "ds-message", children: "Message" }),
                /* @__PURE__ */ jsx(Textarea, { id: "ds-message", placeholder: "Tell us about your requirements...", rows: 3 })
              ] })
            ] }),
            /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs(Button, { className: "w-full", children: [
              /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
              " Send Message"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Input States" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Various form input states for reference." })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { children: "Default" }),
                /* @__PURE__ */ jsx(Input, { placeholder: "Default input" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { children: "With Value" }),
                /* @__PURE__ */ jsx(Input, { defaultValue: "PT Dried Fruits Total Indonesia" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { children: "Disabled" }),
                /* @__PURE__ */ jsx(Input, { disabled: true, placeholder: "Disabled input" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { className: "text-destructive", children: "Error State" }),
                /* @__PURE__ */ jsx(Input, { className: "border-destructive", defaultValue: "invalid@" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: "Please enter a valid email address." })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Accordion", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
          /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { children: "What is the minimum order quantity?" }),
            /* @__PURE__ */ jsx(AccordionContent, { children: "Our minimum order quantity varies by product. For most dried fruits, the MOQ is 500kg per variety. For private label orders, the MOQ is 1,000kg. Contact us for specific product requirements." })
          ] }),
          /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { children: "Do you offer free samples?" }),
            /* @__PURE__ */ jsx(AccordionContent, { children: "Yes, we provide free product samples for qualified B2B buyers. Sample packs include up to 5 different dried fruit varieties. Shipping costs may apply depending on your location." })
          ] }),
          /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { children: "What certifications do your products have?" }),
            /* @__PURE__ */ jsx(AccordionContent, { children: "Our products are certified USDA Organic, EU Organic, HACCP, and Halal. We maintain strict quality control throughout our manufacturing process in Central Java, Indonesia." })
          ] })
        ] }) }) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Tabs", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "overview", children: [
          /* @__PURE__ */ jsxs(TabsList, { children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", children: "Overview" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "specs", children: "Specifications" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "shipping", children: "Shipping" })
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Our premium dried mango slices are sourced from the finest Indonesian farms. Each batch is carefully selected and processed to preserve natural sweetness and nutrients." }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "specs", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Moisture" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-foreground", children: "14-16%" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Sugar" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-foreground", children: "No added sugar" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Shelf Life" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-foreground", children: "12 months" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Storage" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-foreground", children: "Cool, dry place" })
          ] }) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "shipping", className: "mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "We ship worldwide via sea freight (20ft / 40ft containers) or air freight for smaller orders. FOB Semarang, Indonesia. Lead time: 2-4 weeks from order confirmation." }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsx(SubSection, { title: "Badges", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 p-6 rounded-lg bg-card border border-border", children: [
          /* @__PURE__ */ jsx(Badge, { children: "Default" }),
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Secondary" }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Outline" }),
          /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Destructive" }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-tropical-green text-on-primary", children: "Organic" }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-gold text-earth-brown-dark", children: "Premium" }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-whatsapp text-on-primary", children: "WhatsApp" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  DesignSystemPage as default
};
