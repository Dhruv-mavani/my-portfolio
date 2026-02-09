import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Configure the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Base Metadata
  title: "Dhruv Mavani | Full Stack Developer",
  description: "Portfolio of Dhruv Mavani - Full Stack Developer specializing in React, Shopify, and modern web experiences.",
  icons: {
    icon: "/coffee-favicon.svg",
  },
  
  // 2. Search Engine Keywords (Helps Google find you)
  keywords: ["Dhruv Mavani", "Full Stack Developer", "React", "Next.js", "Shopify", "Portfolio", "Web Developer"],
  
  // 3. Social Media Previews (OpenGraph)
  openGraph: {
    title: "Dhruv Mavani | Full Stack Developer",
    description: "Turning coffee into cool projects. Check out my latest work in React & Shopify.",
    url: "https://dhruvmavani.me",
    siteName: "Dhruv Mavani Portfolio",
    images: [
      {
        url: "/Me.jpeg", // This uses your profile pic as the preview image!
        width: 1200,
        height: 630,
        alt: "Dhruv Mavani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}