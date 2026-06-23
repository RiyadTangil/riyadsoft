import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RiyadSoft | Shaping the Future of SaaS & Enterprise Solutions",
  description: "RiyadSoft is a premium custom software development company, building next-generation SaaS tools and sophisticated enterprise applications like Travel Hisab.",
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
