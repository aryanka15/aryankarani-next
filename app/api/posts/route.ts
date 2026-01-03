import { getPosts } from "../../../lib/fetch";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("API /api/posts called at", new Date().toISOString());
  try {
    const posts = await getPosts();
    console.log("Posts returned (possibly from cache):", posts.length, "items");
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
