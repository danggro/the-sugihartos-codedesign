import Image from "next/image";
import Container from "../Container";
import ItemOverview from "./ItemOverview";
import ListOverview from "./ListOverview";
import OverviewImg from "@/public/overview/OverviewImg.png";
import BGOverview from "@/public/overview/BGOverview.png";
import TitlePage from "../TitlePage";

export default function Overview() {
  return (
    <main className="pt-8 pb-[190px]">
      <Container>
        <div className="flex">
          <div className=" w-6/12 space-y-12 pt-[58px]">
            <TitlePage>Overview</TitlePage>
            <p className="text-white/60 text-lg leading-[30px] w-10/12">
              Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum
              kata software-engineer itu ada. Saya terbiasa ngoding di Microsoft
              Word 2003.
            </p>
            <ItemOverview title="Pendidikan">
              <ListOverview>2003-2009 SDN California 2</ListOverview>
              <ListOverview>2009-2012 SMP Los Santos 9</ListOverview>
              <ListOverview>2012-2015 SMA Berlin Jakarta 64</ListOverview>
            </ItemOverview>
            <ItemOverview title="Pekerjaan">
              <ListOverview>
                Software Engineer at PT. Mencari Cinta Sejati
              </ListOverview>
              <ListOverview>
                Co-founder at A.D.M (Artis Dunia Maya)
              </ListOverview>
              <ListOverview>Manager at Liverpool F.C</ListOverview>
              <ListOverview>Manager at Cliquers Cllamanya</ListOverview>
            </ItemOverview>
          </div>
          <div className="relative flex justify-center w-6/12 text-center pt-[72px]">
            <div>
              <Image src={OverviewImg} alt="OverviewImg" className="h-fit" />
              <Image
                src={BGOverview}
                alt="BGOverview"
                className="absolute top-0 left-0 -z-10"
              />
              <p className="text-[15px] text-white/60 mt-[10px]">
                Foto diambil 2018
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
