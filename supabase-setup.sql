-- Run this in your Supabase project:
-- Dashboard → SQL Editor → New query → paste & run

-- Messages table (stores contact form submissions)
create table if not exists public.messages (
  id         uuid        default gen_random_uuid() primary key,
  email      text        not null,
  message    text,
  created_at timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.messages enable row level security;

-- Anyone can insert (contact form submissions from the website)
create policy "Allow public inserts"
  on public.messages
  for insert
  to anon
  with check (true);

-- Only authenticated users (you) can read submissions
create policy "Allow authenticated reads"
  on public.messages
  for select
  to authenticated
  using (true);
