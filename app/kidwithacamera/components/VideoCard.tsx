import NextImage from "next/image";
import VideoData from "../VideoData";

export default function VideoCard(props: { data: VideoData }) {
  const data = props.data;

  const redirectToVideo = () => {
    window.open(`https://youtube.com/watch?v=${data.id}`, "_blank");
  };

  return (
    <a
      href={`https://youtube.com/watch?v=${data.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        VideoCard group relative flex flex-col h-64 md:h-72 rounded-2xl
        shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer
      "
    >
      {/* --- Thumbnail as Background Image --- */}
      <NextImage
        src={data.thumbnail}
        layout="fill"
        objectFit="cover"
        className="absolute z-0 transition-transform duration-300 group-hover:scale-110"
        alt="video thumbnail"
      />

      {/* --- Frosted Glass Layer --- */}
      <div className="absolute inset-0 bg-neutral-700/30 backdrop-blur-lg z-10"></div>

      {/* --- Content Container --- */}
      <div className="relative z-20 flex flex-col h-full text-white">
        {/* Title container - grows to push the button to the bottom */}
        <div className="flex flex-grow flex-col justify-center items-center text-center p-5 bg-gradient-to-t from-black/50 via-transparent to-transparent">
          <h1
            // ADDED line-clamp-4 here to truncate long titles
            className="text-xl md:text-3xl font-extrabold leading-tight line-clamp-4 w-full"
          >
            {data.title}
          </h1>
        </div>

        {/* --- "Watch Now" Footer Button Bar --- */}
        <div
          className="
            w-full mt-auto py-3 text-center
            bg-red-600/90 font-bold text-lg
            transition-all duration-300 group-hover:bg-red-700/95
          "
        >
          Watch Now
        </div>
      </div>
    </a>
  );
}
