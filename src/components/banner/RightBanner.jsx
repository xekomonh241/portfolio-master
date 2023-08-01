import React from "react";
import { bannerImg } from "../../assets/index";
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-auto h-auto lgl:h-[650px] z-10 rounded-lg"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute  w-[450px] h-[650px] lgl:w-[470px] lgl:h-[680px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-lg"></div>
    </div>
  );
};

export default RightBanner;
