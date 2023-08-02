import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="mt-10 text-4xl font-bold">Achievement and Reward</h2>
        </div>
        <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="1ST PRIZE U20 TRACH IN SOLANA VIETNAM CODING CAMP"
            subTitle="Solana VietNam Coding Camp Season 2"
            result="Success"
            des="The project is implemented by 3 members to build an online contract signing application using 
            e-wallets on the solana ecosystem."
          />
          <ResumeCard
            title="Three times received college scholarships"
            subTitle=""
            result="Success"
            des="By studying hard and successfully completing course projects, I have won academic scholarships"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
