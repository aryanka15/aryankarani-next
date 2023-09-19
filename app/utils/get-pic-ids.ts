import {cache} from "react";
import cloudinary from "./cloudinary"
export const revalidate = 10;
export const getPicIds = cache(async () => {
    let results = await cloudinary.v2.search.expression(`folder:gallery/*`).with_field('context').execute()
    return results.resources;
});