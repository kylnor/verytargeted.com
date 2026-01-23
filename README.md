# VeryTargeted Landing Page

A high-converting landing page for VeryTargeted - precision real estate marketing that targets specific homes showing early seller signals.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Clean, modern typography

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Pricing Model

**Tiered per-home pricing:**
- **Basic:** $1/home/month - 2 impressions/day (60/month)
- **Standard:** $2/home/month - 4 impressions/day (120/month)
- **Plus:** $4/home/month - 8 impressions/day (240/month)
- **Premium:** $6/home/month - 16 impressions/day (480/month)

**Setup:** $150 one-time fee
**Minimum:** 100 homes

**Why 16 impressions/day max?** Average household has 2.5 people × 2.5 devices = ~16 touchpoints. Industry best practice: 4 impressions per device per day avoids ad fatigue.

**Example:** 200 homes × $2 (Standard) = $400/month for 24,000 impressions

## Brand Colors

- **Stealth Carbon**: `#484B50` - Primary dark gray
- **Precision Teal**: `#29899C` - Brand teal
- **Accent Orange**: `#FF4D2A` - CTA and highlights
- **White**: `#FFFFFF` - Clean backgrounds

## Page Structure

1. **Hero Section** - Bold headline with clear CTA
2. **Problem Section** - Address pain points of traditional marketing
3. **Solution Section** - What VeryTargeted does differently
4. **How It Works** - 3-step process
5. **Pricing** - Transparent pricing with calculator
6. **Social Proof** - Testimonials (placeholders)
7. **Final CTA** - Contact form
8. **Footer** - Links and contact info

## TODO Items

### Content Updates Needed

- [ ] Add real logo SVG (currently using placeholder)
- [ ] Replace placeholder testimonials in SocialProof component
- [ ] Add actual stats/metrics in SocialProof component
- [ ] Review and finalize all copy

### Technical Integration

- [ ] Integrate contact form with backend (see FinalCTA.tsx line 18)
  - Options: Email service (SendGrid, Mailgun), Form service (Formspree, Basin), or custom API
- [ ] Add Calendly embed or booking link
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add proper meta tags and OG images for social sharing
- [ ] Consider adding a FAQ section

### Design Polish

- [ ] Add actual hero background pattern/image if desired
- [ ] Review mobile responsiveness on various devices
- [ ] Add loading states and animations
- [ ] Consider adding a video demo section

## Component Overview

- `Navigation.tsx` - Fixed header with mobile menu
- `Hero.tsx` - Main hero section with headline and CTAs
- `Problem.tsx` - Pain points section
- `Solution.tsx` - Value proposition
- `HowItWorks.tsx` - 3-step process
- `Pricing.tsx` - Interactive pricing calculator
- `SocialProof.tsx` - Testimonials and stats
- `FinalCTA.tsx` - Contact form
- `Footer.tsx` - Site footer

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Notes

- No stock photos per requirements - uses abstract/minimal design
- Mobile-first, fully responsive
- Form currently logs to console - needs backend integration
- All placeholder content is clearly marked with [PLACEHOLDER] tags
