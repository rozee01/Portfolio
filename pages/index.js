
import Head from "next/head";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import RevealOnScroll from "./Components/RevealOnScroll";


export default function Home() {

  return (
    <>
      <Head>
        <title>Arij Thabet</title>
        <link rel="icon" href="/code3.ico" />
      </Head>
      <main className="scroll-smooth font-Inconsolata h-full text-white ">
        <Nav />
        
        <RevealOnScroll>
          <Content />
        </RevealOnScroll>
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Resume />
        </RevealOnScroll>
        
      </main>
    </>
  );
}
