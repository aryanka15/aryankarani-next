import {getPicIds} from "../../utils/get-pic-ids";
import InfoCard from "../components/info-card";
import {IoLocationSharp} from "react-icons/io5";
import ClientImage from "../components/client-image";

async function getData(id: string) {
    const data = await getPicIds();
    let imageData = {id: "image not found", picture: "", width: "", height: "", title: "", description: "", camera: "", location: ""}
    await data.forEach((element: any) => {
        if (element.public_id === id) {
            imageData = {
                id: element.public_id,
                picture: element.url,
                width: element.width,
                height: element.height,
                title: element.context.caption != null ? element.context.caption: "",
                description: element.context.alt != null ? element.context.alt: "",
                camera: element.context.camera != null ? element.context.camera: "",
                location: element.context.location != null? element.context.location: ""
            }
        }
    });
    return imageData;
}

export default async function PhotoPage({params}: {params: { id: any; }}) {
    let id = params.id.replace('-', '/');
    let imageData: {id: any, picture: any, width: any, height: any, title: any, description: any, camera: any, location: any} = await getData(id);

    if (imageData.id == "image not found") {
        return;
    }

    return (
        <>
            <div className={"flex flex-col w-screen items-center mt-36 pb-20 space-y-10"}>
                <h1 className={"text-5xl md:text-6xl mx-5 text-center font-bold"}>{imageData.title}</h1>
                <ClientImage imageData={imageData}></ClientImage>
                <div className={"flex flex-col space-y-5 md:flex-row w-[80%] md:w-full mx-10 items-center justify-evenly mb-20"}>
                    <InfoCard heading={"Description"} text={imageData.description}></InfoCard>
                    <div className={"flex flex-col w-full md:w-fit justify-self-stretch items-start text-start justify-start bg-neutral-200 rounded-lg p-5"}>
                        <div className={"flex flex-row items-center justify-center text-lg"}>
                            <IoLocationSharp />: {imageData.location}
                        </div>
                        <h1 className={"text-lg mt-2"}>{imageData.camera}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


