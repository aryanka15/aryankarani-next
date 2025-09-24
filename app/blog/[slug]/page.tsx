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
      width={500}
      height={500}
      mode="contain"
      className="self-center rounded-lg shadow-2xl md:w-[800px] w-[300px] h-auto object-cover"
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
    <div
      className={`w-screen min-h-screen bg-neutral-700 text-neutral-200 flex flex-col items-center pt-28 md:pt-40 p-4 md:p-8 ${rubik.className}`}
    >
      <div className="flex flex-col text-center items-center w-full max-w-4xl">
        <div className="text-4xl md:text-6xl font-extrabold text-white px-4">
          {post.title}
        </div>
        <div className="text-lg md:text-2xl text-red-500 font-bold mt-2">
          {post.authorName}
        </div>
        <div className="text-base md:text-lg text-neutral-400 font-medium mb-10 md:mb-16">
          {formattedDate}
        </div>
      </div>

      <div className="blog-body w-full max-w-4xl text-lg md:text-xl leading-relaxed flex flex-col gap-y-8">
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
  );
}
