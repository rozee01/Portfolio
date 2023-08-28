import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home() {
  const ContentRef = useRef(null);
  const SkillsRef = useRef(null);
  const ResumeRef = useRef(null);
  const ProjectsRef = useRef(null);

  const contentAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const resumeAnimation = useAnimation();
  const projectsAnimation = useAnimation();

  const contentInView = useInView(ContentRef, { once: true });
  const skillsInView = useInView(SkillsRef, { once: true });
  const resumeInView = useInView(ResumeRef, { once: true });
  const projectsInView = useInView(ProjectsRef, { once: true });

  useEffect(() => {
    if (contentInView) contentAnimation.start("visible");
    if (skillsInView) skillsAnimation.start("visible");
    if (resumeInView) resumeAnimation.start("visible");
    if (projectsInView) projectsAnimation.start("visible");
  }, [contentInView, skillsInView, resumeInView, projectsInView]);

  const commonAnimationProps = {
    variants: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    initial: "hidden",
    transition: { duration: 1, delay: 0.25 },
  };

  return (
    <>
      <Head>
        <title>Arij Thabet</title>
        <link rel="icon" href="/code3.ico" />
      </Head>
      <main className="scroll-smooth font-Inconsolata h-full text-white ">
        <Nav />
        <div ref={ContentRef}>
          <motion.div {...commonAnimationProps} animate={contentAnimation}>
            <Content />
          </motion.div>
        </div>
        <div ref={SkillsRef}>
          <motion.div {...commonAnimationProps} animate={skillsAnimation}>
            <Skills />
          </motion.div>
        </div>
        <div ref={ProjectsRef}>
          <motion.div {...commonAnimationProps} animate={projectsAnimation}>
            <Projects />
          </motion.div>
        </div>
        <div ref={ResumeRef}>
          <motion.div {...commonAnimationProps} animate={resumeAnimation}>
            <Resume />
          </motion.div>
        </div>
      </main>
    </>
  );
}
