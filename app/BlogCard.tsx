"use client";

import NextImage from "next/image";

import BlogData from "./BlogData";
export default function BlogCard(props: { data: BlogData }) {
  const data = props.data;

  const redirectToBlog = () => {
    window.open(`/blog/${data.id}`, "_blank");
  };

  return (
    <div className="BlogCard border-4 border-black">
      <div>
        <NextImage
          src={data.thumbnail}
          width={1280}
          height={720}
          className={"aspect-video object-cover border-b-4 border-black"}
          alt="video thumbnail"
        />
      </div>
      <div className="bg-neutral-400">
        <h1 className="px-1 py-6 text-sm md:text-lg xl:text-xl font-bold">
          {data.title}
        </h1>
      </div>
      <div className="">
        <button
          onClick={redirectToBlog}
          className="w-full py-2 border-t-4 border-black bg-red-500"
        >
          <a href={`/blog/${data.id}`} target="_blank">
            Read
          </a>
        </button>
      </div>
    </div>
  );
}
