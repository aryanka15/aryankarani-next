"use client";

import { CldImage, getCldImageUrl } from "next-cloudinary";

export default function ClientImage(props: {
  imageData: {
    id: any;
    url: any;
    picture: any;
    width: any;
    height: any;
    title: any;
    description: any;
    camera: any;
    location: any;
  };
}) {
  const imageData = props.imageData;
  return (
    <div
      className={
        "flex justify-center w-fit mx-10 border-4 shadow-xl border-white/60 rounded-md"
      }
    >
      <CldImage
        priority
        format={"auto"}
        quality={100}
        overlays={[
          {
            position: {
              gravity: "south_east",
              x: 0.02,
              y: 0.02,
            },
            text: {
              color: "white",
              fontFamily: "Roboto",
              fontSize: 60,
              fontWeight: "regular",
              text: "ARYAN KARANI",
            },
          },
        ]}
        alt={imageData.description}
        sizes={"100vw"}
        src={imageData.id}
        width={imageData.width}
        height={imageData.height}
      ></CldImage>
    </div>
  );
}
