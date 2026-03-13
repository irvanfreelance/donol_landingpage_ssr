import DonationApp from "@/refs/DonationApp";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Aplikasi Donasi Online untuk Yayasan, Masjid, dan NGO",
  description:
    "Permudah donatur berdonasi melalui web-app donasi yang modern, aman, dan transparan dengan dukungan QRIS, Virtual Account, dan kalkulator zakat terintegrasi.",
  image: "/og/donation.png",
  keywords: [
    "aplikasi donasi online",
    "donasi yayasan online",
    "donasi masjid online",
    "kalkulator zakat online",
    "platform donasi digital",
  ],
});

export default function Page() {
  return <DonationApp />;
}

