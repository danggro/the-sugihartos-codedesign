import NavBar from "@/components/Navigation/NavBar";
import Projects from "@/components/Projects/Projects";
import Head from "next/head";

export default function overview() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <NavBar />
      <Projects />
    </>
  );
}
