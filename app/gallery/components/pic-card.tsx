"use client";

import Link from "next/link";
import {CldImage, getCldImageUrl} from 'next-cloudinary';

export default function PicCard(props: {
    index: number,
    data: { id: any; picture: any; width: any; height: any; title: any; description: any; camera: any; location: any; }
}) {
    const data = props.data;
    const index = props.index;
    const image = data.id;
    console.log("Image: ", image)
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
        <Link href={{
            pathname: `/gallery/${image.replace('/', '-')}`,
        }}>
            <div className={`PicCard flex flex-col justify-center text-center`}>
                <div className={`flex flex-row justify-center relative`}>
                    <CldImage quality={"60"} format={"auto"} sizes={
                        "(min-width: 768px) 50vw, (min-width: 1024px) 33vw, 100vw"
                    } overlays={
                        [
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
                    } className={"rounded-lg"} alt={data.description} src={image} width={data.width}
                              height={data.height}></CldImage>
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