# Project: [Client Name] Website

---

## 1. Project Overview

### Type
Static marketing website (Service Business)

### Framework
Next.js 14 (App Router)

### Rendering Strategy
Static Site Generation (SSG)

### Deployment
Vercel

### Primary Goal
Generate phone calls and quote form submissions.

### Secondary Goal
Rank locally for service-related keywords.

---

## 2. Engineering Principles

This project must follow senior-level frontend architecture.

- Modular component-based architecture
- Atomic design principles
- No duplicated UI logic
- Strict TypeScript (no `any`)
- Reusable layout system
- Clean folder structure
- Server Components by default
- Client Components only when required

---

## 3. Folder Structure

/src
  /app
    layout.tsx
    page.tsx
    /about
    /services
    /contact

  /components
    /layout
      Navbar.tsx
      Footer.tsx
    /sections
      HeroSection.tsx
      ServicesSection.tsx
      AboutSection.tsx
      TestimonialsSection.tsx
      CTASection.tsx
    /ui
      Container.tsx
      Section.tsx
      Button.tsx
      Card.tsx

  /config
    theme.ts
    site.ts

  /types
    service.ts

  /lib
    utils.ts

---

## 4. Design Execution Rules

- Container class: max-w-7xl mx-auto px-4
- Section spacing: py-16
- Consistent vertical rhythm
- No hardcoded colors
- Use theme variables from config
- Use next/image for all images
- Hover states required for interactive elements
- Smooth transitions
- Premium spacing and clean alignment

---

## 5. Component Architecture Rules

- Each homepage section must be isolated
- Sections must not contain hardcoded business data
- Business content stored inside `/config/site.ts`
- Reusable UI components in `/components/ui`
- Layout components separated from content sections
- No business logic inside UI components

---

## 6. Content Management Strategy

All business data must live inside:

/config/site.ts

Example:
- Business name
- Phone
- Email
- Address
- Service list
- Social links

This ensures:
- No duplication
- Easy scaling
- Easy reuse for future projects

---

## 7. SEO Strategy

### Metadata
- Use generateMetadata per page
- Title under 60 characters
- Meta description under 160 characters

### Headings
- One H1 per page
- Proper H2 / H3 hierarchy
- No skipped heading levels

### Technical SEO
- Static generation
- Clean URL structure
- OpenGraph tags
- Twitter cards
- Canonical URLs
- robots.txt
- sitemap.xml

### Local SEO
- Location included in title tags
- Structured data (JSON-LD LocalBusiness schema)
- NAP consistency

---

## 8. Performance Standards

- Lighthouse score 90+
- All images optimized
- Lazy load images
- Avoid unnecessary client components
- No large unoptimized packages
- No layout shifts
- Minimize bundle size

---

## 9. Accessibility Rules

- Semantic HTML only
- All images must have alt text
- Buttons must use <button>
- Forms must have labels
- Proper contrast ratio
- Keyboard navigable

---

## 10. Styling Rules

- Tailwind CSS only
- No inline styles
- No arbitrary values unless necessary
- Mobile-first responsive approach
- Avoid deeply nested layout wrappers
- Consistent spacing system

---

## 11. Code Quality Checklist (Before Delivery)

- No console.logs
- No unused imports
- No commented-out code
- No duplicate components
- No repeated Tailwind blocks
- No `any` types
- No hardcoded business data
- All images optimized
- Metadata verified
- Forms tested

---

## 12. Future Scalability Considerations

Architecture must allow:
- Blog addition later
- Dynamic service pages
- CMS integration if needed
- Multi-location expansion
- Internationalization if required

Code must be written with scalability in mind.

---

## 13. Animation Guidelines (If Used)

- Subtle motion only
- No excessive animation
- Framer Motion 
- Use fade + slide patterns
- Maintain performance

---

## 14. Deployment Requirements

- Environment variables secured
- Build without warnings
- TypeScript clean build
- Final production audit before deployment

---

## 15. Final Delivery Standards

This project must:
- Feel premium
- Be cleanly structured
- Be scalable
- Be SEO optimized
- Be performance optimized
- Be production-ready