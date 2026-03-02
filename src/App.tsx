import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { redirectRules } from "@/lib/redirects";
import { LayoutSkeleton } from "@/components/layout/LayoutSkeleton";
import { HomePageSkeleton } from "@/components/home/HomePageSkeleton";
import { ContentPageSkeleton } from "@/components/layout/ContentPageSkeleton";

// Handles /?s= WordPress search query redirects
function SearchRedirect() {
  const [searchParams] = useSearchParams();
  if (searchParams.has("s")) {
    return <Navigate to="/" replace />;
  }
  return null;
}

// Lazy load pages for performance
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

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        {/* HomePage with dedicated skeleton */}
        <Route path="/" element={
          <Suspense fallback={<HomePageSkeleton />}>
            <SearchRedirect /><HomePage />
          </Suspense>
        } />

        {/* Product pages with layout skeleton */}
        <Route path="/products" element={
          <Suspense fallback={<LayoutSkeleton />}>
            <ProductsPage />
          </Suspense>
        } />
        <Route path="/products/dried-fruits" element={<Navigate to="/products" replace />} />
        <Route path="/products/:category/:productId" element={
          <Suspense fallback={<LayoutSkeleton />}>
            <ProductDetailPage />
          </Suspense>
        } />

        {/* Content pages with content skeleton */}
        <Route path="/about" element={
          <Suspense fallback={<ContentPageSkeleton />}><AboutPage /></Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<ContentPageSkeleton />}><ContactPage /></Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<ContentPageSkeleton />}><FAQPage /></Suspense>
        } />
        <Route path="/certifications" element={
          <Suspense fallback={<ContentPageSkeleton />}><CertificationsPage /></Suspense>
        } />
        <Route path="/sustainability" element={
          <Suspense fallback={<ContentPageSkeleton />}><SustainabilityPage /></Suspense>
        } />
        <Route path="/shipping" element={
          <Suspense fallback={<ContentPageSkeleton />}><ShippingPage /></Suspense>
        } />
        <Route path="/private-label" element={
          <Suspense fallback={<ContentPageSkeleton />}><PrivateLabelPage /></Suspense>
        } />
        <Route path="/samples" element={
          <Suspense fallback={<ContentPageSkeleton />}><SamplesPage /></Suspense>
        } />
        <Route path="/catalog" element={
          <Suspense fallback={<ContentPageSkeleton />}><CatalogPage /></Suspense>
        } />
        <Route path="/storage-guide" element={
          <Suspense fallback={<ContentPageSkeleton />}><StorageGuidePage /></Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<ContentPageSkeleton />}><PrivacyPage /></Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<ContentPageSkeleton />}><TermsPage /></Suspense>
        } />

        {/* 301 Redirects for SEO */}
        {redirectRules.map((rule) => (
          <Route
            key={rule.from}
            path={rule.from}
            element={<Navigate to={rule.to} replace />}
          />
        ))}

        <Route path="*" element={
          <Suspense fallback={<LayoutSkeleton />}><NotFound /></Suspense>
        } />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
