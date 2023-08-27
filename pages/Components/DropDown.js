import React from "react";
import { Link } from "react-scroll";

function DropDown(props) { 
  //function to close the menu when we click on an element from the menu
  const handleClick = () => {
    if(props.small){
      props.setOpen(!props.open);
    }
  }
  
  return (
    <div className="z-10 font-semibold text-xl justify-between">
      <ul className={`${props.display} gap-14  ${props.small}  `}>
        <li>
          {/*Link from react-scroll is used  to control the scroll to the different sections of the page */}
          <Link
            to="Skills"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={()=>handleClick()}
          >
            Skills
          </Link>
        </li>
        <li>
        <Link
            to="Projects"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={()=>handleClick()}
          >
            Projects
          </Link>        </li>
        <li>
        <Link
            to="Resume"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={()=>handleClick()}
          >
            Resume
          </Link>        </li>
      </ul>
    </div>
  );
}

export default DropDown;
