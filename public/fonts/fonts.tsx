import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const bodyFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
export const titleFont = localFont({ src: "title.otf", weight: "700" });
export const regards = localFont({ src: "regards.ttf" });