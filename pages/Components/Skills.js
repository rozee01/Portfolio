import React from "react";
import { BiLogoJava, BiLogoJavascript, BiLogoPhp } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import {
  FaSymfony,
  FaHtml5,
  FaPython,
  FaLinux,
  FaReact
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BsGit } from "react-icons/bs";

function Skills(props) {
  return (
    <div
      id="Skills"
      className=" lbox z-0 justify-center m-20 text-center px-30 py-20 font-Inconsolata outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
      <div
        id="container"
        className="skills w-full h-300 m-auto flex items-center justify-between"
      >
        <div className="text-5xl mx-3 flex flex-wrap justify-center gap-16 py-4 skills_icons">
          <BiLogoJava />
          <TbBrandCpp />
          <FaPython />
          <SiSpringboot />
          <FaHtml5 />
          <BiLogoJavascript />
          <FaReact />
          <BiLogoPhp />
          <FaSymfony />
          <SiBootstrap />
          <SiTailwindcss />
          <DiMysql />
          <BsGit />
          <FaLinux />
        </div>

        <div className="mx-3">
          <h2 id='text1' className="text-4xl font-bold text-center pb-10 ">Skills</h2>
          <h3 id='text2' className="text-2xl font-sans font-normal text-center justify-center flex">
            My curiosity and passion for computer science always push me to
            explore new tools and technologies and experiment with them
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
