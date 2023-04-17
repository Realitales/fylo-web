import React from "react";
import { motion } from "framer-motion";

//components
import Navbar from "../components/Navbar";
import Button from "../components/Button";

//images
import illustration1 from "/assets/illustration-intro.png";
import bgcurvemobile from "/assets/bg-curvy-mobile.svg";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-5 flex flex-col h-full justify-evenly">
        <div
          className="bg-no-repeat bg-bottom flex flex-col gap-7"
          style={{
            backgroundImage: `url(${bgcurvemobile})`,
            backgroundSize: "100%",
          }}
        >
          <img
            src={illustration1}
            alt="illustration-1"
            className="w-80 self-center z-20"
          />
          <motion.h1
            initial={{ y: "-5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="font-raleway font-bold text-neutral-white text-[1.5rem] z-20  mx-4"
          >
            All your files in one secure location, accessible anywhere.
          </motion.h1>
        </div>
        <div className="bg-dark-blue-2 pt-5 px-5 h-[17.1em]">
          <motion.p
            initial={{ y: "-5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="text-neutral-white font-raleway mx-4 w-100 text-sm"
          >
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </motion.p>
          <Button className="mt-5 px-20 py-4">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
