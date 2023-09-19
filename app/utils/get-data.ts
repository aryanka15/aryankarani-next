import {getPicIds} from "./get-pic-ids";

export const getData = async () => {
    let picData: { id: any; picture: any; width: any; height: any; title: any; description: any; camera: any; location: any; }[] = [];
    const data = await getPicIds();
    data.forEach((element: any) => {
        let id = element.public_id;
        let picture = element.url;
        let width = element.width;
        let height = element.height;
        let title = element.context.caption != null ? element.context.caption: "";
        let description = element.context.alt != null ? element.context.alt: "";
        let camera = element.context.camera != null ? element.context.camera: "";
        let location = element.context.location != null? element.context.location: "";
        let data = {
            id: id,
            picture: picture,
            width: width,
            height: height,
            title: title,
            description: description,
            camera: camera,
            location: location
        }
        picData.push(data);
    });
    return picData;
}