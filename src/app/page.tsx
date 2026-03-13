import { generateMetadata } from "@/seo/metadata";
import HomeClient from "./HomeClient";

export const metadata = generateMetadata({
  title: "Aplikasi DonasiOnline - Platform Donasi Modern & Terpercaya",
  description:
    "Solusi digital terlengkap untuk penggalangan dana yayasan, masjid, dan NGO. Kelola donasi, zakat, mudhohi qurban, dan fundraiser dalam satu platform SSR yang cepat dan aman.",
  image: "/og/landing.png",
  keywords: [
    "aplikasi donasi terbaik",
    "software yayasan",
    "portal donasi masjid",
    "sistem informasi NGO",
    "donasi online indonesia",
  ],
});

export default function Home() {
  return <HomeClient />;
}

