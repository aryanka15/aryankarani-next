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
    <Link href={`/gallery/${data.id}`}>
      <div
        className={`PicCard flex flex-col w-[320px] h-[240px] justify-center text-center`}
      >
        <div className={`flex flex-row justify-center relative`}>
          <Image
            className={"rounded-lg"}
            alt={data.description}
            src={data.picture}
            width={320}
            height={240}
          ></Image>
          <div className={"absolute bottom-0 w-full h-fit bg-white/40 p-1"}>
            <div className={"text-center"}>
              <h1
                className={
                  "px-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-center"
                }
              >
                {data.description}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
