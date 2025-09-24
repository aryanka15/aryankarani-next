import { getPicIds } from "../../utils/get-pic-ids";
import InfoCard from "../components/info-card";
import { IoLocationSharp, IoCamera } from "react-icons/io5";
import ClientImage from "../components/client-image";
import { getCldImageUrl } from "next-cloudinary";
import cloudinary from "../../utils/cloudinary";

async function getData(id: string) {
  const data = await getPicIds();
  let imageData = {
    id: "image not found",
    url: "",
    picture: "",
    width: "",
    height: "",
    title: "",
    description: "",
    camera: "",
    location: "",
  };
  await data.forEach((element: any) => {
    if (element.public_id === id) {
      imageData = {
        id: element.public_id,
        url: element.secure_url,
        picture: element.url,
        width: element.width,
        height: element.height,
        title: element.context.caption != null ? element.context.caption : "",
        description: element.context.alt != null ? element.context.alt : "",
        camera: element.context.camera != null ? element.context.camera : "",
        location:
          element.context.location != null ? element.context.location : "",
      };
    }
  });
  return imageData;
}

type Params = Promise<{ id: any }>;

export default async function PhotoPage({ params }: { params: Params }) {
  let id = (await params).id.replace("-", "/");
  let imageData: {
    id: any;
    url: any;
    picture: any;
    width: any;
    height: any;
    title: any;
    description: any;
    camera: any;
    location: any;
  } = await getData(id);

  if (imageData.id == "image not found") {
    return;
  }

  let url = getCldImageUrl({
    src: imageData.id,
    width: "200",
    effects: [
      {
        blur: "1000",
      },
      {
        colorize: "40,co_white",
      },
    ],
  });

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`IdPage bg-cover bg-no-repeat flex flex-col w-screen justify-center items-center pt-36 pb-20 space-y-10`}
    >
      {/* --- Blurred Background Image (Scaled-Up) --- */}
      {/* This CldImage is for the background, heavily blurred and scaled */}
      {/* --- Dark Overlay over Blurred Background --- */}
      {/* Ensures text readability and darkens the background subtly */}
      {/* <div className="absolute inset-0 z-10"></div> */}

      {/* --- Content Wrapper --- */}
      {/* All actual content sits on top of the blurred background and overlay */}
      <div className="relative z-20 w-full max-w-5xl flex flex-col items-center gap-y-8 sm:gap-y-12 text-white">
        {/* --- Title --- */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center max-w-3xl drop-shadow-lg px-10">
          {imageData.title}
        </h1>

        {/* This is your existing image component (the sharp, main one) */}
        <div className="w-screen px-10 md:px-36">
          <ClientImage imageData={imageData} />
        </div>

        {/* --- Info Cards Section --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 px-10">
          {/* Description Card */}
          <InfoCard heading={"Description"} text={imageData.description} />

          {/* --- Details Card (Location & Camera) --- */}
          <div className="flex flex-col gap-y-4 p-6 rounded-2xl backdrop-blur-lg border bg-neutral-400/40  border-neutral-200 shadow-xl">
            <div className="flex items-center gap-x-3 text-lg">
              <IoLocationSharp size={22} className="text-white" />
              <span className="font-bold">{imageData.location}</span>
            </div>
            <div className="flex items-center gap-x-3 text-lg">
              <IoCamera size={22} className="text-white" />
              <span className="font-bold">{imageData.camera}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
