export default function ItemOverview(props) {
  return (
    <div className="space-y-[18px]">
      <h4 className="font-bold text-[28px] leading-[34px]">{props.title}</h4>
      <ul>{props.children}</ul>
    </div>
  );
}
