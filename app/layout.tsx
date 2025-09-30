import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { localBusinessSchema, serviceSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Houston Heavy Haul & Crane Services Since 1956 | Naegeli Transportation",
  description:
    "Expert heavy equipment transport (2,000–200,000 lbs) and crane/rigging services across TX, LA, AR, OK. DOT certified, 70+ vehicles. Request a quote: (713) 946-4000.",
  keywords: [
    "Houston heavy haul transportation",
    "crane and rigging services Texas",
    "oversize load transport Houston",
    "heavy equipment moving",
    "machine tool rigging",
  ],
  authors: [{ name: "Naegeli Transportation" }],
  openGraph: {
    title: "Houston Heavy Haul & Crane Services Since 1956",
    description: "Expert heavy equipment transport and crane/rigging services across TX, LA, AR, OK",
    type: "website",
    locale: "en_US",
    siteName: "Naegeli Transportation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
