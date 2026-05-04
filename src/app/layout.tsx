import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Hotel Room Service — Smart Hotel Management",
    template: "%s | Hotel Room Service",
  },
  description: "A fast, operational tool for small hotels. Check guests in, track rooms, and maintain clean records in under 40 seconds.",
  keywords: ["hotel management", "small hotel software", "guest check-in", "ID scanner OCR", "room status tracking", "hotel automation"],
  authors: [{ name: "Hotel Room Service Team" }],
  creator: "Hotel Room Service",
  metadataBase: new URL("https://hms.codebyakshay.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hms.codebyakshay.com",
    title: "Hotel Room Service — Smart Hotel Management",
    description: "Manage your hotel in under 40 seconds. Fast, operational tool for small hotels.",
    siteName: "Hotel Room Service",
    images: [
      {
        url: "/og-image.jpg", // Suggested path for OG image
        width: 1200,
        height: 630,
        alt: "Hotel Room Service Dashboard Mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Room Service — Smart Hotel Management",
    description: "Manage your hotel in under 40 seconds. Fast, operational tool for small hotels.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-body antialiased selection:bg-brand selection:text-white`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
