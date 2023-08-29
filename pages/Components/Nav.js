import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
function Nav(props) {
  //the open state is used to open and close the menu when the screen is small
  const [open, setOpen] = useState(false);
  // Initialize pos with 0, the position of the scroll that controls the appearance of the blur effect "navigation"
  const [pos, setPos] = useState(0); 

  // useEffect is used to add an event listener to the scroll event, will be executed after the inital render and after 
  // every update of the component but it will create many re renders
  useEffect(() => {
    // Add a scroll event listener to update the pos variable
    const handleScroll = () => {
      setPos(window.scrollY);
    };
    //whenever the user scrolls the handleScroll function will be executed
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts or before a re render
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //this will prevent the loop of re renders and will allow us to get a 0 
    };
  }, []);
  return (
    <>
      <nav
        className={
          `${
          pos > 0 ? "navigation " : " "
        } 
        sticky top-0 z-10 w-full h-16 p-auto flex items-center justify-between`}
      >
        <div className="font-bold text-3xl ml-4">
          <Link
            to="Content"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Rozee&apos;s Dev
          </Link>
        </div>
        <div className="links mr-4">
          <DropDown display={"flex "} />
        </div>
        <AiOutlineMenu
          className="menu_icon text-2xl cursor-pointer hidden"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </nav>

      <div className={`${!open ? "hidden " : ""} z-10 dropmenu sticky top-0 `}>
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
