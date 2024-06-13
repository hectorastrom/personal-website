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
        className={`${bodyFont.className} bg-gradient-to-b from-slate-50 to-slate-100 text-xl text-default antialiased mx-auto max-w-full min-h-screen mt-28 overflow-auto`}
      >
        <div className="px-10 pb-24 grid grid-rows-2 md:pb-36 md:grid md:grid-cols-[max-content,minmax(0,36rem)] md:justify-center md:gap-x-12">
          <ResponsiveNav />
          <main className="pl-4 sm:pl-0">
            <div className="mt-14 ml:-mt-8 sm:mt-18 md:mt-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
