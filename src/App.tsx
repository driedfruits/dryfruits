import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { redirectRules } from "@/lib/redirects";

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

// Loading fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<><SearchRedirect /><HomePage /></>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/dried-fruits" element={<Navigate to="/products" replace />} />
          <Route path="/products/:category/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/private-label" element={<PrivateLabelPage />} />
          <Route path="/samples" element={<SamplesPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/storage-guide" element={<StorageGuidePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 301 Redirects for SEO */}
          {redirectRules.map((rule) => (
            <Route
              key={rule.from}
              path={rule.from}
              element={<Navigate to={rule.to} replace />}
            />
          ))}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
