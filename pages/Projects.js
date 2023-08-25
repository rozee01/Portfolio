import React from "react";

function Projects(props) {
  return (
    <div
      className="lbox z-0 flex-1 justify-center m-20 text-center px-30 py-20 leading-8 outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
      <h2 className="text-4xl font-bold text-center pb-10">
        Projects/Experience
      </h2>
      <div
        id="container"
        className="w-full m-auto flex items-center justify-between px-6"
      >
        <div
          id="projet_web"
          className="cards my-3  w-auto flex flex-col leading-8 outline-8 rounded-2xl shadow-2xl"
        >
          <div className="text-2xl font-bold text-center pb-10">
            Travel social network
          </div>
          <div className="text-l font-normal text-center justify-center flex">
            A social network where users can see suggested destinations, comment
            them and create their own
          </div>
        </div>
        <div
          id="stage"
          className="my-auto w-auto cards flex flex-col leading-8 outline-8 rounded-2xl  shadow-2xl"
        >
          <div className="text-2xl font-bold text-center pb-10">
            Summer internship
          </div>
          <div className="text-l font-normal text-center justify-center flex">
            Summer internship at Papritech company where i was charged of creating a web server interface that allows users to update their ESP32 microcontrollers
          </div>
          
        </div>
        <div
          id="stage"
          className="my-3 w-auto cards flex flex-col leading-8 outline-8 rounded-2xl  shadow-2xl"
        >
          <div className="text-2xl font-bold text-center pb-10 font-Inconsolata ">
            YouTube to MP3 converter 
          </div>
          <div className="text-l font-normal text-center justify-center flex">
            Python application with a GUI that allows users to convert YouTube videos to MP3 files
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
