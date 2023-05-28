import Image from "next/image";
import NavBar from "@/components/Navigation/NavBar";
import Index from "@/components/Index/Index";
import BGIndex from "@/public/index/BGIndex.png";
import Head from "next/head";

// className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <NavBar />
      <div className="absolute -z-10 top-20 left-20">
        <Image src={BGIndex} alt="BGIndex" />
      </div>
      <Index />
    </>
  );
}
