export default function ListOverview(props) {
  return (
    <li className="flex gap-[18px] items-center text-lg">
      <span className="w-[9px] h-[9px] rounded-full bg-white outline outline-white/50 block"></span>
      {props.children}
    </li>
  );
}
