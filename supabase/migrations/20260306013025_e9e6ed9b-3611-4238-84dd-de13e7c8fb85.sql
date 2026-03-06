
-- Drop all existing restrictive policies
DROP POLICY IF EXISTS "Anon can delete products" ON public.products;
DROP POLICY IF EXISTS "Anon can insert products" ON public.products;
DROP POLICY IF EXISTS "Anon can update products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can delete products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON public.products;
DROP POLICY IF EXISTS "Products are publicly readable" ON public.products;

-- Recreate as permissive policies
CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "Allow insert products"
  ON public.products FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow update products"
  ON public.products FOR UPDATE
  USING (true);

CREATE POLICY "Allow delete products"
  ON public.products FOR DELETE
  USING (true);
