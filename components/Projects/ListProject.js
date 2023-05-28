export default function ListProject(props) {
  return (
    <li className={`text-lg ${props.active ? "text-white" : "text-white/60"}`}>
      <button className="hover:text-white flex gap-[18px] items-center ">
        <span className="w-[9px] h-[9px] rounded-full bg-white outline outline-white/50 block"></span>
        {props.children}
      </button>
    </li>
  );
}
