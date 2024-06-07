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
        className={`${inter.className} bg-gradient-to-b from-rose-50 to-rose-100 text-xl text-default antialiased mx-auto max-w-full h-screen mt-10`}
      >
        <div className="mt-20">
          <div className="fixed left-[22%]">
          <Sidenav/>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="">{children}</div>
        </div>
        </div>
        
      </body>
    </html>
  );
}
