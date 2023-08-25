import React from 'react';
import { Link } from 'react-scroll';
function DropDown(props) {
    return (
        <div className='z-10'>
        <ul className={`${props.display}" gap-14  ${props.saghroun}  "`}>
          <li >
              <Link to="#Skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li >
              <Link to="Projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li >
              <Link to="Projects" smooth={true} duration={500}>Certifications</Link>
            </li>
          </ul>
        </div>
    );
}

export default DropDown;