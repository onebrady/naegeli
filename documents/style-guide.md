# HeavyHaulTexas.com — Visual Style Guide

## Design Philosophy
This style system balances **industrial strength** with **modern accessibility**. The visual language communicates 69 years of expertise while maintaining the clarity and performance standards of contemporary web design.

---

## Typography

### Font Pairing: Inter + Space Grotesk

**Primary Font (Body & UI): Inter**
- **Rationale:** Exceptional legibility at all sizes, optimized for screens, includes tabular figures for specs/tonnage, professional without being corporate-stiff
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** Body copy, form fields, captions, buttons, navigation, stats

**Display Font (Headlines): Space Grotesk**
- **Rationale:** Geometric strength with technical precision; echoes industrial/mechanical aesthetic; excellent pairing with Inter; open-source
- **Weights Used:** 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** H1, H2, hero headlines, section titles, stat numbers

### Type Scale (Desktop)
```
H1 (Hero):        56px / 3.5rem    Space Grotesk Bold      line-height: 1.1    letter-spacing: -0.02em
H2 (Section):     40px / 2.5rem    Space Grotesk Semibold  line-height: 1.2    letter-spacing: -0.01em
H3 (Subsection):  32px / 2rem      Space Grotesk Semibold  line-height: 1.3    letter-spacing: 0
H4 (Card Title):  24px / 1.5rem    Space Grotesk Medium    line-height: 1.4    letter-spacing: 0
H5 (Small Head):  20px / 1.25rem   Inter Semibold          line-height: 1.4    letter-spacing: 0
Body Large:       18px / 1.125rem  Inter Regular           line-height: 1.6    letter-spacing: 0
Body:             16px / 1rem      Inter Regular           line-height: 1.6    letter-spacing: 0
Body Small:       14px / 0.875rem  Inter Regular           line-height: 1.5    letter-spacing: 0
Caption:          12px / 0.75rem   Inter Medium            line-height: 1.4    letter-spacing: 0.01em
```

### Type Scale (Mobile)
```
H1:               36px / 2.25rem   (scale down hero)
H2:               32px / 2rem
H3:               24px / 1.5rem
H4:               20px / 1.25rem
Body Large:       17px / 1.0625rem
Body:             16px / 1rem
```

### Implementation (Next.js)
```tsx
import { Inter, Space_Grotesk } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
```

---

## Color System

### Brand Foundation
**Naegeli Orange (Primary):** `#ff6b00`
- Use for: CTAs, active states, trust badges, icons, hover accents
- Accessibility: Meets AA contrast on dark backgrounds; avoid on white without sufficient size/weight

### Extended Palette

#### Neutrals (Anchors & Surfaces)
```
black:         #0a0a0a    // Headers, footer
charcoal:      #1a1a1a    // Proof bar, dark sections
slate-900:     #0f172a    // Text primary
slate-700:     #334155    // Text secondary
slate-500:     #64748b    // Text tertiary / muted
slate-300:     #cbd5e1    // Borders, dividers
slate-100:     #f1f5f9    // Backgrounds (alternating)
white:         #ffffff    // Canvas
```

#### Orange Spectrum (Primary Brand)
```
orange-900:    #7c2d12    // Dark hover state (buttons)
orange-700:    #c2410c    // Hover state
orange-600:    #ea580c    // Secondary orange
orange-500:    #ff6b00    // PRIMARY BRAND
orange-400:    #ff8533    // Light hover
orange-100:    #ffedd5    // Subtle backgrounds
orange-50:     #fff7ed    // Lightest tint
```

#### Supporting Colors
```
// Success (form success, check icons)
green-600:     #16a34a
green-100:     #dcfce7

// Warning (certifications, alerts)
amber-500:     #f59e0b
amber-100:     #fef3c7

// Error (form validation)
red-600:       #dc2626
red-100:       #fee2e2

// Info (map, secondary CTAs)
blue-600:      #2563eb
blue-100:      #dbeafe
```

### Semantic Color Assignments
```
Background Primary:     white
Background Secondary:   slate-100
Background Dark:        charcoal (#1a1a1a)
Background Darkest:     black (#0a0a0a)

Text Primary:           slate-900
Text Secondary:         slate-700
Text Tertiary:          slate-500
Text Inverse:           white

Border Default:         slate-300
Border Strong:          slate-500

Focus Ring:             orange-500 with 2px offset

CTA Primary:            orange-500 bg, white text
CTA Primary Hover:      orange-700 bg
CTA Secondary:          white bg, orange-500 border, orange-500 text
CTA Secondary Hover:    orange-500 bg, white text
```

