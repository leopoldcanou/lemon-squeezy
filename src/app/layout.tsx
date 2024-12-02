import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const circularProBook = localFont({
  src: "./fonts/CircularPro-Book.woff2",
  variable: "--font-circular-pro-book",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Payments, tax & subscriptions for software companies • Lemon Squeezy",
  description:
    "Sell digital products and SaaS software the easy peasy way with Lemon Squeezy. As your merchant of record, we handle the tax compliance burden so you can focus on more revenue and less headache.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${circularProBook.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
