import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import DropDown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" relative py-2">
          <nav className=" w-full h-16 max-w-7xl m-auto flex items-center justify-between">
            <div className="">
              <a className="font-bold text-2xl ml-4" href="#">
                Rozee's dev
              </a>
            </div>
            <div className="links mr-4">
              <DropDown display={"flex "} />
            </div>
            <AiOutlineMenu className="menu text-2xl cursor-pointer hidden" onClick={() => {
              console.log("clicked");
              setOpen(!open);
            }}/>
          </nav>
          <div className={`${!open?"hidden ":""} dropmenu`}>
            <DropDown display={"flex-col "} saghroun={"saghroun"}/>
          </div>
        </header>
  );
}

export default Nav;
