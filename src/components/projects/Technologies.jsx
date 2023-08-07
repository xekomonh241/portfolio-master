import React from "react";
import { FaRust } from "react-icons/fa";
import { SiTypescript, SiAntdesign  } from "react-icons/si";
import { TbCurrencySolana,  } from "react-icons/tb";
const Technologies = () => {
  return (
    <div className="flex flex-col gap-6 lgl:gap-0 justify-between">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Technologies
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <FaRust />
          </span>
          <span className="bannerIcon">
            <TbCurrencySolana />
          </span>
          <span className="bannerIcon">
            <SiAntdesign />
          </span>
        </div>
    </div>
  );
};

export default Technologies;
