# HeavyHaulTexas — Next.js Technical Plan (Homepage v1.0)

> Goal: Ship a conversion‑first homepage with excellent Core Web Vitals, fast DX, and composable UI. Stack favors copy‑paste/source components over heavyweight UI kits.

---

## 0) Tech Stack & Principles
- **Framework**: Next.js 14 (App Router), TypeScript, Edge runtime where safe
- **Styling**: Tailwind CSS
- **Base UI**: Radix Primitives (a11y) + shadcn/ui (copy‑in components)
- **Animation**: Motion (Framer Motion successor)
- **Icons**: lucide‑react (tree‑shakable)
- **Forms/Validation**: React Hook Form + Zod
- **Carousel**: Embla (via shadcn Carousel wrapper)
- **Media**: `next/image`, `next/font`
- **SEO**: Next’s Metadata API (+ optional next‑seo)
- **Analytics**: @vercel/analytics (+ Web Vitals hook if needed)
- **Maps (service area)**: react‑map‑gl (MapLibre) or react‑simple‑maps (SVG) — pick per need
- **Sugar/Delight comps**: ReactBits (selective, non‑critical only)
- **Lint/Format**: ESLint, Prettier; import sort; strict TS

**Performance Guardrails**
- Image budget ≤180KB hero, total page ≤1000KB
- Zero client JS in first fold beyond nav/CTA; lazy‑load heavy blocks
- Prefer RSC for static content; isolate client components

---

## 1) App Structure
```
/app
  /(www)
    layout.tsx
    page.tsx                 // Homepage
    sitemap.ts               // Built-in sitemap
    robots.ts                // Built-in robots
  /components                // Reusable UI
  /lib                       // utils (seo, analytics, schemas)
  /styles
  /public
```

---

## 2) Global Layout
**Components**
- `<SiteHeader />` — Sticky; shadcn `<NavigationMenu>` + CTA Button
- `<Footer />` — Simple, semantic links; local phone + hours
- `<Toaster />` (optional) — shadcn for any form notices

**Notes**
- Use `next/font` to self‑host fonts (zero FOUT/CLS)
- `Analytics` component in `layout.tsx`

---

## 3) Homepage Sections → Recommended Components

### 3.1 Hero (Primary CTA)
**Purpose**: Immediate trust + clear action
- **Layout**: Responsive 2‑column; headline, subhead, two CTAs (`Get a Fast Quote`, `Call Dispatch`)
- **Components**:
  - shadcn `<Button>` variants; `<Badge>` for service highlights
  - `next/image` for hero photo (AVIF/WebP); blur placeholder
  - *(Optional micro‑delight)* ReactBits background (e.g., **Grid Motion** or **Fluid Glass**) behind content, reduced opacity; feature‑flagged and lazy‑loaded
- **Motion**: subtle fade/slide on headline & CTAs (Motion)

### 3.2 Immediate Proof Bar (mobile‑first under hero)
- **Content**: “Since 1956”, “70+ vehicles”, certifications, insurance
- **Components**: Radix `<Tooltip>` + lucide icons in chips; shadcn `<Separator>`

### 3.3 Services Split (Heavy Haul vs Crane & Rigging)
- **Cards**: shadcn `<Card>` + Radix `<HoverCard>` for quick spec overlays
- **CTA**: deep‑link to `/services/...` (future pages) and to `#quote` with query params (prefill)
- **Motion**: scale‑on‑hover, viewport reveal

### 3.4 Fleet/Capabilities Snapshot
- **Grid**: shadcn `<Tabs>` for Trailer/Rigging categories; table of key specs
- **Carousel**: shadcn `<Carousel>` (Embla) for fleet photos with captions
- **A11y**: provide alt text with exact unit names

### 3.5 What We Move (Industries/Loads)
- **Chips**: shadcn `<Badge>` or `<Toggle>` group for EPC, Petrochem, Construction, Manufacturing, Ports/Rail, etc.
- **List**: semantic `<ul>` with icons

### 3.6 Permits & Escorts (Assurance)
- **Block**: compact explainer with a link to compliance page
- **Component**: shadcn `<Callout>` (via `<Card>` + icon), Radix `<Accordion>` for FAQs

### 3.7 Service Area Map
**Option A — SVG (low JS, static regions)**
- **Library**: `react-simple-maps`
- **Use**: Highlight TX + adjacent states; draw primary lanes; zero external tiles
**Option B — Interactive (pan/zoom, search)**
- **Library**: `react-map-gl` with MapLibre style; no vendor lock
- **Extras**: Address search (Mapbox Search JS) if you want origin/destination lookup

### 3.8 Testimonials / Logos
- **Carousel**: Embla via shadcn; autoplay paused on hover; per‑slide quote + name
- **Logos**: only if permission exists; else quotes only

### 3.9 Contact/Quote Form (anchor: `#quote`)
- **Library**: React Hook Form + Zod schema, `<Form>` wrappers from shadcn
- **Fields (phase 1)**: Name, Phone, Email, Origin, Destination, Preferred date
- **Expandable**: “Add load details” accordion → dims, weight, equipment, file upload (phase 2)
- **UX**: Client‑side mask/assist; server action endpoint with Zod safe‑parse
- **Events**: submit success → toast + track event; error → inline errors

### 3.10 Trust Strip (Certs/Insurance/Associations)
- **Layout**: low‑contrast logos or text list; link to compliance PDF page

### 3.11 Secondary CTA + Footer
- **Block**: “Need dispatch now? Call [number]” + text CTA

---

