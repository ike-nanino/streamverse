import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Viewport } from 'next'

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamverse",
  description: "A movie streaming platform by Nanino",
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  userScalable: false,

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spartan.className}>
      <body className="bg-midnight text-white">
        
          <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
