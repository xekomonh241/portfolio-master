import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2  flex justify-center items-center relative">
      <img
        className="w-[350px] h-[450px] lgl:h-[670px] lgl:w-[470px] z-10 rounded-lg"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="w-[380px] h-[480px] lgl:h-[700px] lgl:w-[500px] absolute bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-lg"></div>
    </div>
  );
};

export default RightBanner;
