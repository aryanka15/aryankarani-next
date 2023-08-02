"use client";
import {CldImage, getCldImageUrl} from "next-cloudinary";

export default function PhotoPage({params}: {params: { id: any; picture: any; title: any; description: any; camera: any; location: any; }}) {

    const url = getCldImageUrl({
        width: 2000,
        height: 2000,
        src: params.id,
        quality: 100,
        overlays: [
            {
                position: {
                    gravity: "south_east",
                    x: 0.02,
                    y: 0.02,
                },
                text: {
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: 30,
                    fontWeight: "regular",
                    text: "ARYAN KARANI"
                }
            }
        ]
    });

    return (
        <>
            <div className={"flex flex-col items-center mt-40"}>
                <div className={"w-full mx-10"}>
                    <CldImage preserveTransformations priority alt={params.description} src={url}></CldImage>
                </div>
            </div>
        </>
    )
}