### Accessibility Contrast Requirements
- Body text on white: `slate-900` (19.36:1 ✓)
- Orange CTA text (white on orange-500): 3.45:1 (AA Large ✓, use bold for smaller text)
- All interactive elements: minimum 3:1
- All text: minimum 4.5:1 (AA)

---

## Spacing Scale (Tailwind Base)
```
0.5  →  2px      // Subtle borders
1    →  4px      // Icon padding
2    →  8px      // Tight spacing
3    →  12px     // Component internal spacing
4    →  16px     // Default gap
5    →  20px     // Card padding
6    →  24px     // Section internal padding
8    →  32px     // Section spacing (mobile)
10   →  40px     // Section spacing (tablet)
12   →  48px     // Component separation
16   →  64px     // Section spacing (desktop)
20   →  80px     // Major section padding
24   →  96px     // Hero vertical padding
32   →  128px    // Large section gaps
```

---

## Component Styles

### Buttons
**Primary CTA**
```
bg: orange-500
text: white
font: Inter Semibold 16px
padding: 12px 30px (py-3 px-8)
border-radius: 6px (rounded-md)
hover: bg orange-700, transform scale-[1.02]
transition: all 200ms ease
focus: ring-2 ring-orange-500 ring-offset-2
```

**Secondary CTA**
```
bg: transparent
text: orange-500
border: 2px solid orange-500
hover: bg orange-500, text white
```

**Tertiary / Text Link**
```
text: orange-500
underline-offset: 4px
hover: text orange-700, underline
```

### Cards
**Default Card**
```
bg: white
border: 1px solid slate-300
border-radius: 10px (rounded-lg)
padding: 40px (p-10 on desktop, p-6 mobile)
shadow: 0 4px 15px rgba(0,0,0,0.08) (shadow-lg)
hover: shadow-xl, translateY(-4px)
transition: all 300ms ease
```

**Service Card (with left accent)**
```
border-left: 4px solid orange-500
```

### Badges / Pills
```
bg: orange-100
text: orange-700
font: Inter Medium 14px
padding: 6px 14px (px-3.5 py-1.5)
border-radius: 9999px (rounded-full)
```

### Form Inputs
```
bg: white
border: 1px solid slate-300
border-radius: 6px
padding: 12px 16px
font: Inter Regular 16px
placeholder: slate-500

focus:
  border: orange-500
  ring: 2px orange-500
  ring-offset: 2px

error:
  border: red-600
  ring: 2px red-600
```

### Section Backgrounds (Alternating)
```
Section 1 (Hero):                   Image overlay with rgba(0,0,0,0.6)
Section 2 (Services):               slate-100
Section 3 (Proof Bar):              charcoal (#1a1a1a)
Section 4 (Fleet):                  white
Section 5 (What We Move):           slate-100
Section 6 (Service Area):           white
Section 7 (Testimonials):           black (#0a0a0a)
Section 8 (Why Choose):             slate-100
Section 9 (Quote Form):             white
Section 10 (Recruitment CTA):       slate-200 (muted)
Section 11 (Footer):                charcoal (#1a1a1a)
```

---

## Iconography

**Library:** Lucide React (tree-shakable, consistent 24px grid)

**Icon Sizes:**
```
Small:    16px (w-4 h-4)    // Inline badges
Default:  24px (w-6 h-6)    // Body icons
Large:    32px (w-8 h-8)    // Section icons
XL:       48px (w-12 h-12)  // Feature icons
```

**Icon Colors:**
```
Default: slate-700
Accent: orange-500
Inverse (on dark): white
Muted: slate-500
```

**Suggested Icons (from Lucide):**
- `Truck` — Heavy haul
- `Wrench` — Rigging
- `Shield` — Safety/certification
- `Award` — Trust/ratings
- `MapPin` — Service area
- `Phone` — Contact
- `Mail` — Email
- `CheckCircle2` — Success/features
- `ChevronRight` — Navigation
- `ExternalLink` — External links
- `Download` — Capability sheets

---

## Shadows & Depth

