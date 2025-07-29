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