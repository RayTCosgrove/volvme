import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "VOLVME™ - Where Ancient Wisdom Meets Modern Code",
  description: "A fusion of classical philosophy and cutting-edge technology. Experience the intersection of hacker culture and Greco-Roman wisdom.",
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
        {children}
      </body>
    </html>
  );
}
