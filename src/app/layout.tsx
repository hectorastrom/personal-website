import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "../../public/fonts/fonts";
import Sidenav from "@/components/sidenav";

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
        className={`${bodyFont.className} bg-gradient-to-b from-slate-50 to-slate-100 text-xl text-default antialiased mx-auto max-w-full max-h-full min-h-screen overflow-hidden mt-28 `}
      >
        <div className="px-4 pt-4 sm:pt-16 pb-24 sm:pb-36 sm:grid sm:grid-cols-[max-content,minmax(0,36rem)] sm:justify-center sm:gap-x-20">
          <div className="fixed sm:relative sm:block left-4 sm:left-0">
            <Sidenav />
          </div>
          <main className="sm:pl-0 mt-4">
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
