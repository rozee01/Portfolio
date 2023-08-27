import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import DropDown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";

function Nav(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="z-10 w-full h-16 max-w-7xl m-auto flex items-center justify-between">
        <div className="font-bold text-3xl ml-4">
          <a href="#Content">Rozee's dev</a>
        </div>
        <div className="links mr-4">
          <DropDown
            display={"flex "}
            skillsRef={props.skillsRef}
            projectsRef={props.projectsRef}
            resumeRef={props.resumeRef}
          />
        </div>
        <AiOutlineMenu
          className="menu text-2xl cursor-pointer hidden"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </nav>
      <div className={`${!open ? "hidden " : ""} z-10 dropmenu`}>
        <DropDown
          display={"flex-col "}
          saghroun={"saghroun"}
          skillsRef={props.skillsRef}
          projectsRef={props.projectsRef}
          resumeRef={props.resumeRef}
        />
      </div>
    </>
  );
}

export default Nav;
