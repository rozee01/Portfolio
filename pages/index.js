import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "./Nav";
import Content from "./Content";
import Skills from "./Skills";
import Projects from "./Projects";
import FaCode from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Arij's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" font-Inconsolata h-full text-white ">
        <Nav />
        <Content id="Content"/>
        <Skills id="Skills"/>
        <Projects id="Projects"/>
      </main>
    </>
  );
}
