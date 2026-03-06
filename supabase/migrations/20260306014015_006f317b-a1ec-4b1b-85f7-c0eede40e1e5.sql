
-- Drop all existing restrictive policies
DROP POLICY IF EXISTS "Products are publicly readable" ON public.products;
DROP POLICY IF EXISTS "Allow insert products" ON public.products;
DROP POLICY IF EXISTS "Allow update products" ON public.products;
DROP POLICY IF EXISTS "Allow delete products" ON public.products;

-- Recreate as PERMISSIVE (default) policies
CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Allow insert products"
  ON public.products FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow update products"
  ON public.products FOR UPDATE TO anon, authenticated
  USING (true);

CREATE POLICY "Allow delete products"
  ON public.products FOR DELETE TO anon, authenticated
  USING (true);
