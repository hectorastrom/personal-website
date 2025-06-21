import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, emphasisFont } from "../../public/fonts/fonts";
import ResponsiveNav from "@/components/ResponsiveNav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        className={`${bodyFont.className} ${emphasisFont.variable} bg-gradient-to-b from-slate-50 to-slate-100 text-xl text-default antialiased min-h-screen`}
      >
        <div className="px-10 pb-24 mt-24 grid grid-rows-auto md:grid-cols-[max-content,minmax(0,48rem)] md:justify-center md:gap-x-12 max-w-full">
          <ResponsiveNav className="self-start" />
          <main className="self-start pb-6 md:pl-4 pl-0">
            <div className=" mt-16 md:mt-16">
              {children}
            </div>
          </main>
        </div>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
