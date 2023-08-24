import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import Im from './Im';
function Content(props) {
    return (
      <div
      className="flex-1 justify-center m-20 text-center px-30 py-20 font-Inconsolata leading-8 outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
      <div
        id="container"
        className="w-full h-300 m-auto flex items-center justify-between"
      >
        <div className='m-auto'>
          <h2 className="text-4xl font-bold text-center pb-10 ">Arij Thabet</h2>
          <h3 className="text-2xl font-bold text-center justify-center flex">
            Fullstack developer, competitive programming enthusiast and software engineering student eager
            to learn all about computer science
          </h3>
        </div>
        <div className="justify-center m-auto">
          <Im />
        </div>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-4">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillMail />
      </div>
    </div>
    );
}

export default Content;