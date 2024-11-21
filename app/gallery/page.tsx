import PicCard from "../gallery/components/pic-card";
import {getPicIds} from "../utils/get-pic-ids";
import {getData} from "../utils/get-data";

export const revalidate = 10;

export default async function Gallery() {
    let picData = await getData();
  return (
    <>
      <div className="Gallery flex flex-col h-fit justify-center text-center items-center">
        <div className={"md:mt-40 mx-5 mb-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly gap-4"}>
            {
                picData.map((element, index) => (
                    <PicCard key={element.id} data={element}></PicCard>
                ))
            }
        </div>
      </div>
    </>
  );
}
