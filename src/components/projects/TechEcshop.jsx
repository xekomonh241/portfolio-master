import React from 'react'
import { FaPhp } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { SiMysql } from "react-icons/si"
const TechEcshop = () => {
  return (
    <div className="flex flex-col justify-between mt-5 ">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Technologies
        </h2>
        <div className="flex gap-10">
          <span className="bannerIcon">
            <FaPhp />
          </span>
          <span className="bannerIcon">
            <BsBootstrap />
          </span>
          <span className="bannerIcon">
            <SiMysql />
          </span>
        </div>
    </div>
  )
}

export default TechEcshop