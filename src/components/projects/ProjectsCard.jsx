import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProjectsCard = ({ title, des, src, srcCode, linkGlobe, tech }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-auto overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 rounded-lg duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full h-auto md:h-[250px] mdl:h-[200px] lgl:h-[180px] xl:h-[280px] mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={srcCode}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </a>
              <a
                href={linkGlobe}
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-base text-justify tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="w-full h-auto "
      >
        {tech}
      </div>
    </div>
  );
};

export default ProjectsCard;
