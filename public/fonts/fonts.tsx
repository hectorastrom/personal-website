import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
export const title = localFont({ src: "title.otf", weight: "700" });
export const regards = localFont({ src: "regards.ttf" });