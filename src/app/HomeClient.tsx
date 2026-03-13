"use client";

import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import("@/refs/LandingPage"), {
  ssr: false,
});

export default function HomeClient() {
  return <LandingPage />;
}
