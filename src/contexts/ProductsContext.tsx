import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { mapRowToProduct } from "@/lib/productMapper";
import type { Product } from "@/data/products";

interface ProductsContextValue {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  loading: true,
  error: null,
  refetch: async () => {},
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from("products")
      .select("*")
      .order("name");

    if (err) {
      console.error("Failed to fetch products:", err);
      setError(err.message);
      setProducts([]);
    } else {
      setProducts((data ?? []).map(mapRowToProduct));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider value={{ products, loading, error, refetch: fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
