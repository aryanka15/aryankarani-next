export default function InfoCard({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <div
      className="
        flex flex-col gap-y-2 p-6 rounded-2xl 
        bg-neutral-400/40 backdrop-blur-lg 
        border border-neutral-200 shadow-xl max-w-prose
      "
    >
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-lg text-white">{text}</p>
    </div>
  );
}
