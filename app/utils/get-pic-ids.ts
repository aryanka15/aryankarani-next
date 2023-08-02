import {cache} from "react";
import cloudinary from "./cloudinary"
export const revalidate = 86400; // 24 hours
export const getPicIds = cache(async () => {
    let results = await cloudinary.v2.search.expression(`folder:gallery/*`).with_field('context').max_results(30).execute()
    return results.resources;
});