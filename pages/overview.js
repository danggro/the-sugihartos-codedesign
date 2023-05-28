import NavBar from "@/components/Navigation/NavBar";
import Overview from "@/components/Overview/Overview";
import Head from "next/head";

export default function overview() {
  return (
    <>
      <Head>
        <title>Overview</title>
      </Head>

      <NavBar />
      <Overview />
    </>
  );
}
