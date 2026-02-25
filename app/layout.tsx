import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Likvidnost App",
  description: "Minimalen Next.js + Prisma placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body>{children}</body>
    </html>
  );
}
