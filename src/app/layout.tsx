"use client";
import Header from "@/global/components/Header";
import "./globals.css";
import Footer from "@/global/components/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-light font-ibm-plex-sans-arabic"
      >
        <Header />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
