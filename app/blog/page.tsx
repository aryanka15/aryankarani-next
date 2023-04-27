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
    <div className={"bg-neutral-700"}>
      <div className="Blog flex flex-col h-full text-center">
        <div
          className={`flex flex-row text-center justify-center text-6xl mt-36 mb-10 ${bungee.className}`}
        >
          <h1 className={"blog-title-stroke text-neutral-900"}>Aryan Karani -</h1>
          <h1 className={"blog-subtitle-stroke text-red-500"}>&nbsp;Snapshots</h1>
        </div>
        <div className="BlogMain grid grid-cols-3 grid-rows-1 gap-x-5 gap-y-5 mx-5 mb-10">
          <BlogCard data={new BlogData(0, 'The Greatest AI In The World - NoGPT', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
          <BlogCard data={new BlogData(1, 'sdashdasoud', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
          <BlogCard data={new BlogData(2, 'sdashdasoud', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
          <BlogCard data={new BlogData(2, 'sdashdasoud', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
          <BlogCard data={new BlogData(2, 'sdashdasoud', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
          <BlogCard data={new BlogData(2, 'sdashdasoud', '/images/MajesticCP.jpg', 'asgduasuhdouas', 'sahdisahdosah')}></BlogCard>
        </div>
      </div>
    </div>
  );
}
