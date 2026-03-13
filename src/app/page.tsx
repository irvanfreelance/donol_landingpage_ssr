"use client";

import dynamic from 'next/dynamic';
import { generateMetadata } from "@/seo/metadata";

const LandingPage = dynamic(() => import("@/refs/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return <LandingPage />;
}

