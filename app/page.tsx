import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="Home flex flex-col h-full overflow-clip bg-no-repeat justify-center items-center space-y-10 bg-cover bg-[url('/images/MajesticCPMobile.jpg')] md:bg-[url('/images/MajesticCP.jpg')]">
        <div className="flex flex-row text-center items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white">
            Develop. Create. Inspire.
          </h1>
        </div>
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-2xl px-5 md:text-3xl">
            Hi! {"I'm"} Aryan Karani. That message up there? {"I'm"} not that
            cool-sounding in real life. My{" "}
            <a
              href="https://youtube.com/@aryankarani"
              className="underline hover:text-red-500"
            >
              YT channel
            </a>{" "}
            is a better representation of who I am.
          </h1>
        </div>
        <div>
          <Link href={"/kidwithacamera"}>
            <button aria-label={"Learn More"} className="text-xl text-center md:text-3xl text-white border-4 p-3 rounded-2xl bg-white/10 hover:bg-white/40">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
