import type { Metadata, Viewport } from "next";
import { Young_Serif, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.mikocare.pro"
  ),
  title: "Miko — Skincare Routine Builder & Ingredient Layering",
  description:
    "Point it at any bottle. Miko reads the label and tells you what is in it, whether it suits your skin, and what not to use it with. Stored privately on your device.",
  alternates: {
    canonical: "/",
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
  keywords: [
    "skincare routine builder",
    "ingredient conflict checker",
    "INCI scanner",
    "retinol routine",
    "pregnancy skincare checker",
    "skincare order",
    "layering rules",
  ],
  authors: [{ name: "Miko Skincare" }],
  applicationName: "Miko",
  appleWebApp: {
    title: "Miko",
    statusBarStyle: "default",
    capable: true,
  },
  openGraph: {
    title: "Miko — Point it at any bottle.",
    description:
      "Miko reads the label and tells you what is in it, whether it suits your skin, and what not to use it with.",
    type: "website",
    locale: "en_US",
    siteName: "Miko Skincare",
  },
  icons: {
    icon: [
      { url: "/miko-mark-master.jpg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/miko-mark-master.jpg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miko — Skincare Routine Builder",
    description:
      "Point it at any bottle. Reads the label, flags ingredients for your skin, and maps your weekly routine.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBF7F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Miko Skincare",
        url: "https://www.mikocare.pro",
        logo: "https://www.mikocare.pro/miko-mark-master.jpg",
        description: "Impartial skincare routine builder and cosmetic ingredient decoder.",
      },
      {
        "@type": "WebSite",
        name: "Miko Skincare",
        url: "https://www.mikocare.pro",
        description: "Decodes skincare labels into plain biology, checks ingredient conflicts, and builds personalized routines.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Miko",
        operatingSystem: "iOS",
        applicationCategory: "HealthApplication",
        description:
          "Reads cosmetic labels from a photograph, categorizes ingredients by skin match, detects layering conflicts, and structures a weekly skincare routine.",
        offers: {
          "@type": "Offer",
          price: "49.99",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#241E19] antialiased selection:bg-[#EAE0D2] selection:text-[#241E19]">
        {children}
      </body>
    </html>
  );
}