```
shadow-sm:    0 1px 2px rgba(0,0,0,0.05)        // Subtle lift
shadow:       0 2px 8px rgba(0,0,0,0.1)         // Default card
shadow-lg:    0 4px 15px rgba(0,0,0,0.08)       // Service cards
shadow-xl:    0 8px 24px rgba(0,0,0,0.12)       // Hover states
shadow-2xl:   0 12px 40px rgba(0,0,0,0.15)      // Modals (future)

// Inset shadow for inputs
shadow-inner: inset 0 2px 4px rgba(0,0,0,0.06)
```

---

## Animation & Motion

**Timing Functions:**
```
ease-smooth:   cubic-bezier(0.4, 0, 0.2, 1)     // Default Tailwind
ease-bounce:   cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

**Durations:**
```
fast:     150ms    // Hovers, small interactions
default:  200ms    // Buttons, links
medium:   300ms    // Cards, transitions
slow:     500ms    // Page sections (intersection)
```

**Respect Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Hero Animations:**
```
Headline:   fade-in + slide-up (delay 0ms)
Subhead:    fade-in + slide-up (delay 100ms)
CTA 1:      fade-in + slide-up (delay 200ms)
CTA 2:      fade-in + slide-up (delay 300ms)
Badge:      fade-in (delay 400ms)
```

**Scroll Reveal (Intersection Observer):**
```
Sections: fade-in + slide-up when 20% visible
Cards: stagger 100ms between items
```

---

## Breakpoints (Tailwind Default)

```
sm:   640px   // Mobile landscape
md:   768px   // Tablet portrait
lg:   1024px  // Tablet landscape / small desktop
xl:   1280px  // Desktop
2xl:  1536px  // Large desktop

Max content width: 1200px (container mx-auto px-4)
```

---

## Grid System

**Homepage Section Grids:**

**Service Cards (2-column):**
```
sm: 1 column (stack)
lg: 2 columns (grid-cols-2 gap-8)
```

**What We Move (4-column):**
```
sm: 1 column
md: 2 columns
lg: 4 columns (grid-cols-4 gap-6)
```

**Why Choose (4-column):**
```
sm: 1 column
md: 2 columns
lg: 4 columns
```

**Client Logos (flexible):**
```
sm: 2 columns
md: 4 columns
lg: 6 columns (grid-cols-6 gap-8)
```

---

## Performance Budget Compliance

**Image Optimization:**
- Hero image: ≤180KB (WebP/AVIF)
- Section images: ≤100KB each
- Icons: Inline SVG or optimized SVG sprites
- Logo: SVG (vector)

**Font Loading:**
- Self-host via `next/font` (zero CLS)
- Subset to Latin characters
- `font-display: swap`

**Total Page Weight:** <1.0MB (target), <1.5MB (max)

**Core Web Vitals Targets:**
- LCP: <2.5s
- FID: <100ms
- CLS: <0.05

---

## Accessibility Standards

**WCAG 2.1 Level AA Compliance:**
- Color contrast ≥4.5:1 for text
- Color contrast ≥3:1 for UI components
- Focus indicators visible (2px ring, orange-500)
- Form labels always visible (no placeholder-only)
- Error messages in text + color
- Skip links for keyboard navigation
- Semantic HTML throughout
- ARIA labels on icon-only buttons
- Alt text on all content images

---

## Implementation Checklist

### Tailwind Config Extensions
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'naegeli-orange': '#ff6b00',
      'charcoal': '#1a1a1a',
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      display: ['var(--font-space-grotesk)'],
    },
  },
}
```

### CSS Custom Properties (Optional Legacy Support)
```css
:root {
  --color-brand: #ff6b00;
  --color-charcoal: #1a1a1a;
  --font-body: var(--font-inter);
  --font-display: var(--font-space-grotesk);
}
```

---

## Design Tokens Summary

| Token | Value | Usage |
|-------|-------|-------|
| `font.body` | Inter | All body text, UI |
| `font.display` | Space Grotesk | Headlines, stats |
| `color.brand` | #ff6b00 | CTAs, accents |
| `color.dark` | #1a1a1a | Dark sections |
| `color.text` | #0f172a | Primary text |
| `radius.default` | 6px | Buttons, inputs |
| `radius.card` | 10px | Cards |
| `shadow.card` | lg | Service cards |
| `transition.default` | 200ms | Interactive elements |

---

**Version:** 1.0
**Last Updated:** 2025-09-30
**Status:** Production Ready
