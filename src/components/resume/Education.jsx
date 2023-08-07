import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className=" mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering"
            subTitle="Sai Gon University (2019-now)"
            result="3.3/4"
            des="During my studies, I have gained a lot of basic knowledge about programming. In my major, I have built and developed 
            web applications well to complete subjects with high scores. Therefore I received two college scholarships."
          />
          <ResumeCard
            title="High School Education"
            subTitle="THPT Da Teh (2016-2019)"
            result="8.2/10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Nguyen Van Troi (2012-2016)"
            result="9/10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
