import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full px-12 h-80 py-0 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
    >
      <div className="h-72 overflow-y-hidden">
        <div className="flex items-center h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-12 h-8 flex flex-col ">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-base text-justify">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
