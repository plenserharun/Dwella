# Dwella v2.0 - Deployment Guide

## What's New in v2.0
- **Exact UI match** to your design (hero, search tabs, category icons, featured properties)
- **Role-based auth** - Sign up asks: Tenant, Landlord, Agent, or Mover
- **Full sign in/sign up** with form validation
- **Your Dwella logo** in navbar and footer
- **2026-latest dependencies** (Next.js 15, React 19, Tailwind v4)

## Step 1: Push to GitHub

```bash
# Extract the zip
cd dwella-v2

# Initialize Git
git init
git add .
git commit -m "Dwella v2.0 - Kenyan real estate platform with role-based auth"

# Create repo on GitHub (github.com/new) named 'dwella'
# Then push:
git remote add origin https://github.com/plenserharun/dwella.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your `dwella` GitHub repo from `plenserharun`
3. Vercel auto-detects Next.js → Click **Deploy**
4. Get URL: `https://dwella.vercel.app`

## Step 3: Environment Variables
In Vercel Dashboard → Project → Settings → Environment Variables:
```
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
```

## Pages Overview
| Route | Description |
|-------|-------------|
| `/` | Home with exact UI match |
| `/buy` | Properties for Sale |
| `/rent` | Properties for Rent |
| `/lease` | Properties for Lease |
| `/commercial` | Commercial & Industrial |
| `/movers` | Moving Services |
| `/agents` | Verified Agents |
| `/auth/signin` | Sign In page |
| `/auth/signup` | Sign Up with role selection |
| `/auth/role` | Role selection (if needed) |
| `/dashboard` | User Dashboard |
| `/landlord` | Landlord Dashboard |

## Auth Flow
1. Click **Sign up** → Choose role (Tenant/Landlord/Agent/Mover)
2. Fill form (name, email, phone, location, password)
3. Auto-redirects to role-specific dashboard
4. Sign in checks role and redirects accordingly
