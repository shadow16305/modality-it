import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn("bg-white", manrope.className)}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
