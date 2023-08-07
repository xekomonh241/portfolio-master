import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { solshield, ecshop, portfolio } from "../../assets/index";
import TechSolShield from "./TechSolShield";
import TechEcshop from "./TechEcshop";
import TechPortfolio from "./TechPortfolio";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <ProjectsCard
          id="01"
          title="SOCIALFI"
          des="SolShield is the ideal solution for electronic signature (e-signature) technology and contract digitization. 
          It allows parties to sign them electronically on Solana. SolShield won first prize U20 Track in Solana Vietnam coding camp season 2."
          src={solshield}
          srcCode="https://github.com/xekomonh241/solshield"
          linkGlobe="https://solshield.onrender.com/"
          tech=<TechSolShield />
        />
        <ProjectsCard
          id="02"
          title="E-commerce Website"
          des=" EcShop is an e-commerce website written in PHP. EcShop has almost all of the features of a modern 
          e- commerce website"
          src={ecshop}
          srcCode="https://github.com/xekomonh241/ecsgu/tree/main"
          linkGlobe=""
          tech=<TechEcshop />
        />
        <ProjectsCard
          id="03"
          title="Personal Portfolio"
          des=" This is a website that collects information about myself, including projects
           I have worked on, as well as skills and resumes"
          src={portfolio}
          srcCode="https://github.com/xekomonh241/portfolio"
          linkGlobe="https://portfolio-ilaw.onrender.com/"
          tech=<TechPortfolio />
        />
      </div>
    </section>
  );
};

export default Projects;
