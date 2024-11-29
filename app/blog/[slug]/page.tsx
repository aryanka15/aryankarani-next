import { getPostData, getPostParams } from "../../../lib/fetch";
import Post from "./post";

export async function generateStaticParams() {
  const posts = await getPostParams();
  return posts;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = (await getPostData(await params)) as any;
  return (
    <>
      <div className="flex w-screen h-screen flex-col justify-center align-center text-3xl">
        <Post post={post}></Post>
      </div>
    </>
  );
}
