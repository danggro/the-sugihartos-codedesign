import Container from "../Container";
import NavLeft from "./NavLeft";

export default function NavBar() {
  return (
    <nav className="mt-[57px]">
      <Container>
        <div className="flex items-center justify-between">
          <NavLeft />
          <button
            className={`py-[10px] font-semibold px-8 bg-green rounded-[6px] leading-[28px] hover:opacity-80 font-ssp`}
          >
            Punya Project?
          </button>
        </div>
      </Container>
    </nav>
  );
}
