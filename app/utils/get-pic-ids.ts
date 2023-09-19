import {cache} from "react";
import cloudinary from "./cloudinary"
export const revalidate = 10;
export const getPicIds = cache(async () => {
    let results = await cloudinary.v2.search.expression(`folder:gallery/* AND context:caption`).with_field('context').max_results(30).execute()
    return results.resources;
});