## 4) Data & Types
- `src/lib/types.ts`
```ts
export type QuoteRequest = {
  name: string
  email: string
  phone: string
  origin: string
  destination: string
  preferredDate?: string
  details?: {
    lengthFt?: number
    widthFt?: number
    heightFt?: number
    weightLbs?: number
    equipment?: string
  }
}
```
- `zod` schema mirrors the type; server action parses & validates

---

## 5) Forms: RHF + Zod + shadcn
```tsx
// components/forms/QuoteForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@/components/ui'

const QuoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  origin: z.string().min(2),
  destination: z.string().min(2),
  preferredDate: z.string().optional(),
  details: z
    .object({ lengthFt: z.number().optional(), widthFt: z.number().optional() })
    .optional(),
})

export function QuoteForm() {
  const form = useForm<z.infer<typeof QuoteSchema>>({ resolver: zodResolver(QuoteSchema) })
  const onSubmit = async (values: z.infer<typeof QuoteSchema>) => {
    // POST to /actions/quote (server action or API route)
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
      {/* Inputs using shadcn FormField wrappers in real code */}
      <Input {...form.register('name')} placeholder="Full name" />
      <Input {...form.register('email')} placeholder="Email" />
      <Input {...form.register('phone')} placeholder="Phone" />
      <Input {...form.register('origin')} placeholder="Pickup city/state" />
      <Input {...form.register('destination')} placeholder="Dropoff city/state" />
      <Button type="submit">Get a Fast Quote</Button>
    </form>
  )
}
```

---

## 6) Map Block (two implementations)

### A) SVG (react‑simple‑maps)
- Import `ComposableMap`, `Geographies`, `Geography`
- Use a US topojson; style TX + adjacent regions
- Zero external requests; pure SVG; lightweight

### B) Interactive (react‑map‑gl + MapLibre)
- Basic map using a MapLibre style URL (MapTiler etc.)
- Add markers for HQ/yard(s); optional route polyline
- Lazy‑load component below the fold

---

## 7) Media & Carousel
- Use `next/image` everywhere; define remotePatterns if using CDN assets
- shadcn `<Carousel>` (Embla)
  - Progressive image sources per slide
  - Pause on hover; keyboard nav

---

## 8) SEO & Metadata
- Implement `app/(www)/layout.tsx` `metadata` export with defaults (title template, canonical, open graph)
- `sitemap.ts` & `robots.ts` files
- JSON‑LD for Organization + WebSite + BreadcrumbList (if used)
- Semantic headings: one H1, descriptive H2s per section

---

## 9) Analytics & Events
- `@vercel/analytics` `Analytics` component in layout
- Custom events on:
  - CTA click (tel/mailto/quote button)
  - Form submit success/fail
  - Map interactions (optional)
- If using a call‑tracking script, load on user interaction only

---

## 10) Accessibility
- Radix primitives for focus management & ARIA
- Color contrast ≥ 4.5:1; focus rings visible
- Form labels + inline error messages; aria‑live on submit feedback
- Carousel: roving tabindex, buttons labeled; prefers‑reduced‑motion honors

---

## 11) Content Loading Strategy
- Hero, services, proof: server components (static)
- Carousel, form, map: client components; lazy below fold
- Any third‑party (tracking, map tiles) behind `IntersectionObserver`

---

## 12) Dependency List (minimal)
- `class-variance-authority`, `tailwind-merge`, `lucide-react`
- `radix-ui` Primitives (installed per component)
- `shadcn/ui` copied components (no runtime dep)
- `react-hook-form`, `zod`, `@hookform/resolvers`
- `@vercel/analytics`
- `embla-carousel-react` (via shadcn Carousel)
- `react-map-gl` & `maplibre-gl` **or** `react-simple-maps` (pick one)
- *(Optional)* `next-seo`

---

## 13) Routing & Links
- In‑page anchors (`#quote`) via `<Link href="#quote">`
- Tel links `tel:+1...` (mobile‑first); track on click

---

## 14) Build & Deploy
- Vercel project; preview deployments per PR
- CI: typecheck, lint, build; Lighthouse CI on PR (budget JSON)
- Image domains configured; cache headers for static assets

---

## 15) Cutover Checklist
- CLS < 0.05; LCP < 2.5s on 4G; TBT < 150ms
- Forms deliver to CRM/Email; spam protections (honeypot + server validation)
- Phone numbers verified; dynamic number insertion (if used)
- 404/500 pages themed; robots/sitemap live

---

## 16) Phase 2 Ideas (post‑launch)
- Micro case studies (3 cards with KPIs)
- File upload in quote; multi‑step form with progress
- Address autocomplete (Mapbox Search) and rough route preview
- CMS (Sanity/Contentlayer) for testimonials/fleet entries
- A/B tests (headline, CTA copy, form length)

---

### Appendix: Component Mapping Table
| Section | Primary Components |
|---|---|
| Header | shadcn NavigationMenu, Button, Sheet (mobile) |
| Hero | Button, Badge, next/image, Motion; (optional) ReactBits background |
| Proof Bar | Badges + lucide icons, Tooltip |
| Services | Card, HoverCard, Tabs (if splitting) |
| Fleet/Capabilities | Tabs, Table, Carousel (Embla) |
| What We Move | Badge/Toggle group + icon list |
| Permits & Escorts | Card/Callout + Accordion |
| Service Area Map | react‑simple‑maps **or** react‑map‑gl |
| Testimonials | Carousel; Card for quotes |
| Quote Form | RHF + Zod + shadcn Form/Input/Button |
| Footer | Semantic links, small nav |

— End —

