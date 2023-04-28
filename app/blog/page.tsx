"use client";

import { Bungee } from "next/font/google";
import BlogCard from "../BlogCard";
import BlogData from "../BlogData";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Blog() {

  

  return (
    <div className={"w-screen bg-neutral-700"}>
      <div className={`Blog flex flex-col h-full text-center items-center ${bungee.className}   `}>
        <div
          className={`flex flex-col md:flex-row text-center justify-center text-4xl md:text-6xl mt-36 mb-10 ${bungee.className}`}
        >
          <h1 className={"blog-title-stroke text-neutral-900"}>
            Aryan Karani's
          </h1>
          <h1 className={"blog-subtitle-stroke text-red-500"}>
            &nbsp;Snapshots
          </h1>
        </div>
        <div className="BlogMain grid grid-cols-1 md:grid-cols-3 auto-rows-auto md:grid-rows-1 gap-x-5 gap-y-5 mx-5 mb-10">
            {/*Blog Data-3 latest posts*/}
        </div>
        <div className="BlogPosts grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-2 gap-x-5 gap-y-5 mx-5 mb-10">
          {/*Blog data-10*/}
        </div>
        <button className={`mb-10 p-3 px-10 text-2xl rounded-xl border-black border-4 bg-blue-500 w-fit hover:bg-red-500 md:focus:bg-red-500 focus:bg-blue-700 transition`}>All Articles</button>
      </div>
    </div>
  );
}
