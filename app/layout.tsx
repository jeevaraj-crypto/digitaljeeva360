import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Kavin | Digital Marketing & Paid Ads Specialist in Chennai",
    template: "%s",
  },
  description:
    "Digital Kavin is a Chennai-based digital marketer offering SEO, Google & Meta Ads, AI automation, and website development for growing businesses.",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Digital Kavin | Digital Marketing & Paid Ads Specialist in Chennai",
    description:
      "SEO, Paid Ads, AI Automation, and Website Development for businesses in Chennai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Kavin | Digital Marketing & Paid Ads Specialist in Chennai",
    description:
      "SEO, Paid Ads, AI Automation, and Website Development for businesses in Chennai.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  );
}
