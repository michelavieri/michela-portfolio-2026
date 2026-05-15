import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Michela Vieri",
  "jobTitle": "Product Designer & Frontend Engineer",
  "url": "https://michelavieri.com",
  "sameAs": [
    "https://linkedin.com/in/michelavieri",
    "https://www.dribbble.com/michelavieri"
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://michelavieri.com"),
  title: "Michela Vieri - Product Designer & Engineer Portfolio",
  description: "Web Designer & Frontend Engineer portfolio featuring projects, case studies, and experiences",
  keywords: [
    "Michela Vieri",
    "Product Designer",
    "Frontend Engineer",
    "Portfolio",
    "Web Design",
    "UX",
    "UI",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Michela Vieri - Product Designer & Engineer Portfolio",
    description: "Web Designer & Frontend Engineer portfolio featuring projects, case studies, and experiences",
    type: "website",
    url: "https://michelavieri.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michela Vieri - Product Designer & Engineer Portfolio",
    description: "Web Designer & Frontend Engineer portfolio featuring projects, case studies, and experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
