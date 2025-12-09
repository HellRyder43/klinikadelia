import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klinik Adelia Alamsari | Klinik Panel Kajang",
  description:
    "Klinik perubatan panel di Kajang. Walk-in tiada booking. Buka 24/7 (8am - 12am). Panel 12+ insurans. Perkhidmatan: Ultrasound, Ibu & Anak, Pembedahan Kecil.",
  keywords: [
    "klinik kajang",
    "klinik adelia alamsari",
    "klinik panel kajang",
    "panel klinik",
    "ultrasound kajang",
    "klinik ibu mengandung",
    "klinik 24 jam kajang",
  ],
  icons: {
    icon: [
      { url: "/favicons/favicon-premium.ico" },
      { url: "/favicons/favicon-premium-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-premium-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon-premium.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Klinik Adelia Alamsari",
    description: "Penjagaan kesihatan keluarga yang mesra dan profesional",
    locale: "ms_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Klinik Adelia Alamsari",
    "image": "https://klinikadelia.com/logo/klinik-adelia-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7-1, Jalan Sari Niaga",
      "addressLocality": "Kajang",
      "addressRegion": "Selangor",
      "postalCode": "43000",
      "addressCountry": "MY"
    },
    "telephone": "+60135253503",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "00:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120"
    },
    "priceRange": "$$",
    "medicalSpecialty": [
      "General Practice",
      "Family Medicine",
      "Obstetrics",
      "Pediatrics",
      "Minor Surgery"
    ],
    "physician": {
      "@type": "Physician",
      "name": "Dr. Zahhar Anwar Bin Zainudin",
      "medicalSpecialty": "General Practice",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universiti Kuala Lumpur"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Bachelor of Medicine and Bachelor of Surgery"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "professional certification",
          "name": "Malaysian Medical Council Full Registration",
          "identifier": "65411"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "professional license",
          "name": "Annual Practicing Certificate 2026",
          "identifier": "17273"
        }
      ]
    }
  };

  return (
    <html lang="ms" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
