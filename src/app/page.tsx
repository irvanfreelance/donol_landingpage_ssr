import LandingPage from "@/refs/LandingPage";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Platform Donasi Online White-Label untuk NGO & Masjid",
  description:
    "Bangun platform donasi online atas nama lembaga Anda sendiri, tanpa potongan persentase, dengan ekosistem aplikasi donatur, affiliate, dan dashboard admin yang lengkap.",
  image: "/og/landing.png",
  keywords: [
    "platform donasi online",
    "white label donasi",
    "aplikasi donasi yayasan",
    "donasi online masjid",
    "software fundraising NGO",
  ],
});

export default function Home() {
  return <LandingPage />;
}

