import Marketing from "@/refs/Marketing";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Program Mitra Edukasi DonasiOnline (Marketing Executive)",
  description:
    "Gabung sebagai Mitra Edukasi DonasiOnline dan bantu yayasan serta masjid go-digital, sambil membangun penghasilan pasif dari langganan platform donasi mereka.",
  image: "/og/marketing.png",
  keywords: [
    "mitra edukasi donasi online",
    "marketing executive donasi",
    "peluang usaha B2B NGO",
    "pasif income dari software",
    "program kemitraan DonasiOnline",
  ],
});

export default function Page() {
  return <Marketing />;
}

