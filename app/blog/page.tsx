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
    <div className={"w-screen h-100 bg-neutral-700"}>
      <div
        className={`Blog flex flex-col h-full text-center items-center ${rubik.className}   `}
      >
        <div
          className={`flex flex-col lg:flex-row text-center justify-center text-5xl md:text-7xl mt-24 md:mt-36 mb-10 ${rubik.className}`}
        >
          <h1 className={"blog-title-stroke font-[900] text-neutral-900"}>
            ARYAN KARANI&#39;S
          </h1>
          <h1 className={"blog-subtitle-stroke font-[900] text-red-500"}>
            &nbsp;SNAPSHOTS
          </h1>
        </div>
        <div className="BlogPosts mx-5 lg:mx-32 mb-10">
          <Posts posts={posts}></Posts>
        </div>
        {/* <Link
          className={`mb-10 p-3 px-10 text-2xl rounded-xl border-black border-4 bg-blue-500 w-fit hover:bg-red-500 md:focus:bg-red-500 focus:bg-blue-700 transition`}
        >
          All Articles
        </Link> */}
      </div>
    </div>
  );
}
