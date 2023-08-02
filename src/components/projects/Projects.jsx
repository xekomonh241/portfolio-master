import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { solshield, ecshop, portfolio } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIALFI"
          des="SolShield is the ideal solution for electronic signature (e-signatures) technology and digitizing contract.
            SolShield software allows parties to sign contracts and other documents electronically on Solana rather than signing 
            them with pen and paper. This eliminates the need for parties signing a contract to be physically present at the same location."
          src={solshield}
          srcCode="https://github.com/xekomonh241/solshield"
          linkGlobe="https://solshield.onrender.com/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" EcShop is an e-commerce website built using the PHP programming language. 
            EcShop has almost all the features of an e-commerce website today."
          src={ecshop}
          srcCode="https://github.com/xekomonh241/ecsgu/tree/main"
          linkGlobe=""
        />
        <ProjectsCard
          title="Personal Portfolio"
          des=" This is a website that aggregates information about myself with projects 
            I have done along with skills and resumes"
          src={portfolio}
          srcCode="https://github.com/xekomonh241/portfolio"
          linkGlobe="https://portfolio-ilaw.onrender.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
