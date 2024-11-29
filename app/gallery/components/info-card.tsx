export default function InfoCard(props: {heading: string, text: string}) {
    const heading = props.heading;
    const text = props.text;
    return (
        <>
           <div className={"flex flex-col w-full md:w-fit md:max-w-prose items-start border-2 border-white/60 p-5 shadow-2xl bg-white/40 backdrop-blur-2xl rounded-lg"}>
                <h1 className={"text-2xl font-bold"}>{heading}</h1>
                <p className={"text-lg"}>{text}</p>
           </div>
        </>
    )
}
