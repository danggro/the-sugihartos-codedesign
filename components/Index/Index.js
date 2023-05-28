import Link from "next/link";
import Container from "../Container";
import ArrowR from "./ArrowR";
import IndexPic from "@/public/index/Index.png";
import Image from "next/image";

export default function Index() {
  return (
    <main className="pt-[110px] pb-[190px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-5/12">
            <h1 className="text-[40px] font-light">
              Hi, nama saya <span className="font-bold">Dedik Sugiharto!</span>
            </h1>
            <p className="text-lg text-white/60 leading-[30px] mt-4 mb-11 pr-5">
              Saya seorang software-engineer, pembaca buku, warga NU, dan juga
              murid (online) Pak Fahruddin Faiz.
            </p>
            <Link
              href={"/overview"}
              className="flex items-center gap-3 font-medium hover:underline"
            >
              Go To Overview
              <ArrowR />
            </Link>
            <div className="mt-[66px] flex gap-8">
              <div className="space-y-2">
                <h6 className="text-xs tracking-widest uppercase text-white/60">
                  projects
                </h6>
                <p className="text-2xl font-semibold">12</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-xs tracking-widest uppercase text-white/60">
                  experience
                </h6>
                <p className="text-2xl font-semibold">8 yrs</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-xs tracking-widest uppercase text-white/60">
                  natioallity
                </h6>
                <p className="text-2xl font-semibold">IDN 🇮🇩</p>
              </div>
            </div>
          </div>
          <div className="w-6/12 ">
            <Image src={IndexPic} alt="IndexPic" className="ml-7" />
          </div>
        </div>
      </Container>
    </main>
  );
}
