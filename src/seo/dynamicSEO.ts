import { seoAgent } from "@/agents/seoAgent";

export async function getLandingContent(slug: string) {
  const keyword = slug.replace(/-/g, " ");
  const data = await seoAgent(keyword);

  return {
    title: data.title,
    description: data.description,
    content: data.content,
    image: "/og/default.png",
  };
}

