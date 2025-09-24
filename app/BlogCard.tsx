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
      <div className="BlogCard relative flex flex-col mx-auto rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
        {/* Frosted glass background effect */}
        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md rounded-xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div>
            {/* <NextImage
              src={data.thumbnail}
              width={1280}
              height={720}
              className={"aspect-video object-cover rounded-t-xl"}
              alt="blog thumbnail"
            /> */}
          </div>
          <div className="flex flex-col flex-grow justify-center min-h-[150px] md:min-h-[240px] px-3 md:px-4">
            <h1
              className={`py-3 md:py-3 text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-4xl text-white font-bold`}
            >
              {truncatedText}
            </h1>
          </div>
          <div className="mt-auto">
            <button
              className={`
            w-full py-3 px-3 rounded-b-xl
            bg-gradient-to-br from-blue-600 to-blue-800 text-white
            font-bold text-lg
            shadow-md hover:shadow-lg focus:shadow-xl
            hover:from-red-500 hover:to-red-700
            transition-all duration-300 ease-in-out
            relative overflow-hidden
            before:content-[''] before:absolute before:inset-0 before:rounded-b-xl
            before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
            after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/0 after:via-white/20 after:to-white/0 after:opacity-0
            after:hover:opacity-100 after:transition-opacity after:duration-300 after:rounded-b-xl
          `}
            >
              <div>{formattedDate}</div>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
