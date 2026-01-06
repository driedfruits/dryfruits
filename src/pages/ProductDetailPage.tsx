import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ProductPageTemplate } from "@/components/products";
import { getProductById } from "@/data/companyData";

export default function ProductDetailPage() {
  const { productId } = useParams();
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

  return <ProductPageTemplate product={product} />;
}
