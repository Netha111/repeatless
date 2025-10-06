import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// SEO Metadata 
export const metadata: Metadata = { 
  title: "Repeatless - AI Automation Solutions", 
  description: "Transform your business with Repeatless AI automation solutions, boosting efficiency and growth through intelligent automation.", 
  keywords: ["AI Automation", "Business Efficiency", "Productivity Solutions", "Repeatless", "Automation Software"],
  openGraph: { 
    title: "Repeatless - AI Automation Solutions", 
    description: "Transform your business with Repeatless AI automation solutions, boosting efficiency and growth through intelligent automation.", 
    url: "https://www.repeatless.in", 
    siteName: "Repeatless", 
    images: [ { url: "./images/logo.svg", width: 1200, height: 630, alt: "Repeatless AI Automation", }, ],
    locale: "en_US", type: "website", 
  }, 
  twitter: { 
    card: "summary_large_image", 
    title: "Repeatless - AI Automation Solutions", 
    description: "Transform your business with Repeatless AI automation solutions, boosting efficiency and growth through intelligent automation.", 
    images: [""], 
    creator: "@repeatless", 
  },
  metadataBase: new URL("https://www.repeatless.in"), 
  alternates: { canonical: "/", }, 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />

        {/* ===== WhatsApp Floating Button ===== */}
        <a
          href="https://wa.me/919849884501"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#2d1e95]  text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>
      </body>
    </html>
  );
}
