import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  return (
    <html lang="ms" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
