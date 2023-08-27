import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
function Nav(props) {
  //the open state is used to open and close the menu when the screen is small
  const [open, setOpen] = useState(false); 

  return (
    <>
      <nav className="navigation z-10 w-full h-16 max-w-7xl m-auto flex items-center justify-between">
        <div className="font-bold text-3xl ml-4">
        <Link
            to="Content"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Rozee's Dev
          </Link>
        </div>
        <div className="links mr-4">
          <DropDown
            display={"flex "}
          />
        </div>
        <AiOutlineMenu
          className="menu_icon text-2xl cursor-pointer hidden"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </nav>

      <div className={`${!open ? "hidden " : ""} z-10 dropmenu`}>
        {/* the small prop is used to change the display of the menu when the screen is small and make the 
        distinction between the two DropDown components stated in this component */}
        <DropDown
          display={"flex-col "}
          small={"small"}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
}

export default Nav;
