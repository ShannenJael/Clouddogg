import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-body",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CloudDogg",
    default: "CloudDogg | Cloud Strategy, AI, and Application Delivery",
  },
  description:
    "CloudDogg is a veteran-founded cloud solutions partner focused on platform engineering, AI automation, blockchain cloud applications, product delivery, and cloud training.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
