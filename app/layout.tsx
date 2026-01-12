import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeryTargeted - Stop Marketing to Everyone",
  description: "Hyper-targeted digital ad campaigns that reach specific households showing early seller signals. For the price of a single postcard, reach the same home hundreds of times.",
  keywords: "real estate marketing, targeted advertising, programmatic ads, real estate agents",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
