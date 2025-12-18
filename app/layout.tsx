import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luminosa - Affordable High-Intensity Phototherapy for Neonatal Jaundice",
  description: "Luminosa is an innovative 360-degree phototherapy device designed to treat neonatal jaundice effectively and affordably. Featuring 4-source LED technology with uniform irradiance and thermal safety.",
  keywords: ["neonatal jaundice", "phototherapy", "newborn care", "bilirubin treatment", "medical device", "healthcare innovation", "LED phototherapy", "infant care"],
  authors: [{ name: "Luminosa Team" }],
  creator: "Luminosa Project",
  publisher: "Luminosa Project",
  metadataBase: new URL('https://luminosa-v2.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Luminosa - Affordable High-Intensity Phototherapy for Neonatal Jaundice",
    description: "Innovative 360-degree phototherapy device designed to treat neonatal jaundice effectively and affordably with 4-source LED technology.",
    url: 'https://luminosa-v2.vercel.app',
    siteName: 'Luminosa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/luminosa.png',
        width: 1200,
        height: 630,
        alt: 'Luminosa Phototherapy Device',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Luminosa - Affordable High-Intensity Phototherapy for Neonatal Jaundice",
    description: "Innovative 360-degree phototherapy device for treating neonatal jaundice with 4-source LED technology.",
    images: ['/luminosa.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0B0E25" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
