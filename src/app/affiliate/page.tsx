import AffiliateApp from "@/refs/AffiliateApp";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Portal Fundraiser & Affiliate DonasiOnline",
  description:
    "Bangun jaringan fundraiser dan affiliate yang bisa mempromosikan kampanye donasi lembaga Anda dengan link unik, dashboard performa, dan komisi yang transparan.",
  image: "/og/affiliate.png",
  keywords: [
    "affiliate donasi online",
    "portal fundraiser yayasan",
    "komisi fundraiser donasi",
    "program affiliate NGO",
    "tautan referral donasi",
  ],
});

export default function Page() {
  return <AffiliateApp />;
}

