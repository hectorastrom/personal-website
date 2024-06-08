import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "../../public/fonts/fonts";
import ResponsiveNav from "@/components/ResponsiveNav";

export const metadata: Metadata = {
  title: "Hector Astrom",
  description: "Hector's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} bg-gradient-to-b from-slate-50 to-slate-100 text-xl text-default antialiased mx-auto max-w-full h-screen mt-28 overflow-hidden`}
      >
        <div className="px-10 pt-4 sm:pt-16 pb-24 sm:pb-36 sm:grid sm:grid-cols-[max-content,minmax(0,36rem)] sm:justify-center sm:gap-x-12">
          <ResponsiveNav />
          <main className={`pl-4 sm:pl-0 mt-4`}>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
