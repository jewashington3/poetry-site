# Deployment Steps — Poetry Website

## Status: Step 1 Complete

---

### Step 1: Supabase Setup
- [x] Create a new project at [supabase.com](https://supabase.com)
- [x] Go to **SQL Editor** and run the contents of `supabase-setup.sql`
- [x] Go to **Settings > API** and copy your **Project URL** and **anon public key**
- [x] Replace placeholders in `index.html` with real credentials

### Step 2: GitHub Repo
- [ ] Create a new repo on GitHub (e.g. `poetry-site`)
- [ ] Initialize git in this folder
- [ ] Set up Git LFS for the large PDFs (~17-19MB each)
- [ ] Add remote origin and push

### Step 3: Vercel Deployment
- [ ] Sign in to [vercel.com](https://vercel.com) with GitHub
- [ ] Click **"Add New Project"** and import the GitHub repo
- [ ] Set framework preset to **Other** (static site)
- [ ] Click **Deploy**

### Step 4 (Optional): Custom Domain
- [ ] In Vercel, go to **Settings > Domains**
- [ ] Add your custom domain
- [ ] Update DNS records as Vercel instructs

---

### Notes
- Supabase anon key is safe to use client-side (Row Level Security protects the data)
- PDFs total ~55MB — Git LFS recommended to keep the repo lightweight
- `vercel.json` is already configured for single-page routing
