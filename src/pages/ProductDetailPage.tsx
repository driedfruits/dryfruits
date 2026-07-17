import { Suspense, lazy } from "react";
import { useParams, Navigate, useLoaderData } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ProductPageSkeleton } from "@/components/products";
import { useProducts } from "@/contexts/ProductsContext";
import { getProductById, type Product } from "@/data/products";
import { getProductRedirect } from "@/lib/redirects";

// Lazy load the heavy template component
const ProductPageTemplate = lazy(() =>
  import("@/components/products/ProductPageTemplate").then((module) => ({
    default: module.ProductPageTemplate,
  }))
);

export default function ProductDetailPage() {
  const { category, productId } = useParams();
  const { products } = useProducts();
  // Loader data is populated at build-time SSG and on direct navigation, so
  // the pre-rendered HTML contains real per-product SEO/OG/JSON-LD tags and
  // content instead of a loading spinner. Falls back to context lookup for
  // in-app client-side navigation.
  const loaderProduct = (useLoaderData() as Product | null) ?? null;

  // Check if productId is an alias that needs redirecting
  const redirectProductId = productId ? getProductRedirect(productId) : null;
  if (redirectProductId) {
    return <Navigate to={`/products/${category}/${redirectProductId}`} replace />;
  }

  const product =
    getProductById(products, productId || "") ?? loaderProduct ?? undefined;

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
