import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiVite, SiTailwindcss  } from "react-icons/si";

const TechPortfolio = () => {
  return (
    <div className="flex flex-col justify-between mt-5">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Technologies
        </h2>
        <div className="flex gap-10">
          <span className="bannerIcon">
            <SiVite />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
    </div>
  )
}

export default TechPortfolio