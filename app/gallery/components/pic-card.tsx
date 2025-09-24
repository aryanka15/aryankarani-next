"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function PicCard(props: {
  data: {
    id: any;
    picture: any;
    width: any;
    height: any;
    title: any;
    description: any;
    camera: any;
    location: any;
  };
}) {
  const data = props.data;
  const image = data.id;
  console.log("Image: ", image);
  // const url = getCldImageUrl({
  //     width: "auto",
  //     src: image,
  //     overlays: [
  //         {
  //             position: {
  //                 gravity: "south_east",
  //                 x: 0.02,
  //                 y: 0.02,
  //             },
  //             text: {
  //                 color: "white",
  //                 fontFamily: "Roboto",
  //                 fontSize: 20,
  //                 fontWeight: "regular",
  //                 text: "ARYAN KARANI"
  //             }
  //         }
  //     ]
  // });

  return (
    <Link
      href={{
        pathname: `/gallery/${image.replace("/", "-")}`,
      }}
    >
      <div
        className="
          PicCard group relative rounded-2xl shadow-lg hover:shadow-2xl 
          transition-all duration-300 ease-in-out overflow-hidden cursor-pointer
        "
      >
        {/* --- Cloudinary Image --- */}
        {/* This image now fills the card and zooms slightly on hover */}
        <CldImage
          className="transition-transform duration-300 group-hover:scale-110"
          quality={"60"}
          format={"auto"}
          sizes={"(min-width: 768px) 50vw, (min-width: 1024px) 33vw, 100vw"}
          rawTransformations={["ar_1.5,c_crop"]} // Keeps the 3:2 aspect ratio
          overlays={[
            {
              position: { gravity: "south_east", x: 0.02, y: 0.02 },
              text: {
                color: "white",
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "regular",
                text: "ARYAN KARANI",
              },
            },
          ]}
          alt={data.description}
          src={image}
          width={data.width}
          height={data.height}
        />

        {/* --- Gradient Overlay for Text Readability --- */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

        {/* --- Title Container --- */}
        {/* Positioned at the bottom, on top of the gradient */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h1 className="text-lg font-bold text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
            {data.title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
