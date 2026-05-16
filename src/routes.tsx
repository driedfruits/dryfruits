import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import type { RouteRecord } from "vite-react-ssg";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ProductsProvider } from "@/contexts/ProductsContext";
import ScrollToTop from "@/components/ScrollToTop";
import { LayoutSkeleton } from "@/components/layout/LayoutSkeleton";
import { HomePageSkeleton } from "@/components/home/HomePageSkeleton";
import { ContentPageSkeleton } from "@/components/layout/ContentPageSkeleton";
import { redirectRules } from "@/lib/redirects";
import { supabase } from "@/integrations/supabase/client";

// ---- Lazy pages ----
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const PrivateLabelPage = lazy(() => import("./pages/PrivateLabelPage"));
const SamplesPage = lazy(() => import("./pages/SamplesPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const StorageGuidePage = lazy(() => import("./pages/StorageGuidePage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductEditorPage = lazy(() => import("./pages/ProductEditorPage"));
const DesignSystemPage = lazy(() => import("./pages/DesignSystemPage"));

// Handles legacy WordPress /?s= search redirects on the home page
function SearchRedirect() {
  const [searchParams] = useSearchParams();
  if (searchParams.has("s")) {
    return <Navigate to="/" replace />;
  }
  return null;
}

// Root layout — wraps every route with providers. Rendered both during SSG
// (Node) and CSR (browser) so providers stay identical in both passes.
function RootLayout() {
  return (
    <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ProductsProvider>
            <ScrollToTop />
            <Outlet />
          </ProductsProvider>
        </TooltipProvider>
    </ErrorBoundary>
  );
}

const wrap = (Skeleton: React.ComponentType, Page: React.ComponentType) => (
  <Suspense fallback={<Skeleton />}>
    <Page />
  </Suspense>
);

// Fetch every published product slug at build time so vite-react-ssg can
// pre-render one HTML file per product page. Falls back to an empty list
// (warning, not failure) if the build host can't reach the database.
async function getProductStaticPaths(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("id, category");
    if (error) throw error;
    return (data ?? []).map(
      (row) => `/products/${row.category ?? "dried-fruits"}/${row.id}`,
    );
  } catch (err) {
    console.warn("[ssg] failed to fetch product paths, falling back to empty list:", err);
    return [];
  }
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Home
      {
        index: true,
        element: (
          <Suspense fallback={<HomePageSkeleton />}>
            <SearchRedirect />
            <HomePage />
          </Suspense>
        ),
      },

      // Products
      { path: "products", element: wrap(LayoutSkeleton, ProductsPage) },
      {
        path: "products/dried-fruits",
        element: <Navigate to="/products" replace />,
      },
      {
        path: "products/:category/:productId",
        element: wrap(LayoutSkeleton, ProductDetailPage),
        getStaticPaths: getProductStaticPaths,
      },

      // Content
      { path: "about", element: wrap(ContentPageSkeleton, AboutPage) },
      { path: "contact", element: wrap(ContentPageSkeleton, ContactPage) },
      { path: "faq", element: wrap(ContentPageSkeleton, FAQPage) },
      { path: "certifications", element: wrap(ContentPageSkeleton, CertificationsPage) },
      { path: "sustainability", element: wrap(ContentPageSkeleton, SustainabilityPage) },
      { path: "shipping", element: wrap(ContentPageSkeleton, ShippingPage) },
      { path: "private-label", element: wrap(ContentPageSkeleton, PrivateLabelPage) },
      { path: "samples", element: wrap(ContentPageSkeleton, SamplesPage) },
      { path: "catalog", element: wrap(ContentPageSkeleton, CatalogPage) },
      { path: "storage-guide", element: wrap(ContentPageSkeleton, StorageGuidePage) },
      { path: "privacy", element: wrap(ContentPageSkeleton, PrivacyPage) },
      { path: "terms", element: wrap(ContentPageSkeleton, TermsPage) },

      // 301 Redirects
      ...redirectRules.map((rule) => ({
        path: rule.from.replace(/^\//, ""),
        element: <Navigate to={rule.to} replace />,
      })),

      // Internal (excluded from SSG via SSG_EXCLUDED_PATHS below)
      { path: "admin/products", element: wrap(LayoutSkeleton, ProductEditorPage) },
      { path: "design-system", element: wrap(LayoutSkeleton, DesignSystemPage) },

      // 404
      { path: "*", element: wrap(LayoutSkeleton, NotFound) },
    ],
  },
];

/** Paths excluded from static generation (kept client-side only). */
export const SSG_EXCLUDED_PATHS = new Set<string>([
  "/admin/products",
  "/design-system",
  "/*",
]);