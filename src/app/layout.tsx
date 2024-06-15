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
        className={`${bodyFont.className} bg-gradient-to-b from-slate-50 to-slate-100 text-xl text-default antialiased px-10 pb-24 grid grid-rows-2 max-w-full mt-28 md:pb-36 md:grid md:grid-cols-[max-content,minmax(0,48rem)] md:justify-center md:gap-x-12 h-min-screen`}
      >
        <ResponsiveNav />
        <main className="pb-6 md:pl-4 pl-0">
          <div className="mt-[4.5rem] ml:-mt-8 sm:mt-18 md:mt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
