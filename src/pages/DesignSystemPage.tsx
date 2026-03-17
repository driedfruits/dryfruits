import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Home, Search, Settings, User, Mail, Phone, MapPin, Clock,
  Package, Leaf, Award, Shield, Truck, Globe, FileText, Download,
  ChevronRight, ArrowRight, ExternalLink, Check, X, AlertTriangle,
  Star, Heart, Share2, Eye, Edit, Trash2, Plus, Minus,
  Sun, Moon, Menu, Filter, SortAsc, BarChart3, PieChart, TrendingUp,
  MessageCircle, Send, Camera, Image, Upload, Clipboard, Copy,
  Lock, Unlock, Key, Bell, BellOff, Bookmark, BookmarkCheck,
  Calendar, CreditCard, ShoppingCart, Tag, Percent, Zap
} from "lucide-react";
import { useEffect, useState } from "react";

// HSL string to hex converter
function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function parseHSL(raw: string): { h: number; s: number; l: number; hex: string; hsl: string } | null {
  if (!raw) return null;
  const parts = raw.trim().split(/\s+/).map((v) => parseFloat(v));
  if (parts.length < 3 || parts.some(isNaN)) return null;
  const [h, s, l] = parts;
  return { h, s, l, hex: hslToHex(h, s, l), hsl: `hsl(${h}, ${s}%, ${l}%)` };
}

function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

interface ColorSwatchProps {
  name: string;
  varName: string;
}

function ColorSwatch({ name, varName }: ColorSwatchProps) {
  const [color, setColor] = useState<ReturnType<typeof parseHSL>>(null);

  useEffect(() => {
    setColor(parseHSL(getCSSVar(varName)));
  }, [varName]);

  if (!color) return null;

  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-20 rounded-lg border border-border shadow-sm"
        style={{ backgroundColor: color.hsl }}
      />
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{varName}</p>
        <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
        <p className="text-xs text-muted-foreground font-mono">{`${color.h} ${color.s}% ${color.l}%`}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 pb-3 border-b border-border">
      <h2 className="text-2xl font-bold text-foreground">{children}</h2>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </div>
  );
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
      { name: "Foreground", varName: "--foreground" },
    ],
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
      { name: "Ring", varName: "--ring" },
    ],
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
      { name: "WhatsApp Hover", varName: "--whatsapp-hover" },
    ],
  },
  {
    title: "Contrast Tokens (for text on colored backgrounds)",
    colors: [
      { name: "On Primary", varName: "--on-primary" },
      { name: "On Primary Muted", varName: "--on-primary-muted" },
      { name: "On Accent", varName: "--on-accent" },
      { name: "On Dark", varName: "--on-dark" },
      { name: "On Dark Muted", varName: "--on-dark-muted" },
      { name: "On Dark Subtle", varName: "--on-dark-subtle" },
    ],
  },
];

const HEADING_SAMPLES = [
  { tag: "h1", className: "text-4xl md:text-5xl", label: "Heading 1 — 36px / 48px" },
  { tag: "h2", className: "text-3xl md:text-4xl", label: "Heading 2 — 30px / 36px" },
  { tag: "h3", className: "text-2xl md:text-3xl", label: "Heading 3 — 24px / 30px" },
  { tag: "h4", className: "text-xl md:text-2xl", label: "Heading 4 — 20px / 24px" },
  { tag: "h5", className: "text-lg md:text-xl", label: "Heading 5 — 18px / 20px" },
  { tag: "h6", className: "text-base md:text-lg", label: "Heading 6 — 16px / 18px" },
];

const BODY_SIZES = [
  { name: "XS", className: "text-xs", px: "12px" },
  { name: "SM", className: "text-sm", px: "14px" },
  { name: "Base", className: "text-base", px: "16px" },
  { name: "LG", className: "text-lg", px: "18px" },
  { name: "XL", className: "text-xl", px: "20px" },
  { name: "2XL", className: "text-2xl", px: "24px" },
];

const SPACING_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64];

const BUTTON_VARIANTS = [
  "default", "outline", "outline-light", "secondary", "ghost", "link", "whatsapp", "accent", "gold", "destructive"
] as const;

const BUTTON_SIZES = ["sm", "default", "lg", "xl", "icon"] as const;

