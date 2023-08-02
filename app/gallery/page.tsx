import PicCard from "../gallery/components/pic-card";
import cloudinary from "../utils/cloudinary"
import {getPicIds} from "../utils/get-pic-ids";

async function getData() {
    let picData: { id: any; picture: any; title: any; description: any; camera: any; location: any; }[] = [];
    const data = await getPicIds();
    data.forEach((element: any) => {
        let id = element.public_id;
        let picture = element.url;
        let title = element.context.caption != null ? element.context.caption: "";
        let description = element.context.alt != null ? element.context.alt: "";
        let camera = element.context.camera != null ? element.context.camera: "";
        let location = element.context.location != null? element.context.location: "";
        let data = {
            id: id,
            picture: picture,
            title: title,
            description: description,
            camera: camera,
            location: location
        }
        picData.push(data);
    });
    return picData;
}
export default async function Gallery() {
    let picData = await getData();
  return (
    <>
      <div className="Gallery flex flex-col h-fit justify-center text-center items-center">
        <div className={"md:mt-40 mx-5 mb-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly gap-4"}>
            {
                picData.map((element) => (
                    <PicCard key={element.id} data={element}></PicCard>
                ))
            }
        </div>
      </div>
    </>
  );
}
