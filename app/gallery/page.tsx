import PicCard from "../gallery/components/pic-card";
import PicData from "./PicData";
export default function Gallery() {
  return (
    <>
      <div className="Gallery flex flex-col h-fit justify-center text-center items-center">
        <div className={"md:mt-40 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-evenly gap-4"}>
            <PicCard data={new PicData("0", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshdsabdsabdoashdipsahdiapshdiashfhfdshfdsahfsdiofhsduofhdsouf")}></PicCard>
            <PicCard data={new PicData("1", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("2", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("3", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("4", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("5", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("6", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("7", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
            <PicCard data={new PicData("8", "/images/MajesticCP.jpg", "Nikon D5600", "naidnasdasd", "hspdijaipdhpashdapshd")}></PicCard>
        </div>
      </div>
    </>
  );
}
