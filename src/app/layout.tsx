import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 mx-auto p-4`}>{children}</body>
    </html>
  );
}
