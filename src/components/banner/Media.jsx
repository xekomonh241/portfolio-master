import React from "react";
import { FaFacebookF, FaTwitter, FaReact, FaTelegram } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/ducmanh1101/" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href='https://twitter.com/NguyncM10987225' className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://t.me/xekomonh" className="bannerIcon">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="mt-4 xl:mt-0">
        <h2 className="text-base uppercase font-titleFont mb-4">
          SKILLS
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
