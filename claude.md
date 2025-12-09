# Project: Klinik Adelia Landing Page (Production Grade)

## 0. 🧠 MEMORY PROTOCOL (CRITICAL)

**Goal:** Maintain continuity across chat sessions.
**Rule:** You must maintain the file `project-progress.md` in the root directory.

1.  **Start of Session:** Always read `project-progress.md` first to understand the current state, completed tasks, and next steps.
2.  **End of Session:** Before finishing, you must update `project-progress.md` with:
    - New features implemented.
    - Current known bugs.
    - The immediate next step for the following session.

## 1. Executive Summary

Build a high-performance, accessible, and responsive landing page for "Klinik Adelia Alamsari". The design must convey "Medical Authority meets Modern Comfort."
**Primary Goal:** Conversion (WhatsApp click).
**Vibe:** Clean, Trustworthy, Serene (Teal/White/Slate).

## 2. Tech Stack & Architecture

- **Core:** Next.js 15 (App Router) + React 19.
- **Styling:** Tailwind CSS 4
- **UI Library:** **Shadcn/UI** (Radix Primitives).
- **Animation:** Framer Motion.
  - _Constraint:_ Disable heavy parallax on touch devices to ensure 60fps scrolling.
- **Icons:** Lucide-React (Use thin strokes for elegance).
- **SEO:** `next-sitemap`, JSON-LD Structured Data.

## 3. Git & Quality Workflow (Strict Requirement)

- **Version Control:** Git.
- **Commit Convention:** Angular/Conventional Commits.
- **Pre-Commit Hooks (Husky):**
  - **Lint-Staged:** Run `eslint` and `prettier --write`.
  - **Commit-Msg:** Validate format.

## 4. Theming & Design System

- **Library:** `next-themes`.
- **Color Strategy:**
  - **Light:** `bg-slate-50`, `text-slate-900`, Primary `text-teal-700`.
  - **Dark:** `bg-slate-950`, `text-slate-100`, Primary `text-teal-400`.
  - **Accents:** Use a soft Gold/Amber for "Premium" highlights (e.g., 5-star ratings).
  - **Logo Blue:** `#1E40AF` to `#2563EB` (matches the lotus logo gradient).
- **Typography:**
  - **Headings:** `Playfair Display` (Serif). Tight tracking (-0.02em).
  - **Body:** `Inter` (Sans). High legibility.
  - **UI Elements:** `Geist Sans` or `Inter` (for buttons/inputs).

## 5. Logo & Brand Assets (CRITICAL)

_All logo files are provided and must be used exactly as specified._

### A. Logo Files Location

Store all logo files in `/public/logo/` directory:

- **Main Logo (Blue):**
  - SVG: `/public/logo/klinik-adelia-logo.svg` (Preferred for web)
  - PNG: `/public/logo/klinik-adelia-logo.png` (800x800, fallback)
- **White Logo (Dark Mode):**

  - SVG: `/public/logo/klinik-adelia-logo-white.svg`
  - PNG: `/public/logo/klinik-adelia-logo-white.png` (800x800)

- **Favicons:**
  - `/public/favicon.ico` (Multi-size, browser default)
  - `/public/favicon.svg` (Modern browsers, auto dark mode)
  - `/public/favicon-16x16.png`
  - `/public/favicon-32x32.png`
  - `/public/favicon.png` (64x64, Android Chrome)
  - `/public/apple-touch-icon.png` (180x180, iOS)

### B. Logo Usage Rules

1. **Navbar Logo:**

   ```tsx
   <Image
     src="/logo/klinik-adelia-logo.svg"
     alt="Klinik Adelia"
     width={50}
     height={50}
     className="dark:hidden"
   />
   <Image
     src="/logo/klinik-adelia-logo-white.svg"
     alt="Klinik Adelia"
     width={50}
     height={50}
     className="hidden dark:block"
   />
   ```

