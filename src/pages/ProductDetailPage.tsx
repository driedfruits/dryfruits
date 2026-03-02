import { Suspense, lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ProductPageSkeleton } from "@/components/products";
import { getProductById } from "@/data/companyData";
import { getProductRedirect } from "@/lib/redirects";

// Lazy load the heavy template component
const ProductPageTemplate = lazy(() =>
  import("@/components/products/ProductPageTemplate").then((module) => ({
    default: module.ProductPageTemplate,
  }))
);

export default function ProductDetailPage() {
  const { category, productId } = useParams();
  // Check if productId is an alias that needs redirecting
  const redirectProductId = productId ? getProductRedirect(productId) : null;
  if (redirectProductId) {
    return <Navigate to={`/products/${category}/${redirectProductId}`} replace />;
  }

  const product = getProductById(productId || "");

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<ProductPageSkeleton />}>
        <div className="animate-content-reveal">
          <ProductPageTemplate product={product} />
        </div>
      </Suspense>
    </Layout>
  );
}
