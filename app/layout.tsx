import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash Vaishnav — Portfolio",
  description:
    "PM2 at Microsoft. I build AI tools, Chrome extensions, and full-stack apps. Here's a showcase of my best projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased bg-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
