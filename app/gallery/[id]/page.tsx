import { getPicIds } from "../../utils/get-pic-ids";
import InfoCard from "../components/info-card";
import { IoLocationSharp } from "react-icons/io5";
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

export default async function PhotoPage({ params }: { params: { id: any } }) {
  let id = params.id.replace("-", "/");
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
        blur: 1000,
      },
      {
        colorize: "40,co_white",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
        className={`IdPage bg-cover bg-no-repeat flex flex-col w-screen justify-center items-center pt-36 pb-20 space-y-10`}
      >
        <h1
          className={
            "text-5xl md:text-6xl mx-5 w-screen text-center p-5 font-extrabold text-black/95"
          }
        >
          {imageData.title}
        </h1>
        <ClientImage imageData={imageData}></ClientImage>
        <div
          className={
            "flex flex-col space-y-5 md:flex-row w-[80%] md:w-full mx-10 items-center justify-evenly mb-20"
          }
        >
          <InfoCard
            heading={"Description"}
            text={imageData.description}
          ></InfoCard>
          <div
            className={
              "flex border-2 border-white/60 p-5 shadow-2xl bg-white/40 backdrop-blur-2xl flex-col w-full md:w-fit justify-self-stretch items-start text-start justify-start bg-neutral-200 rounded-lg"
            }
          >
            <div
              className={"flex flex-row items-center justify-center text-lg"}
            >
              <IoLocationSharp />: {imageData.location}
            </div>
            <h1 className={"text-lg mt-2"}>{imageData.camera}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
