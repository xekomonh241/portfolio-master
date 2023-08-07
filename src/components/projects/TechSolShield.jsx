import React from "react";
import { FaRust } from "react-icons/fa";
import { SiTypescript, SiAntdesign  } from "react-icons/si";

const TechSolShield = () => {
  return (
    <div className="flex flex-col justify-between mt-5">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Technologies
        </h2>
        <div className="flex gap-10">
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <FaRust />
          </span>
          <span className="bannerIcon">
            <SiAntdesign />
          </span>
        </div>
    </div>
  );
};

export default TechSolShield;
