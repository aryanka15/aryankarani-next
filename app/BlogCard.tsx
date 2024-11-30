"use client";

import NextImage from "next/image";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function BlogCard(props: { data: any; main: boolean }) {
  const data = props.data;
  let fontSize = "lg";
  let background = "blue";
  if (props.main) {
    fontSize = "xl";
    background = "red";
  }

  function truncate(str: string, maxLength: number) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  }

  return (
    <div className="BlogCard border-4 border-black">
      <div>
        {/* <NextImage
          src={data.thumbnail}
          width={1280}
          height={720}
          className={"aspect-video object-cover border-b-4 border-black"}
          alt="video thumbnail"
        /> */}
      </div>
      <div className="flex flex-col justify-center h-[108px] md:h-[240px] bg-neutral-400">
        <h1
          className={`px-3 py-6 text-lg md:text-4xl text-${fontSize} font-bold`}
        >
          {truncate(data.title, 40)}
        </h1>
      </div>
      <div className="">
        <Link href={{ pathname: `/blog/${data.slug.current}` }}>
          <button
            className={`w-full py-2 border-t-4 font-bold border-black bg-${background}-500 ${rubik.className}`}
          >
            READ
          </button>
        </Link>
      </div>
    </div>
  );
}
