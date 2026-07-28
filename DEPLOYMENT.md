# Deployment Steps — Poetry Website

## Status: All Steps Complete — LIVE at [warriorpoetsavant.com](https://warriorpoetsavant.com)

---

### Step 1: Supabase Setup
- [x] Create a new project at [supabase.com](https://supabase.com)
- [x] Go to **SQL Editor** and run the contents of `supabase-setup.sql`
- [x] Go to **Settings > API** and copy your **Project URL** and **anon public key**
- [x] Replace placeholders in `index.html` with real credentials

### Step 2: GitHub Repo
- [x] Create a new repo on GitHub — [jewashington3/poetry-site](https://github.com/jewashington3/poetry-site)
- [x] Initialize git in this folder
- [x] Add remote origin and push

### Step 3: Vercel Deployment
- [x] Sign in to [vercel.com](https://vercel.com) with GitHub
- [x] Click **"Add New Project"** and import the GitHub repo
- [x] Set framework preset to **Other** (static site)
- [x] Click **Deploy**

### Step 4: Custom Domain
- [x] In Vercel, go to **Settings > Domains**
- [x] Add your custom domain — `warriorpoetsavant.com`
- [x] Update DNS records as Vercel instructs

---

### Notes
- Supabase anon key is safe to use client-side (Row Level Security protects the data)
- Handwritten poem originals live in `images/` as ~500KB JPEGs (converted from the source PDFs)
