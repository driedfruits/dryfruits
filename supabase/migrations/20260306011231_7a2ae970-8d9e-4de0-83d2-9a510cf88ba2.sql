
-- Create products table for B2B dried fruit catalog
CREATE TABLE public.products (
  id TEXT NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'dried-fruits',
  is_organic BOOLEAN NOT NULL DEFAULT false,
  sku TEXT,
  hs_code TEXT,
  tagline TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  flavor_profile TEXT,
  texture TEXT,
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[],
  images JSONB,
  specifications JSONB NOT NULL DEFAULT '{}'::jsonb,
  availability JSONB,
  harvest_months INT[],
  applications TEXT[] NOT NULL DEFAULT '{}',
  packaging JSONB NOT NULL DEFAULT '{"bulk":"","retail":"","custom":false}'::jsonb,
  pricing JSONB NOT NULL DEFAULT '{"fobBase":"","moq":"","leadTime":""}'::jsonb,
  logistics JSONB,
  export_documents TEXT[],
  compliance JSONB,
  certifications TEXT[] NOT NULL DEFAULT '{}',
  faqs JSONB,
  related_products TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access (products are public catalog content)
CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT
  USING (true);

-- For now, allow all authenticated users to manage products (can restrict to admin later)
CREATE POLICY "Authenticated users can insert products"
  ON public.products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON public.products FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete products"
  ON public.products FOR DELETE
  TO authenticated
  USING (true);

-- Also allow anon to manage products for now (no auth yet on admin page)
CREATE POLICY "Anon can insert products"
  ON public.products FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon can update products"
  ON public.products FOR UPDATE
  TO anon
  USING (true);

CREATE POLICY "Anon can delete products"
  ON public.products FOR DELETE
  TO anon
  USING (true);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
