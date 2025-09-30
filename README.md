# HeavyHaulTexas.com - Homepage Revision

Modern, performance-optimized homepage for Naegeli Transportation built with Next.js 15, React 19, and Tailwind CSS v4.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
homepage-revision/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage (assembles all sections)
│   └── globals.css         # Global styles & Tailwind theme
├── components/
│   ├── header/
│   │   ├── Header.tsx      # Sticky header with CTAs
│   │   └── Footer.tsx      # Footer with contact info
│   └── sections/
│       ├── Hero.tsx        # Hero section with value prop
│       ├── ServiceCards.tsx # Two primary service cards
│       ├── ProofBar.tsx    # Trust indicators (stats bar)
│       ├── WhatWeMove.tsx  # Equipment categories grid
│       ├── ServiceArea.tsx # Coverage map & regions
│       ├── Testimonials.tsx # Client testimonials carousel
│       ├── WhyChoose.tsx   # Differentiators (4 features)
│       ├── QuoteForm.tsx   # Lead capture form with validation
│       └── RecruitmentBanner.tsx # Hiring CTA
├── lib/
│   └── structured-data.ts  # Schema.org JSON-LD
├── documents/              # Planning documents
│   ├── homepage-plan.md
│   ├── style-guide.md
│   └── ...
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

See [documents/style-guide.md](documents/style-guide.md) for complete design tokens.

### Typography
- **Display:** Space Grotesk (headlines, stats)
- **Body:** Inter (UI, content)

### Colors
- **Primary Orange:** #ff6b00
- **Charcoal:** #1a1a1a
- **Neutrals:** Tailwind slate scale

### Key Components
- Buttons: `.btn-primary`, `.btn-secondary`
- Cards: `.card` with hover effects
- Sections: `.section` spacing utility

## 🧩 Features

### Performance
- **Tailwind CSS v4** (PostCSS-based, zero runtime)
- **Next.js 15** App Router (React Server Components)
- **Image Optimization** (AVIF/WebP with lazy loading)
- **Font Optimization** (next/font with swap display)
- **Performance Budget:** <1.5MB page weight, <2.5s LCP

### Accessibility
- **WCAG 2.1 AA** compliant
- Semantic HTML throughout
- Keyboard navigation support
- Focus indicators (orange ring)
- Form validation with error messages
- Color contrast ≥4.5:1

### SEO
- Structured data (LocalBusiness + Service schemas)
- Semantic meta tags
- Open Graph support
- Sitemap-ready structure

### Forms
- **React Hook Form** + **Zod** validation
- Inline error messages
- Success states
- Accessible labels

## 📝 Content Sections

1. **Hero** - Value proposition with 69+ years badge
2. **Service Cards** - Heavy Haul & Crane/Rigging (side-by-side)
3. **Proof Bar** - 5 key stats (69+ years, 70+ vehicles, certifications)
4. **What We Move** - 4 equipment categories
5. **Service Area** - TX/LA/AR/OK coverage with map placeholder
6. **Testimonials** - Client quotes carousel
7. **Why Choose** - 4 differentiators
8. **Quote Form** - Lead capture with validation
9. **Recruitment Banner** - Hiring CTA
10. **Footer** - Contact info, links, service area

## 🛠️ Technology Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15** | React framework (App Router) |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first CSS |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |
| **Lucide React** | Icon library |

## 🔧 Configuration Files

### Tailwind v4 (PostCSS)
Configured via `@theme` directive in `app/globals.css`

### Next.js
- Image formats: AVIF, WebP
- Optimized package imports: lucide-react

### TypeScript
- Strict mode enabled
- Path aliases: `@/*` → root

## 📱 Responsive Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (XL desktop)
```

Max content width: **1200px** (`.container`)

## 🎯 Key Interactions

### Smooth Scroll to Quote
All "Request a Quote" buttons scroll smoothly to `#quote` anchor

### Form Validation
- Client-side validation (Zod schema)
- Server-ready (placeholder API endpoint)
- Success state with auto-reset

### Testimonial Carousel
- Manual navigation (prev/next arrows)
- Dot indicators
- Keyboard accessible

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build static export:
```bash
npm run build
# Upload /out directory
```

## 📊 Performance Targets

- **LCP:** <2.5s (hero image optimized)
- **FID:** <100ms (minimal JS)
- **CLS:** <0.05 (font preloading)
- **Page Weight:** <1.5MB

## 🧪 Testing Checklist

- [ ] Desktop responsiveness (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)
- [ ] Form validation (all fields)
- [ ] Smooth scroll to quote
- [ ] Header sticky behavior
- [ ] Testimonial carousel
- [ ] Accessibility (keyboard nav, screen reader)
- [ ] Performance (Lighthouse 90+)

## 📞 Support

For questions about this codebase:
- See planning docs in `/documents`
- Review style guide: `documents/style-guide.md`
- Check homepage plan: `documents/homepage-plan.md`

## 📄 License

Proprietary - Naegeli Transportation, Inc.

---

**Version:** 1.0.0
**Last Updated:** 2025-09-30
**Built By:** Claude Code
