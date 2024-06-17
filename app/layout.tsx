import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modality IT",
  description: "IT Support for Diagnostic Clinics!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("overflow-x-hidden bg-white", manrope.className)}>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
