type GenerateMetadataParams = {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
};

export function generateMetadata({
  title,
  description,
  image,
  keywords,
}: GenerateMetadataParams) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}


