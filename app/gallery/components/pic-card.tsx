import Image from "next/image";
import PicData from "../PicData";
import Link from "next/link";

export default function PicCard(props: { data: PicData }) {
    const data = props.data;
    const image = data.picture;

    return (
        <Link href={`/gallery/${data.id}`}>
            <div className={`PicCard flex flex-col w-[320px] h-[240px] justify-center text-center`}>
                <div className={`flex flex-row justify-center relative`}>
                    <Image className={"rounded-lg"} style={{transform: "translate3d(0, 0, 0)"}} placeholder={"blur"}
                           alt={data.description} src={data.picture} width={320} height={240}></Image>
                    <div className={"absolute bottom-0 w-full h-fit bg-white/40 p-1"}>
                        <div className={"text-center"}>
                            <h1 className={"px-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-center"}>{data.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}