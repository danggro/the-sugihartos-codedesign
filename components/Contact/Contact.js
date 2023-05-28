import Image from "next/image";
import Container from "../Container";
import TitlePage from "../TitlePage";
import Email from "./Email";
import Phone from "./Phone";
import ContactPic from "@/public/contact/ContactPic.png";

export default function Contact() {
  return (
    <main className="h-screen pt-8">
      <Container>
        <div className="flex justify-between">
          <div className="w-5/12 pt-[58px]">
            <TitlePage>Contact</TitlePage>
            <p className="text-white/60 text-lg leading-[30px] mt-12">
              Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
            </p>
            <div className="mt-11 space-y-[30px]">
              <div className="flex gap-7">
                <Phone />
                <div>
                  <p className="font-medium text-white/60">Phone</p>
                  <p className="text-xl font-bold">+62 1234 8921</p>
                </div>
              </div>
              <div className="flex gap-7">
                <Email />
                <div>
                  <p className="font-medium text-white/60">Email</p>
                  <p className="text-xl font-bold">support@collosal.tld</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-6/12">
            <Image src={ContactPic} alt="ContactPic" />
            <div className="max-w-[259px] py-[22px] pl-[25px] pr-[38px] bg-white/5 border border-white/10 absolute top-[130px] left-[121px] rounded-md">
              <p>
                &quot;Aku akan sangat senang sekali mendapat pesan dari
                Anda&quot;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
