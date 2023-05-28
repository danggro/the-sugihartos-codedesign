import NavBar from "@/components/Navigation/NavBar";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";

export default function skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <NavBar />
      <Skills />
    </>
  );
}
