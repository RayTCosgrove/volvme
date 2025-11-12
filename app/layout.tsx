import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { DevToolsErrorSuppressor } from "@/components/DevToolsErrorSuppressor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rvstica = localFont({
  src: "../public/fonts/RVSTICA.ttf",
  variable: "--font-rvstica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLVME",
  description: "VOLVME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rvstica.variable} antialiased`}
      >
        <DevToolsErrorSuppressor />
        {children}
      </body>
    </html>
  );
}
