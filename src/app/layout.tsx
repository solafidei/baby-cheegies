import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factors Western - Cash Flow Solutions for Canadian Businesses",
  description: "Established in 1985 in Calgary, Factors Western helps companies convert receivables to cash and create reliable cash flow solutions.",
  keywords: "factoring, cash flow, accounts receivable, Canadian business, Calgary, financing",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Factors Western - Cash Flow Solutions for Canadian Businesses',
    description: 'Established in 1985 in Calgary, Factors Western helps companies convert receivables to cash and create reliable cash flow solutions.',
    url: 'https://www.factorswestern.com',
    siteName: 'Factors Western',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Factors Western',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factors Western - Cash Flow Solutions for Canadian Businesses',
    description: 'Established in 1985 in Calgary, Factors Western helps companies convert receivables to cash and create reliable cash flow solutions.',
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 