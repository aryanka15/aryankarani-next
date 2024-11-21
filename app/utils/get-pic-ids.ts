import {cache} from "react";
import cloudinary from "./cloudinary"
export const getPicIds = cache(async () => {
    let results = await cloudinary.v2.search.expression(`folder:gallery/* AND context:caption`).with_field('context').execute()
    return results.resources;
});