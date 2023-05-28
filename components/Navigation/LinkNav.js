export default function LinkNav(props) {
  return (
    <li>
      <a
        href={props.href}
        className={`font-medium ${
          props.active
            ? "text-white font-semibold"
            : "text-white/60 hover:underline hover:text-white"
        }`}
      >
        {props.children}
      </a>
    </li>
  );
}
