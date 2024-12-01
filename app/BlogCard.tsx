"use client";

import NextImage from "next/image";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { Rubik } from "next/font/google";
import { useEffect, useState } from "react";

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
  const [windowWidth, setWindowWidth] = useState(0);
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    // Function to update screen width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial screen width
    updateWindowWidth();

    // Add resize event listener
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    // Determine the max characters based on screen width

    let maxCharacters = 0;
    if (windowWidth > 1200) {
      maxCharacters = 90;
    } else if (windowWidth > 900) {
      maxCharacters = 80;
    } else if (windowWidth > 768) {
      maxCharacters = 70;
    } else {
      maxCharacters = 60;
    }
    setTruncatedText(truncate(data.title, maxCharacters));
  }, [data.title, windowWidth]);

  function truncate(str: string, maxLength: number) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  }

  const date = new Date(data.publishedAt);

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return (
    <Link href={{ pathname: `/blog/${data.slug.current}` }}>
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
        <div className="flex flex-col justify-center h-[150px] md:h-[240px] bg-neutral-400">
          <h1
            className={`px-3 md:px-4 py-6 md:py-3 text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-4xl text-${fontSize} font-bold`}
          >
            {truncatedText}
          </h1>
        </div>
        <div className="">
          <button
            className={`flex flex-row text-sm md:text-lg justify-center w-full py-2 px-3 border-t-4 font-bold border-black bg-${background}-500 ${rubik.className}`}
          >
            <div>{formattedDate}</div>
          </button>
        </div>
      </div>
    </Link>
  );
}
