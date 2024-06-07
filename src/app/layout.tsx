import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../../public/fonts/fonts";
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
        className={`${inter.className} bg-gradient-to-b from-rose-50 to-rose-100 text-zinc-900 antialiased mx-auto max-w-full h-screen mt-10`}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="flex-none"><Sidenav /></div>
          <div className="w-1/12 md:w-20"></div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
