import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe Vision BR",
  description: "Sistema de visão computacional para segurança e monitoramento",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><mask id=%22segments%22><rect width=%22100%22 height=%22100%22 fill=%22white%22/><g fill=%22black%22><path d=%22M50 10 L60 30 L40 30 Z%22/><path d=%22M90 50 L70 40 L70 60 Z%22/><path d=%22M50 90 L40 70 L60 70 Z%22/><path d=%22M10 50 L30 60 L30 40 Z%22/><path d=%22M73 27 L63 37 L83 37 Z%22/><path d=%22M73 73 L83 63 L63 63 Z%22/><path d=%22M27 73 L37 63 L37 83 Z%22/><path d=%22M27 27 L37 37 L17 37 Z%22/></g></mask></defs><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23000%22 mask=%22url(%23segments)%22/><circle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%23fff%22/><circle cx=%2250%22 cy=%2250%22 r=%2216%22 fill=%22%234A90E2%22/><circle cx=%2250%22 cy=%2250%22 r=%228%22 fill=%22%23000%22/><circle cx=%2253%22 cy=%2246%22 r=%222%22 fill=%22%23fff%22/></svg>",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon baseado na imagem exata fornecida */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><mask id=%22segments%22><rect width=%22100%22 height=%22100%22 fill=%22white%22/><g fill=%22black%22><path d=%22M50 10 L60 30 L40 30 Z%22/><path d=%22M90 50 L70 40 L70 60 Z%22/><path d=%22M50 90 L40 70 L60 70 Z%22/><path d=%22M10 50 L30 60 L30 40 Z%22/><path d=%22M73 27 L63 37 L83 37 Z%22/><path d=%22M73 73 L83 63 L63 63 Z%22/><path d=%22M27 73 L37 63 L37 83 Z%22/><path d=%22M27 27 L37 37 L17 37 Z%22/></g></mask></defs><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23000%22 mask=%22url(%23segments)%22/><circle cx=%2250%22 cy=%2250%22 r=%2220%22 fill=%22%23fff%22/><circle cx=%2250%22 cy=%2250%22 r=%2216%22 fill=%22%234A90E2%22/><circle cx=%2250%22 cy=%2250%22 r=%228%22 fill=%22%23000%22/><circle cx=%2253%22 cy=%2246%22 r=%222%22 fill=%22%23fff%22/></svg>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}