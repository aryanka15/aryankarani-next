import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Blog() {
  return (
    <>
      <div className="Blog flex flex-col h-full bg-cover text-center bg-neutral-700">
        <div
          className={`flex flex-row text-center justify-center text-6xl mt-36 mb-96 ${bungee.className}`}
        >
          <h1 className={"blog-title-stroke text-neutral-900"}>Aryan Karani -</h1>
          <h1 className={"blog-subtitle-stroke text-red-500"}>&nbsp;Snapshots</h1>
        </div>
      </div>
    </>
  );
}
