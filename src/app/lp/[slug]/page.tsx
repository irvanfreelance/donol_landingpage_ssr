import { getLandingContent } from "@/seo/dynamicSEO";
import type { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await getLandingContent(params.slug);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const data = await getLandingContent(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-slate-600 whitespace-pre-line">{data.content}</p>
    </main>
  );
}

