import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["a Coder.", "a Full-Stack Developer.", "an Intern Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Duc Manh</span>
        </h1>
        <h2 className="text-4xl h-[80px] sml:h-auto font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base text-justify font-bodyFont leading-6 tracking-wide">
        As a newbiew, i created this website to introduce myself and search for internship opportunities.
        At the same time, this construction allows me to gain more knowledge and practice 
        programming skills for my future goals.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
