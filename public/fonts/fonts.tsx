import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const bodyFont = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
  preload: true
});

export const titleFont = localFont({ 
  src: "gochihand.ttf",
  display: 'swap',
  preload: true
});