import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamverse",
  description: "A movie streaming platform by Nanino",
};

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
