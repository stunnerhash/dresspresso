import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
