import React from "react";

function Projects(props) {
  return (
    <div
    id="Projects"
      className="lbox z-0 flex-1 justify-center m-20 text-center px-30 py-20 outline-8 rounded-2xl outline-white shadow-2xl
       "
    >
      <h2 className="text-4xl font-bold text-center pb-10">
        Projects / Experience
      </h2>
      <div
        id="container1"
        className="projets1 w-full m-auto flex items-center justify-between px-6"
      >
        <div
          id="projet_web"
          className="cards p-3 mx-3 w-1/2 flex flex-col outline-8 rounded-2xl shadow-2xl"
        >
          <a
            href="https://github.com/rozee01/projet_tp_web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl font-bold text-center pb-10">
              Travel social network
            </div>
            <div className="text-xl font-sans text-center justify-center flex ">
              A social network where users can see suggested destinations,
              comment them and create their own
            </div>
          </a>
        </div>

        <div
          id="stage"
          className="p-3 mx-3 w-1/2 cards flex flex-col leading-8 outline-8 rounded-2xl  shadow-2xl"
        >
          <div className="text-2xl font-bold text-center pb-10">
            Summer internship
          </div>
          <div className="text-xl font-sans text-center justify-center flex">
            Summer internship at Papritech company where i created a web server
            interface that allows users to update their ESP32 microcontrollers
          </div>
        </div>
      </div>

      <div
        id="container2"
        className="p-3 w-1/2 mx-3 flex items-center justify-between px-6"
      >
        <a
          href="https://github.com/rozee01/youtube-to-mp3-converter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            id="python"
            className="my-3 w-auto cards flex flex-col leading-8 outline-8 rounded-2xl  shadow-2xl"
          >
            <div className="text-2xl font-bold text-center pb-10 font-Inconsolata ">
              YouTube to MP3 converter
            </div>
            <div className="text-xl font-sans text-center justify-center flex">
              Python application with a GUI that allows users to convert YouTube
              videos to MP3 files
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;