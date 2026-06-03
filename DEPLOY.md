# Dwella - Deployment Guide

## Quick Deploy to Vercel (Free)

### Step 1: Install Dependencies
```bash
cd dwella
npm install
```

### Step 2: Run Locally (Optional)
```bash
npm run dev
# Open http://localhost:3000
```

### Step 3: Deploy to Vercel
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Alternative: GitHub + Vercel Integration
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Environment Variables (Vercel Dashboard)
Set these in Vercel Project Settings → Environment Variables:
```
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
```

## Tech Stack (2026 Latest)
- Next.js 15 (App Router)
- React 19
- TypeScript 5.7
- Tailwind CSS v4 (CSS-first config)
- Framer Motion 11
- Recharts 2.15
- Lucide React 0.460

## Features
- Hero with luxury villa background
- Search with Buy/Rent/Lease/Commercial tabs
- Category icons (Homes, Apartments, Shops, Offices, Warehouses)
- Featured Properties grid
- Browse by Category section
- Full property listings (Buy/Rent/Lease/Commercial)
- Moving Services directory
- Verified Agents directory
- User Dashboard (Saved, Messages, Bookings, Settings)
- Landlord Dashboard (Properties, Tenants, Analytics, Maintenance)
- Glassmorphism design with midnight navy/gold/teal colors
- Kenyan real estate data
- Mobile responsive
