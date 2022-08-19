import OutlineText from "../lib/OutlineText";

export default function SectionTitle({title}:any) {
  return (
    <div className="relative pt-24">
      <h1 className="text-6xl z-5 absolute bottom-2 left-6 inter-black">{title}</h1>
      <div className="p-5 left-2 bottom-3 fade-stroke-text-light dark:fade-stroke-text-dark z-4 absolute">
        <div className="text-9xl inter-black text-transparent">{title}</div>
      </div>
      <OutlineText className="stroke-red-400 text-9xl z-3 opacity-75" text={title} fontFamily="Inter Black" />
    </div>
  )
}