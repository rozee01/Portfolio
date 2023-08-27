import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import FaCode from "react-icons/fa";
import Resume from "./Components/Resume";

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
        <Content />
        <Skills />
        <Projects />
        <Resume />
      </main>
    </>
  );
}
