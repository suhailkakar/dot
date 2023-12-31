import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";

export const metadata: Metadata = {
  title: "Dot - Suhail Kakar",
};

const lora = Lora({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
