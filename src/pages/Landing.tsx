import React from "react";
import { Navbar } from "../components/Navbar";

//images
import illustration1 from "../assets/illustration-intro.png";
import bgcurvemobile from "../assets/bg-curvy-mobile.svg";

export const Landing = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col text-center gap-6 mt-10 overflow-hidden">
        <img
          src={illustration1}
          alt="illustration-1"
          className="w-80  self-center z-20"
        />
        <img
          src={bgcurvemobile}
          alt="illustration-1"
          className="scale-125 fixed bottom-[25.5em] self-center z-10"
        />
        <h1 className="font-raleway font-bold text-neutral-white text-[1.8rem] z-20 mx-1 mt-5">
          All your files in one secure location, accessible anywhere.
        </h1>
        <div className="bg-dark-blue-2 relative">
          <p className="text-neutral-white font-raleway mx-4 w-100">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
