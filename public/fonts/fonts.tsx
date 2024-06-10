import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const bodyFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
// export const titleFont = localFont({ src: "Caudex-Bold.ttf", weight: "700"
// }); 
// title font is specified in globals.css, so it can be referenced using
// font-title in tailwind
export const regards = localFont({ src: "regards.ttf" });