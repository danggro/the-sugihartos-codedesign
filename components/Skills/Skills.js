import Container from "../Container";
import TitlePage from "../TitlePage";
import Skill1 from "@/public/skills/skill-1.png";
import Skill2 from "@/public/skills/skill-2.png";
import Skill3 from "@/public/skills/skill-3.png";
import CardSkills from "./CardSkills";

export default function Skills() {
  return (
    <main className="pb-[133px] pt-[90px]">
      <Container>
        <TitlePage>Skills</TitlePage>
        <p className="w-5/12 mt-12 text-white/60">
          Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi
          males masukin.
        </p>
        <div className="flex flex-wrap justify-between gap-y-14 mt-[38px]">
          <CardSkills
            src={Skill1}
            title="Biasa Pake Terminal"
            desc="Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu."
          />
          <CardSkills
            src={Skill2}
            title="Web Development"
            desc="Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe."
          />
          <CardSkills
            src={Skill3}
            title="Nulis Artikel"
            desc="Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali."
          />
          <CardSkills
            src={Skill3}
            title="Nulis Artikel"
            desc="Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali."
          />
          <CardSkills
            src={Skill2}
            title="Web Development"
            desc="Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe."
          />
          <CardSkills
            src={Skill1}
            title="Biasa Pake Terminal"
            desc="Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu."
          />
        </div>
      </Container>
    </main>
  );
}
