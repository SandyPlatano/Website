import type { Metadata } from "next";
import { Space_Grotesk, EB_Garamond } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap"
});

// Site URL - can be overridden with NEXT_PUBLIC_SITE_URL environment variable
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gtmwithferm.netlify.app";

export const metadata: Metadata = {
  title: {
    default: "GTMwithFerm | Go-to-Market Systems Engineer",
    template: "%s | GTMwithFerm"
  },
  description: "Building go-to-market systems that drive results, remove friction, and amplify teams. Automation playbooks, enrichment workflows, and enablement tools for marketing, sales, and success teams.",
  keywords: ["go-to-market", "GTM", "revenue operations", "RevOps", "sales automation", "marketing automation", "Clay", "CRM enrichment", "sales enablement"],
  authors: [{ name: "Fermin Andujar" }],
  creator: "Fermin Andujar",
  publisher: "GTMwithFerm",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "GTMwithFerm",
    title: "GTMwithFerm | Go-to-Market Systems Engineer",
    description: "Building go-to-market systems that drive results, remove friction, and amplify teams.",
    // TODO: Add your Open Graph image (1200x630px recommended)
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "GTMwithFerm - Go-to-Market Systems Engineer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTMwithFerm | Go-to-Market Systems Engineer",
    description: "Building go-to-market systems that drive results, remove friction, and amplify teams.",
    creator: "@yourtwitterhandle", // TODO: Add your Twitter handle
    // TODO: Add your Twitter image (1200x675px recommended)
    // images: ["/twitter-image.jpg"],
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
  verification: {
    // TODO: Add your verification codes if you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      // TODO: Add these icon files to public/ folder before launch
      // { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      // { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      // TODO: Add apple-touch-icon.png to public/ folder
      // { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ebGaramond.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

