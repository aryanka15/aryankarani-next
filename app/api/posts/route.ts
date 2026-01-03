import { getPosts } from "../../../lib/fetch";
import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

const getCachedPosts = unstable_cache(getPosts, ["posts"], { revalidate: 60 });

export async function GET() {
  console.log("API /api/posts called at", new Date().toISOString());
  try {
    const posts = await getCachedPosts();
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
