import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import Header from "@/components/header/header";
import UploadPicture from "@/components/upload-pictures/upload-pictures";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dresspresso",

  description:
    "Your go-to solution for indecisive fashionistas. Dresspresso lets you randomly pick the perfect dress from your collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={cn([inter.className, "bg-background"])}>
        <Providers>
          <Header />
          {children}
          <UploadPicture />
        </Providers>
      </body>
    </html>
  );
}
