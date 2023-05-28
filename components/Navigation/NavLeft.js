import Link from "next/link";
import LinkNav from "./LinkNav";
import NavLogo from "./NavLogo";

export default function NavLeft() {
  return (
    <div className="flex items-center gap-14">
      <Link href={"/"}>
        <NavLogo />
      </Link>
      <ul className="flex gap-12">
        <LinkNav href="/overview">Overview</LinkNav>
        <LinkNav href="/skills">Skills</LinkNav>
        <LinkNav href="/projects">Projects</LinkNav>
        <LinkNav href="/contact">Contact</LinkNav>
      </ul>
    </div>
  );
}
