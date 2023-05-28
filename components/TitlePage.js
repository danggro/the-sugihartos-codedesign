export default function TitlePage(props) {
  return (
    <div className="relative">
      <h3 className="text-[40px] font-bold leading-[54px]">{props.children}</h3>
      <h2 className="absolute font-bold text-[100px] leading-[121px] text-white/5 -top-[35px] -left-[61px]">
        {props.children}
      </h2>
    </div>
  );
}