2. **Favicon Setup in `app/layout.tsx`:**

   ```tsx
   export const metadata = {
     icons: {
       icon: [
         { url: "/favicon.ico" },
         { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
         { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
       ],
       apple: [
         { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
       ],
     },
   };
   ```

3. **Logo Glow Effect (on scroll):**
   - Add subtle `drop-shadow-lg` with teal color when navbar becomes sticky.
   - Use Framer Motion for smooth transition.

### C. Logo Design Notes

- The logo is a **blue lotus** with 7 petals (3 left, 1 center tall, 3 right).
- Symbolizes: **Purity, Healing, Tranquility** (perfect for medical branding).
- Color gradient: `#2563EB` → `#1E40AF` (matches hero CTAs).
- Maintain minimum size: 40px height (mobile), 50px (desktop) for legibility.

## 6. Data Architecture (`lib/constants.ts`)

_Strict Separation of Concerns._

- `doctorProfile`: { name, role, apcNumber, bio, imageUrl }.
- `services`: { title, description, iconName, priceRange (optional), span: "col-span-1" | "col-span-2" }.
- `clinicInfo`: {
  whatsappLink,
  whatsappMessage: "Helo Klinik Adelia, saya ingin membuat temujanji untuk [PERKHIDMATAN]. Nama: \_\_\_",
  googleMapsEmbedUrl,
  wazeLink,
  operatingHours: { weekday, weekend, publicHoliday },
  address: "Full address with landmarks"
  }.
- `reviews`: { name, rating, text, date, platform: "Google" | "Facebook", verified: boolean }.
- `insurancePanels`: { name, logoUrl }[] // Array of insurance providers
- `trustBadges`: { icon, text }[] // "MOH Registered", "10+ Years", etc.

## 7. Page Structure & Components

### A. Navbar (Smart Sticky)

- **Desktop:** Glassmorphism (`backdrop-blur-xl bg-white/80`), Logo, Links, "Book Now" Button.
- **Mobile:**
  - Top Bar: Logo + Hamburger (Sheet from Shadcn).
  - **Bottom Sticky Bar (CRITICAL):**
    - Fixed at `bottom-0` with `z-50`.
    - Two buttons side-by-side:
      - "📞 Call" (Secondary, `href="tel:+60XXXXXXXXX"`)
      - "💬 WhatsApp" (Primary, opens WhatsApp with pre-filled message)
    - Add safe-area padding for iPhone notch: `pb-safe`

### B. Hero Section (Conversion Focused)

- **Headline:** `Playfair Display`, size `text-5xl md:text-7xl`.
  - Primary: "Penjagaan Kesihatan Keluarga Anda"
  - Sub: "Panel 12+ Insurans | Walk-in Tiada Booking | Buka 7 Hari"
- **Trust Badges (Below Headline):**

  - Row of 4 mini badges: "MOH Registered", "10,000+ Patients", "15-min Wait Time", "Open Weekends"
  - Use `lucide-icons` with teal accents.

- **Visual:**

  - **Desktop:** Parallax background (detect with `window.matchMedia('(hover: hover)')`).
  - **Mobile:** Static high-quality image with gradient overlay (`bg-gradient-to-t from-slate-900/80`).
  - **Image:** Use `/public/images/hero-clinic-main.webp` (wide shot with doctor).

- **CTA:**
  - Primary: "Temujanji Sekarang" (WhatsApp link with arrow icon)
  - Secondary: "Lihat Perkhidmatan" (scroll to services)

### C. Services Grid (Bento Layout)

