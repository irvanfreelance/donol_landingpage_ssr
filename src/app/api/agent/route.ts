import { NextRequest, NextResponse } from "next/server";
import { seoAgent } from "@/agents/seoAgent";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const keyword = typeof body.keyword === "string" ? body.keyword : "";

  const result = await seoAgent(keyword);

  return NextResponse.json(result);
}

