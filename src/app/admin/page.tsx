import type { Metadata } from "next";
import AdminApp from "@/refs/AdminApp";

export const metadata: Metadata = {
  title: "Dashboard Admin DonasiOnline",
  description:
    "Pantau transaksi donasi, kelola kampanye, metode pembayaran, dan database donatur dalam satu dashboard admin yang modern dan terpusat.",
  openGraph: {
    images: ["/og/admin.png"],
  },
  keywords: [
    "dashboard admin donasi",
    "CRM donatur yayasan",
    "manajemen kampanye donasi",
    "laporan donasi online",
  ],
  robots: "noindex, nofollow",
};

export default function Page() {
  return <AdminApp />;
}