export default function DesignSystemPage() {
  return (
    <Layout>
      <SEO
        title="Design System — PT Dried Fruits Total Indonesia"
        description="Internal design system and style guide reference."
        noIndex
      />

      <div className="container py-12 max-w-6xl space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Design System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visual reference for designers and developers. All values are pulled live from CSS custom properties and stay in sync with the site theme.
          </p>
        </div>

        {/* ── 1. COLOR PALETTE ── */}
        <section>
          <SectionTitle>1. Color Palette</SectionTitle>
          {COLOR_GROUPS.map((group) => (
            <SubSection key={group.title} title={group.title}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.colors.map((c) => (
                  <ColorSwatch key={c.varName} name={c.name} varName={c.varName} />
                ))}
              </div>
            </SubSection>
          ))}
        </section>

        {/* ── 2. TYPOGRAPHY ── */}
        <section>
          <SectionTitle>2. Typography</SectionTitle>

          <SubSection title="Font Families">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1 font-mono">font-heading / font-body</p>
                <p className="font-heading text-xl">-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1 font-mono">font-mono</p>
                <p className="font-mono text-xl">SFMono-Regular, Menlo, Monaco, Consolas, monospace</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Heading Scale">
            <div className="space-y-4">
              {HEADING_SAMPLES.map((h) => (
                <div key={h.tag} className="p-4 rounded-lg bg-card border border-border flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground font-mono">{`<${h.tag}>`} — {h.label}</span>
                  <div className={h.className + " font-heading font-bold tracking-tight text-foreground"}>
                    The quick brown fox jumps
                  </div>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Body Text Sizes">
            <div className="space-y-3">
              {BODY_SIZES.map((s) => (
                <div key={s.name} className="flex items-baseline gap-4 p-3 rounded-lg bg-card border border-border">
                  <span className="text-xs text-muted-foreground font-mono w-20 shrink-0">{s.className} ({s.px})</span>
                  <span className={`${s.className} text-foreground`}>
                    Pack dried mango into 10kg cartons for export.
                  </span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Font Weight">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Normal", className: "font-normal" },
                { name: "Medium", className: "font-medium" },
                { name: "Semibold", className: "font-semibold" },
                { name: "Bold", className: "font-bold" },
              ].map((w) => (
                <div key={w.name} className="p-4 rounded-lg bg-card border border-border text-center">
                  <p className="text-xs text-muted-foreground font-mono mb-2">{w.className}</p>
                  <p className={`text-lg text-foreground ${w.className}`}>{w.name}</p>
                </div>
              ))}
            </div>
          </SubSection>
        </section>

        {/* ── 3. SPACING & LAYOUT ── */}
        <section>
          <SectionTitle>3. Spacing & Layout</SectionTitle>

          <SubSection title="Base Unit: 4px (--spacing: 0.25rem)">
            <div className="space-y-2">
              {SPACING_SCALE.map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-mono w-16 shrink-0 text-right">p-{n}</span>
                  <span className="text-xs text-muted-foreground w-12 shrink-0">{n * 4}px</span>
                  <div
                    className="h-4 rounded-sm bg-primary/30"
                    style={{ width: `${n * 4}px` }}
                  />
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Container Widths">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 text-muted-foreground font-medium">Breakpoint</th>
                    <th className="py-2 pr-4 text-muted-foreground font-medium">Max Width</th>
                    <th className="py-2 text-muted-foreground font-medium">Padding</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Default</td><td className="py-2 pr-4">100%</td><td className="py-2">1rem (16px)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">sm (640px)</td><td className="py-2 pr-4">100%</td><td className="py-2">1.5rem (24px)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">lg (1024px)</td><td className="py-2 pr-4">100%</td><td className="py-2">2rem (32px)</td></tr>
                  <tr><td className="py-2 pr-4">2xl (1536px)</td><td className="py-2 pr-4">1400px</td><td className="py-2">2rem (32px)</td></tr>
                </tbody>
              </table>
            </div>
          </SubSection>
        </section>

        {/* ── 4. BORDER RADIUS ── */}
        <section>
          <SectionTitle>4. Border Radius</SectionTitle>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "SM", className: "rounded-sm", value: "calc(0.75rem - 4px) = 8px" },
              { name: "MD", className: "rounded-md", value: "calc(0.75rem - 2px) = 10px" },
              { name: "LG", className: "rounded-lg", value: "0.75rem = 12px" },
            ].map((r) => (
              <div key={r.name} className="text-center space-y-2">
                <div className={`w-24 h-24 mx-auto bg-primary/20 border-2 border-primary ${r.className}`} />
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{r.className}</p>
                <p className="text-xs text-muted-foreground">{r.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SHADOWS ── */}
        <section>
          <SectionTitle>5. Shadows</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Shadow Soft", className: "shadow-soft" },
              { name: "Shadow Glow", className: "shadow-glow" },
              { name: "Shadow SM", className: "shadow-sm" },
              { name: "Shadow MD", className: "shadow-md" },
              { name: "Shadow LG", className: "shadow-lg" },
              { name: "Shadow XL", className: "shadow-xl" },
            ].map((s) => (
              <div key={s.name} className="text-center space-y-3">
                <div className={`w-full h-24 rounded-lg bg-card ${s.className}`} />
                <p className="text-sm font-semibold text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground font-mono">.{s.className}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. BUTTONS ── */}
        <section>
          <SectionTitle>6. Button Variants</SectionTitle>

          <SubSection title="All Variants (default size)">
            <div className="flex flex-wrap gap-3 p-6 rounded-lg bg-card border border-border">
              {BUTTON_VARIANTS.map((v) => (
                <Button key={v} variant={v as any}>
                  {v}
                </Button>
              ))}
            </div>
            {/* outline-light needs dark bg */}
            <div className="mt-4 p-6 rounded-lg bg-primary">
              <p className="text-xs text-on-primary mb-3 font-mono">On primary background:</p>
              <Button variant="outline-light">outline-light</Button>
            </div>
          </SubSection>

          <SubSection title="All Sizes (default variant)">
            <div className="flex flex-wrap items-end gap-3 p-6 rounded-lg bg-card border border-border">
              {BUTTON_SIZES.map((s) => (
                <div key={s} className="text-center space-y-2">
                  <Button size={s as any}>
                    {s === "icon" ? "★" : s}
                  </Button>
                  <p className="text-xs text-muted-foreground font-mono">size="{s}"</p>
                </div>
              ))}
            </div>
          </SubSection>
        </section>

        {/* ── 7. CONTRAST & ACCESSIBILITY ── */}
        <section>
          <SectionTitle>7. Contrast & Accessibility</SectionTitle>

          <SubSection title="WCAG AA Requirements">
            <div className="space-y-2 text-sm text-foreground p-4 rounded-lg bg-card border border-border">
              <p>• <strong>Normal text</strong> (&lt;18px): <strong>4.5:1</strong> minimum contrast ratio</p>
              <p>• <strong>Large text</strong> (≥18px bold / ≥24px): <strong>3:1</strong> minimum</p>
              <p>• <strong>UI components</strong> (borders, icons): <strong>3:1</strong> minimum</p>
              <p>• <strong>Touch targets</strong>: minimum <strong>48×48px</strong> on mobile</p>
            </div>
          </SubSection>

          <SubSection title="Contrast Utility Classes">
            <div className="space-y-3">
              {/* On Primary */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(20, 90%, 48%)" }}>
                <p className="text-xs font-mono mb-2 text-on-primary-muted">On --primary background:</p>
                <p className="text-on-primary text-lg font-semibold">.text-on-primary — Main heading text</p>
                <p className="text-on-primary-muted">.text-on-primary-muted — Supporting text</p>
              </div>

              {/* On Dark */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(30, 35%, 12%)" }}>
                <p className="text-xs font-mono mb-2 text-on-dark-subtle">On dark background (footer etc):</p>
                <p className="text-on-dark text-lg font-semibold">.text-on-dark — Main heading text</p>
                <p className="text-on-dark-muted">.text-on-dark-muted — Supporting text</p>
                <p className="text-on-dark-subtle">.text-on-dark-subtle — Tertiary text</p>
              </div>

              {/* On Tropical Green */}
              <div className="p-6 rounded-lg bg-tropical-green">
                <p className="text-xs font-mono mb-2 text-on-primary-muted">On --tropical-green background:</p>
                <p className="text-on-primary text-lg font-semibold">.text-on-primary — Heading</p>
                <p className="text-on-primary-muted">.text-on-primary-muted — Body</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Focus States">
            <div className="p-6 rounded-lg bg-card border border-border space-y-3">
              <p className="text-sm text-muted-foreground mb-3">All interactive elements use <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">focus-visible:ring-2 ring-ring ring-offset-2</code></p>
              <div className="flex gap-4">
                <Button>Tab to me</Button>
                <a href="#" className="text-primary underline">Focus this link</a>
              </div>
            </div>
          </SubSection>
        </section>

        {/* ── 8. GRADIENTS ── */}
        <section>
          <SectionTitle>8. Gradients</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "gradient-primary", className: "gradient-primary" },
              { name: "gradient-hero", className: "gradient-hero" },
              { name: "gradient-gold", className: "gradient-gold" },
            ].map((g) => (
              <div key={g.name} className="space-y-2">
                <div className={`h-24 rounded-lg ${g.className}`} />
                <p className="text-sm font-semibold text-foreground">{g.name}</p>
                <p className="text-xs text-muted-foreground font-mono">.{g.className}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. ANIMATIONS ── */}
        <section>
          <SectionTitle>9. Animations</SectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-muted-foreground font-medium">Class</th>
                  <th className="py-2 pr-4 text-muted-foreground font-medium">Duration</th>
                  <th className="py-2 text-muted-foreground font-medium">Use Case</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-fade-in</td><td className="py-2 pr-4">0.5s</td><td className="py-2">General fade entrance</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-slide-up</td><td className="py-2 pr-4">0.5s</td><td className="py-2">Cards, sections entering viewport</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-scale-in</td><td className="py-2 pr-4">0.3s</td><td className="py-2">Modals, popovers</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-content-reveal</td><td className="py-2 pr-4">0.4s</td><td className="py-2">Content sections</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-blur-up</td><td className="py-2 pr-4">0.5s</td><td className="py-2">Image loading transitions</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 pr-4 font-mono text-xs">.animate-float</td><td className="py-2 pr-4">3s ∞</td><td className="py-2">Floating elements (WhatsApp)</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">.animate-pulse-glow</td><td className="py-2 pr-4">4s ∞</td><td className="py-2">Glowing attention elements</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Stagger delays: <code className="font-mono bg-muted px-1 rounded">.animation-delay-75</code> through <code className="font-mono bg-muted px-1 rounded">.animation-delay-300</code>
          </p>
        </section>
      </div>
    </Layout>
  );
}
