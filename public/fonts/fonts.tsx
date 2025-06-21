import { David_Libre, Xanh_Mono } from "next/font/google";

export const bodyFont = David_Libre({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  display: 'swap',
  preload: true
});

export const emphasisFont = Xanh_Mono({ 
  subsets: ["latin"], 
  weight: ["400"],
  style: ["normal", "italic"],
  display: 'swap',
  preload: true
});