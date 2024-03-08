import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Dresspresso",
  description: "Your go-to solution for indecisive fashionistas. Dresspresso lets you randomly pick the perfect dress from your collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn([inter.className, 'bg-background container mx-auto p-4 '])}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
