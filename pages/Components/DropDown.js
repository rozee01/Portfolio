import React from 'react';
function DropDown(props) {
  
    return (
      
        <div className='z-10 font-semibold text-xl'>
        <ul className={`${props.display}" gap-14  ${props.saghroun}  "`}>
              <li>
                <a href='#Skills'>
              Skills</a>
            </li>
            <li >
                <a href='#Projects'>Projects</a>
            </li>
            <li >
                <a href='#Resume' >Resume</a>
            </li>
          </ul>
        </div>
    );
}

export default DropDown;