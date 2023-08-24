import React from 'react';
import { useState } from 'react';
function DropDown(props) {
    return (
        <div className=' z-90'>
        <ul className={`${props.display}" gap-14  ${props.saghroun}  "`}>
          <li >
              <a href="#" className="">Skills</a>
            </li>
            <li >
              <a href="#" className="">Projects</a>
            </li>
            <li >
              <a href="#" className="">Certifications</a>
            </li>
          </ul>
        </div>
    );
}

export default DropDown;