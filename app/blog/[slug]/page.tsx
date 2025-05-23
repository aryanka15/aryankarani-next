import { getPostData, getPostParams } from "../../../lib/fetch";
import { Rubik } from "next/font/google";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SanityImage } from "sanity-image";

const rubik = Rubik({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const ImageComponent = ({ value }: any) => {
  return (
    <SanityImage
      id={value.asset._ref}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      alt={value.alt || " "}
      width={1000}
      height={1000}
      mode="contain"
      className="self-center rounded-lg shadow-2xl"
    ></SanityImage>
  );
};

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
        <div className="flex-col blog-body text-xl gap-y-6 md:text-2xl flex text-left align-center">
          <PortableText
            components={{
              types: {
                image: ImageComponent,
              },
            }}
            value={body_components}
          ></PortableText>
        </div>
      </div>
    </>
  );
}
