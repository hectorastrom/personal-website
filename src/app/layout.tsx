import type { Metadata } from "next";
import localFont from "next/font/local"
import { Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
export const regards = localFont({ src: "../../public/fonts/regards.ttf" });

export const metadata: Metadata = {
  title: "Hector's Page",
  description: "The main page of my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-50 text-zinc-900 antialiased`}>{children}</body>
    </html>
  );
}
