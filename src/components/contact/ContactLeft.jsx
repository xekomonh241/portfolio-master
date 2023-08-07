import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nguyen Duc Manh</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I would like to join your company as an intern. If you have recruitment needs, please contact me.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+84 362223116</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nguyenducmanh1101@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont ">Find me on</h2>
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
          <a href="https://www.instagram.com/duc.manguyn/" className="bannerIcon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft