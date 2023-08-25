import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import Im from './Im';
function Content(props) {
    return (
      <div
      className="lbox flex-1 z-0 justify-center m-20 text-center px-30 py-20 font-Inconsolata leading-8 outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
      <div
        id="container"
        className="w-full h-300 m-auto flex items-center justify-between"
      >
        <div className='m-auto'>
          <h2 className="text-4xl font-bold text-center pb-10 ">Arij Thabet</h2>
          <h3 className="text-2xl font-sans text-center justify-center flex ">
            Fullstack developer, competitive programming enthusiast <br>
            </br>and software engineering student eager
            to learn all about computer science
          </h3>
        </div>
        <div className="justify-center m-auto w-1/2">
          <Im />
        </div>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-4">
        <a href='https://www.github.com/rozee01' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href='https://www.linkedin.com/in/arij-thabet-193677257' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="mailto:arijthabet01@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a>
      </div>
    </div>
    );
}

export default Content;