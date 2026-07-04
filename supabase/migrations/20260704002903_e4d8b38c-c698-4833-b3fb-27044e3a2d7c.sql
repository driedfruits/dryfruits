
-- 1. Roles enum + table
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

-- 2. has_role helper (security definer, prevents recursive RLS)
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- 3. Products: keep public read, restrict writes to admins
drop policy if exists "Allow insert products" on public.products;
drop policy if exists "Allow update products" on public.products;
drop policy if exists "Allow delete products" on public.products;

create policy "Admins can insert products"
  on public.products for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update products"
  on public.products for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete products"
  on public.products for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- 4. Storage: product-images bucket
-- Remove broad listing policy (files remain accessible via public URLs since bucket is public)
drop policy if exists "Public read access" on storage.objects;
drop policy if exists "Allow upload" on storage.objects;
drop policy if exists "Allow update" on storage.objects;
drop policy if exists "Allow delete" on storage.objects;

create policy "Admins can upload product images"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'product-images' and public.has_role(auth.uid(), 'admin')
  );

create policy "Admins can update product images"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'product-images' and public.has_role(auth.uid(), 'admin')
  )
  with check (
    bucket_id = 'product-images' and public.has_role(auth.uid(), 'admin')
  );

create policy "Admins can delete product images"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'product-images' and public.has_role(auth.uid(), 'admin')
  );
