import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import {
  GtmScript,
  GtmNoscript,
  MetaPixelScript,
  WhatsAppClickTracker,
} from "@/components/Analytics";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Balance Products Guayaquil",
    "distribuidor Balance Products",
    "productos naturales Guayaquil",
    "suplementos naturales Guayaquil",
    "bebidas naturales Guayaquil",
    "Hidralife Guayaquil",
    "electrolitos Guayaquil",
    "proteína Guayaquil",
    "Maximum proteína Guayaquil",
    "proveedor proteína gimnasios Guayaquil",
    "distribuidor gimnasios Guayaquil",
    "Mishá guayusa Guayaquil",
    "guayusa Guayaquil",
    "Stevia Balance mayorista",
    "endulzante natural Guayaquil",
    "bebidas funcionales al por mayor Ecuador",
    "proveedor farmacias Guayaquil",
    "ATLINN Innovations",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/products/og-image.png",
        width: 1200,
        height: 630,
        alt: "Catálogo Balance Products distribuido por ATLINN en Guayaquil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/products/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/catalog/logo-atlinn.png`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: "EC",
  },
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GtmScript />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <GtmNoscript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <MetaPixelScript />
        <WhatsAppClickTracker />
      </body>
    </html>
  );
}
