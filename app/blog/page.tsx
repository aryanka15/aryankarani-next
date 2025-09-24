import { Rubik } from "next/font/google";
import Posts from "./posts";
import { getPosts } from "../../lib/fetch";
import { Metadata } from "next";

const rubik = Rubik({
  weight: ["400", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Karani - Blog",
};

export const dynamic = "force-dynamic";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className={"w-screen min-h-screen bg-neutral-600"}>
      <div
        className={`Blog flex flex-col h-full text-center items-center ${rubik.className}`}
      >
        <div
          className={`flex flex-col lg:flex-row text-center justify-center mt-24 md:mt-36 mb-10 text-5xl md:text-7xl font-bold`}
        >
          <h1 className={"text-neutral-900"}>ARYAN KARANI'S</h1>
          <h1 className={"text-red-600"}>&nbsp;SNAPSHOTS</h1>
        </div>
        <div className="BlogPosts w-full mx-auto max-w-7xl px-4 mb-10">
          <Posts posts={posts}></Posts>
        </div>
        {/* Modern styled button */}
        {/* <Link
      className={`
        mb-10 p-3 px-10 text-2xl rounded-xl border-none font-bold text-white
        bg-red-600 hover:bg-red-700 transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
      `}
    >
      All Articles
    </Link> */}
      </div>
    </div>
  );
}
