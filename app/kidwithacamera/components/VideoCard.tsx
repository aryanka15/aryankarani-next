import NextImage from "next/image";
import VideoData from "../VideoData";

export default function VideoCard(props: { data: VideoData }) {
  const data = props.data;

  const redirectToVideo = () => {
    window.open(`https://youtube.com/watch?v=${data.id}`, "_blank");
  };

  return (
    <div className="VideoCard flex flex-col mx-auto p-5 rounded-lg justify-center text-center bg-neutral-100 border-red-500 border-4">
      <div>
        <NextImage
          src={data.thumbnail}
          width={640}
          height={480}
          className={"aspect-video object-cover"}
          alt="video thumbnail"
        />
      </div>
      <div className="mx-1 my-1">
        <h1 className="text-sm md:text-lg xl:text-2xl font-bold">
          {data.title}
        </h1>
      </div>
      <div className="mx-1">
        <button
          onClick={redirectToVideo}
          className="w-full py-2 border-2 border-black bg-red-500"
        >
          <a href={`https://youtube.com/watch?v=${data.id}`} target="_blank">
            Watch
          </a>
        </button>
      </div>
    </div>
  );
}
