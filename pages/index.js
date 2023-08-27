import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ContentRef = useRef(null);
  const SkillsRef = useRef(null);
  const ResumeRef = useRef(null);
  const ProjectsRef = useRef(null);

  const animation = useAnimation();

  const startAnimationInView = (ref) => {

    const isInView = useInView(ref, {once: true});

    useEffect((ref) => {
      if (useInView(ref, {once: true})) {
        
        animation.start("visible");
      }
    }, []);
  };

  startAnimationInView(ContentRef);
  startAnimationInView(SkillsRef);
  startAnimationInView(ResumeRef);
  startAnimationInView(ProjectsRef);

  const commonAnimationProps = {
    variants: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    initial: "hidden",
    animate: animation,
    transition: { duration: 5, delay: 0.25 },
    
  };
console.log(commonAnimationProps);
  return (
    <>
      <Head>
        <title>Arij Thabet</title>
        <link rel="icon" href="/code.ico" />
      </Head>
      <main className="scroll-smooth font-Inconsolata h-full text-white ">
        <Nav />          <div ref={ContentRef} className="mx-10">

        <motion.div {...commonAnimationProps}>
            <Content />
          
        </motion.div></div>
        <div ref={SkillsRef}><motion.div {...commonAnimationProps}>
        
          <Skills />
        
        </motion.div></div>
        <div ref={ProjectsRef}><motion.div {...commonAnimationProps}>
        
          <Projects />
        
        </motion.div></div>
        <div ref={ResumeRef}><motion.div {...commonAnimationProps}>
        
          <Resume />
        
        </motion.div></div>
      </main>
    </>
  );
}
