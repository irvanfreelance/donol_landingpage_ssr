import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DonasiOnline Platform",
  description:
    "Digital ecosystem for NGOs, donation infrastructure and partnerships",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

