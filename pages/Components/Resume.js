import React from 'react';

function Resume(props) {
    return (
        <div
        id='Resume'
      className="lbox z-0 flex-1 justify-center m-20 text-center px-30 py-20 outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
        <a href='/Resume.pdf' download>
      <h2 className="text-4xl font-bold text-center pb-10">
        Resume
      </h2>
      </a>
      
    </div>
    );
}

export default Resume;