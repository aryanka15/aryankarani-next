import { getPostData, getPostParams } from "../../../lib/fetch";
import { Rubik } from "next/font/google";
import { PortableText } from "@portabletext/react";

const rubik = Rubik({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = (await getPostData(await params)) as any;
  const body_components = post.body;
  const date = new Date(post.publishedAt);

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return (
    <>
      <div
        className={`flex bg-neutral-800 text-neutral-300 w-screen h-100 gap-y-5 md:gap-y-10 flex-col items-center p-10 md:p-20 pt-28 md:pt-40 ${rubik.className}`}
      >
        <div className="text-4xl text-left md:text-6xl font-[700]  md:w-auto">
          {post.title}
          <div className="text-xl md:text-3xl text-neutral-500 font-[500]">
            {post.authorName}
            {" | "}
            {formattedDate}
          </div>
        </div>
        <div className="flex-col gap-y-6 flex text-xl text-left md:text-3xl font-normal align-center">
          <PortableText value={body_components}></PortableText>
        </div>
      </div>
    </>
  );
}
