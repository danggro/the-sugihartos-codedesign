import Image from "next/image";

export default function Modal(props) {
  return (
    <div
      className="absolute top-0 left-0 grid w-screen h-screen place-items-center bg-black/30"
      onClick={props.onClose}
    >
      <Image src={props.src} alt={props.alt} className="w-[700px]" />
    </div>
  );
}
