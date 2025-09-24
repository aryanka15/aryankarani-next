import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aryan Karani",
};

export default function Home() {
  return (
    <>
      <div className="Home relative flex flex-col h-full overflow-clip bg-no-repeat justify-center items-center bg-cover bg-[url('/images/MajesticCPMobile.jpg')] md:bg-[url('/images/MajesticCP.jpg')]">
        {/* --- Dark Overlay --- */}
        {/* This layer sits on top of the background image but behind the text,
          ensuring the white text is always easy to read. */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* --- Content Container --- */}
        {/* All content is now in a z-10 container to sit above the overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-10 p-4">
          <div className="flex flex-row text-center items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-extrabold drop-shadow-lg">
              Develop. Create. Inspire.
            </h1>
          </div>

          <div className="flex flex-col items-center text-center text-white max-w-prose">
            <h1 className="text-2xl md:text-3xl drop-shadow-md">
              Hi! I&apos;m Aryan Karani. That message up there? I&apos;m not
              that cool-sounding in real life. My{" "}
              <a
                href="https://youtube.com/@aryankarani"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors duration-300"
              >
                YT channel
              </a>{" "}
              is a better representation of who I am.
            </h1>
          </div>

          <div>
            <Link href={"/kidwithacamera"}>
              <button
                aria-label={"Learn More"}
                className="
      text-xl text-center md:text-3xl text-white 
      p-3 rounded-2xl border-[0.5px]
      bg-white/20 backdrop-blur-md 
      hover:bg-white/30
      transition-all duration-300
      ring-1 ring-white/20 font-bold
    "
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
