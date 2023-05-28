import Image from "next/image";

export default function CardSkills(props) {
  return (
    <div className="max-w-[321px] text-center">
      <Image src={props.src} alt={props.src} />
      <h6 className="mt-6 mb-4 text-xl font-medium">{props.title}</h6>
      <p className="leading-[26px] text-white/60">{props.desc}</p>
    </div>
  );
}
