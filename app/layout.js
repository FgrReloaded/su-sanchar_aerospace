import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


import Head from "next/head";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import "./globals.css";
import "./style.css";

export const metadata = {
  title: "Home | Su-Sanchar",
  description: "We are aerospace company specializing in Defense",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
