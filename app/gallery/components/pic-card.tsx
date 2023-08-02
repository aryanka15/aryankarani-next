"use client";

import PicData from "../PicData";
import Link from "next/link";
import {CldImage, getCldImageUrl} from 'next-cloudinary';

export default function PicCard(props: { data: { id: any; picture: any; title: any; description: any; camera: any; location: any; } }) {
    const data = props.data;
    const image = data.id;
    const url = getCldImageUrl({
        width: 640,
        height: 480,
        src: image,
        quality: 70,
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
                    fontSize: 20,
                    fontWeight: "regular",
                    text: "ARYAN KARANI"
                }
            }
        ]
    });

    return (
        <Link href={`/${data.id}`}>
            <div className={`PicCard flex flex-col justify-center text-center`}>
                <div className={`flex flex-row justify-center relative`}>
                    <CldImage preserveTransformations style={{ transform: "translate3d(0, 0, 0)" }} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className={"rounded-lg"} alt={data.description} src={url}></CldImage>
                    <div className={"absolute bottom-0 w-full h-fit bg-white/80 p-1"}>
                        <div className={"text-center"}>
                            <h1 className={"px-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-center"}>{data.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}