-- Create public storage bucket for product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true);

-- Allow anyone to read files (public bucket)
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

-- Allow anyone to upload files (matches permissive DB approach)
CREATE POLICY "Allow upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'product-images');

-- Allow anyone to update files
CREATE POLICY "Allow update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'product-images');

-- Allow anyone to delete files
CREATE POLICY "Allow delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'product-images');