- **Design:** CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`.
- **Hover Effect:** `group-hover:scale-[1.02]` with smooth transition.
- **Cards (4 main services):**

  1. **Perundingan Am** (General Consultation) - 1x1

     - Icon: `Stethoscope` from lucide
     - Image: `/public/images/service-consult.webp`
     - Price: "RM30 - RM50"

  2. **Imbasan Ultrasound** (Ultrasound Scan) - 2x1 (FEATURED)

     - Icon: `Activity`
     - Image: `/public/images/service-ultrasound.webp`
     - Price: "RM80 - RM150"
     - Badge: "Popular" (gold accent)

  3. **Pembedahan Kecil** (Minor Surgery) - 1x1

     - Icon: `Scissors`
     - Image: `/public/images/service-minor-surgery.webp`
     - Price: "Harga berdasarkan prosedur"

  4. **Ibu & Anak** (Mother & Child) - 1x1
     - Icon: `Baby`
     - Price: "RM60 - RM120"

- **Interactivity:**
  - Click card → expand modal with full service details (use Shadcn Dialog).
  - Mobile: Cards stack vertically, maintain readability.

### D. The "Trust" Section (Doctor Profile)

- **Layout:**
  - Desktop: Image (40%) on Left, Text (60%) on Right.
  - Mobile: Image top, text below.
- **Content:**
  - **Image:** `/public/images/doctor-profile.webp` (professional portrait).
  - **Text:**
    - Name: "Dr. [Full Name]"
    - Role: "General Practitioner"
    - APC Number: "XXXXX" (in smaller text, adds legitimacy)
    - Bio: 2-3 paragraphs, empathetic tone.
      - Example: "Dengan pengalaman lebih 15 tahun, Dr. [Name] komited untuk memberikan rawatan yang mesra dan professional kepada setiap pesakit..."
    - Certifications: Mini badges (MBBS, MMC Registered, etc.)

### E. Panel Insurance (Marquee)

- **Component:** Infinite horizontal auto-scroll using `framer-motion` or CSS `@keyframes`.
- **Content:** Logos of insurance panels (AIA, Prudential, Allianz, PMCare, Takaful, etc.)
- **Style:**
  - Grayscale with `opacity-50` by default.
  - On hover: Full color with `opacity-100`.
  - Smooth transition: `transition-all duration-300`.
- **Mobile:** Slower scroll speed, larger logos.

### F. Reviews (Social Proof)

- **Component:** `ReviewCarousel` using Shadcn Carousel.
- **Design:**
  - Glass morphism cards (`bg-white/60 backdrop-blur-md`).
  - 5-star rating with gold stars (use `lucide-react Star` filled).
  - "Verified Patient" badge (teal checkmark icon).
- **Content Structure:**

  ```tsx
  {
    name: "Puan Sarah Ahmad",
    rating: 5,
    text: "Perkhidmatan yang sangat baik dan doktor yang mesra...",
    date: "2 weeks ago",
    platform: "Google",
    verified: true
  }
  ```

- **Carousel Settings:**
  - Auto-play every 5 seconds.
  - Show 3 cards on desktop, 1 on mobile.
  - Navigation dots at bottom.

### G. Location & Contact Section

- **Layout:**

  - Desktop: 60% Google Map (left), 40% Contact Info (right).
  - Mobile: Map full width (300px height), Info below.

- **Map:**

  - Embedded Google Maps iframe.
  - URL: `clinicInfo.googleMapsEmbedUrl`
  - Style: Rounded corners, shadow.
  - Add "Open in Waze" button below map (icon + link).

- **Contact Info:**
  - Address with landmark: "Bertentangan Giant Alamsari"
  - Operating Hours (collapsible Accordion):
    - Weekdays: "9:00 AM - 9:00 PM"
    - Weekends: "9:00 AM - 5:00 PM"
    - Public Holidays: "Closed / Special Hours"
  - Phone: Click-to-call link
  - WhatsApp: Same as sticky bar
  - Email: (if provided)

### H. Footer

- **Structure:**

  - Top: Quick Links (Services, About, Contact)
  - Middle: Social Media Icons (if applicable)
  - Bottom: Copyright, Privacy Policy, Medical Disclaimer

- **Medical Disclaimer (Critical):**
  ```
  "Maklumat di laman web ini adalah untuk tujuan informasi sahaja dan tidak boleh
  menggantikan nasihat perubatan profesional. Sila berjumpa dengan doktor untuk
  diagnosis dan rawatan yang sesuai."
  ```

## 8. Performance & SEO (CRITICAL)

### A. Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5s
  - Use Next.js `<Image>` component with `priority` for hero image.
  - Preload critical fonts in `layout.tsx`.
- **FID (First Input Delay):** < 100ms
  - Minimize JavaScript bundle size.
  - Use code splitting for heavy components (map, carousel).
- **CLS (Cumulative Layout Shift):** < 0.1
  - Set explicit width/height for all images.
  - Reserve space for dynamic content (reviews, insurance logos).

### B. Image Optimization

- **Format:** WebP (with JPG fallback for older browsers).
- **Sizes:** Use responsive images with `srcset`.
- **Lazy Loading:** All images below fold (services, reviews, map).
- **Compression:** TinyPNG or Next.js built-in optimization.

### C. SEO Metadata (`app/layout.tsx`)

```tsx
export const metadata = {
  title: "Klinik Adelia Alamsari | Klinik Panel Bangi",
  description:
    "Klinik perubatan panel di Alamsari, Bangi. Walk-in tiada booking. Buka 7 hari. Panel 12+ insurans. Perkhidmatan: Ultrasound, Ibu & Anak, Pembedahan Kecil.",
  keywords: [
    "klinik bangi",
    "klinik alamsari",
    "panel klinik",
    "ultrasound bangi",
    "klinik ibu mengandung",
  ],
  openGraph: {
    title: "Klinik Adelia Alamsari",
    description: "Penjagaan kesihatan keluarga yang mesra dan profesional",
    images: ["/og-image.jpg"], // Create this: 1200x630px
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Adelia Alamsari",
    description: "Klinik Panel di Bangi",
    images: ["/og-image.jpg"],
  },
};
```

### D. Structured Data (JSON-LD)

Add in `app/layout.tsx` or `app/page.tsx`:

```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Klinik Adelia Alamsari",
  "image": "https://yoursite.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Full Address]",
    "addressLocality": "Bangi",
    "addressRegion": "Selangor",
    "postalCode": "43650",
    "addressCountry": "MY"
  },
  "telephone": "+60XXXXXXXXX",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
  }
}
</script>
```

## 10. Mobile Optimization (CRITICAL)

### A. Touch-Friendly Design

- **Minimum tap target:** 44px x 44px (iOS guideline).
- **Bottom sticky bar buttons:** 56px height.
- **Spacing between interactive elements:** Minimum 8px.

### B. Performance

- **Reduce motion for accessibility:**
  ```tsx
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  ```

### C. Safe Areas (iPhone)

Use Tailwind custom utilities:

```css
/* globals.css */
@supports (padding: env(safe-area-inset-bottom)) {
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
```

## 11. Localization (Bahasa Malaysia)

- **Default Language:** Bahasa Malaysia (primary audience).
- **Optional English Toggle:** If required, use `next-intl` or simple state management.
- **Key Terms:**
  - "Temujanji" = Appointment
  - "Perkhidmatan" = Services
  - "Hubungi Kami" = Contact Us
  - "Buka Sekarang" = Open Now
  - "Walk-in Diterima" = Walk-ins Welcome

## 12. Asset & Content Strategy (Local Assets)

_Strict Instruction: Do NOT use placeholder URLs. Use the local files mapped below._

- **Image Location:** All images are stored in `/public/images`.
- **Image Mapping:**

  - **Hero Background:** `/public/images/hero-clinic-main.webp` (Wide shot with doctor).
  - **Doctor Profile:** `/public/images/doctor-profile.webp` (Professional portrait).
  - **Service - General:** `/public/images/service-consult.webp` (Consultation scene).
  - **Service - Ultrasound:** `/public/images/service-ultrasound.webp`.
  - **Service - Surgery:** `/public/images/service-minor-surgery.webp`.
  - **OG Image:** `/public/og-image.jpg` (1200x630, for social sharing).

- **Copywriting Tone:**
  - Professional yet neighborly ("Doktor kami sedia membantu").
  - Use "Dr. [Name]" consistently (wait for real name from client).
  - Emphasize **trust, speed, and convenience**.

## 13. Implementation Steps for Agent

1. **Setup:**

   - Init Next.js 15: `npx create-next-app@latest klinik-adelia --typescript --tailwind --app`
   - Install dependencies:
     ```bash
     npm install framer-motion lucide-react clsx tailwind-merge next-themes
     npx shadcn@latest init
     npx shadcn@latest add button card sheet carousel accordion dialog
     ```

2. **Project Structure:**

   ```
   /klinik-adelia
   ├── app/
   │   ├── layout.tsx (metadata, fonts)
   │   ├── page.tsx (main landing page)
   │   └── globals.css
   ├── components/
   │   ├── Navbar.tsx
   │   ├── Hero.tsx
   │   ├── Services.tsx
   │   ├── DoctorProfile.tsx
   │   ├── InsuranceMarquee.tsx
   │   ├── ReviewCarousel.tsx
   │   ├── Location.tsx
   │   ├── Footer.tsx
   │   └── MobileBottomBar.tsx
   ├── lib/
   │   ├── constants.ts (all data)
   │   └── utils.ts (cn helper)
   ├── public/
   │   ├── logo/ (all logo files)
   │   ├── images/ (service images, hero, doctor)
   │   └── favicons (all favicon variants)
   └── package.json
   ```

3. **Base Components:**

   - Install Shadcn components as listed above.
   - Setup `lib/utils.ts` with `cn` helper from shadcn docs.

4. **Layout:**

   - Build `Navbar` with glassmorphism and theme toggle.
   - Build `MobileBottomBar` with call + WhatsApp buttons.
   - Ensure proper z-index layering (navbar: 40, bottom bar: 50).

5. **Hero:**

   - Implement with parallax (desktop & mobile).
   - Add trust badges row.
   - Implement dual CTAs (primary WhatsApp, secondary scroll).

6. **Services Bento Grid:**

   - Create responsive grid with hover effects.
   - Implement service detail modal (Shadcn Dialog).

7. **Trust Section:**

   - Doctor profile with image + bio.
   - Add APC number and certification badges.

8. **Social Proof:**

   - Insurance marquee with infinite scroll.
   - Review carousel with auto-play.

9. **Location & Footer:**

   - Embed Google Map.
   - Add Waze link.
   - Contact info with accordion for hours.
   - Footer with disclaimer.

10. **SEO:**

    - Add metadata in `layout.tsx`.
    - Implement JSON-LD structured data.

### Content Gathering:

- [ ] Doctor's professional headshot (high-res, 800x800px minimum)
- [ ] Real patient testimonials (minimum 5, with consent)
- [ ] Exact operating hours (including public holidays)
- [ ] Service pricing (at least ranges)
- [ ] Insurance panel confirmation (list of accepted insurers)
- [ ] Google Maps embed URL (get from Google Maps "Share" → "Embed")
- [ ] WhatsApp business number
- [ ] Clinic phone number

### Legal & Compliance:

- [ ] Privacy Policy page (PDPA compliance)
- [ ] Medical disclaimer reviewed by clinic owner
- [ ] WhatsApp opt-in compliance (MCMC regulations)

### Final QA:

- [ ] All links work (WhatsApp, phone, Waze)
- [ ] Forms validate properly (if any)
- [ ] Images load on all devices
- [ ] Typography renders correctly (Playfair Display, Inter)
- [ ] Dark mode works properly
- [ ] No console errors

## Notes for Agent

- **PRIORITY:** Mobile experience is paramount (80% of Malaysian healthcare searches are mobile).
- **DESIGN PHILOSOPHY:** Less is more. Every element must serve conversion.
- **PERFORMANCE:** Lighthouse score > 90 is non-negotiable.
- **AUTHENTICITY:** Use real content, not Lorem Ipsum. Malaysian context matters.
- **TRUST:** Medical websites require extra credibility signals (APC number, certifications, real reviews).

**Remember:** This landing page's success will be measured by ONE metric: **WhatsApp click-through rate**. Optimize everything for that goal.
