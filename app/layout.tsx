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
      "streetAddress": "No. 123, Jalan Alamsari 1, Taman Alamsari",
      "addressLocality": "Bangi",
      "addressRegion": "Selangor",
      "postalCode": "43650",
      "addressCountry": "MY"
    },
    "telephone": "+60123456789",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00"
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
    ]
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
