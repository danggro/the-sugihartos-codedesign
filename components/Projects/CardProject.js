import Image from "next/image";

export default function CardProject(props) {
  return (
    <div className="w-fit h-fit rounded-[6px] px-[18px] pt-4 pb-8 bg-white/5">
      <button onClick={props.onClick}>
        <Image src={props.src} alt={props.alt} />
      </button>
      <h6 className="text-lg font-semibold mt-[30px] mb-4">{props.title}</h6>
      <p className="text-xs tracking-wider uppercase text-white/60">
        {props.ctg}
      </p>
    </div>
  );
}
