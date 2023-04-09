import React from "react";

//components
import Navbar from "../components/Navbar";
import Button from "../components/Button";

//images
import illustration1 from "../assets/illustration-intro.png";
import bgcurvemobile from "../assets/bg-curvy-mobile.svg";

export const Landing = () => {
  return (
    <div className="h-[5em] ">
      <Navbar />
      <div className="text-center mt-5 flex flex-col">
        <div
          className="bg-no-repeat bg-bottom flex flex-col "
          style={{
            backgroundImage: `url(${bgcurvemobile})`,
            backgroundSize: "120%",
          }}
        >
          <img
            src={illustration1}
            alt="illustration-1"
            className="w-80 self-center z-20"
          />
          <h1 className="font-raleway font-bold text-neutral-white text-[1.5rem] z-20  mx-4">
            All your files in one secure location, accessible anywhere.
          </h1>
        </div>
        <div className="bg-dark-blue-2 pt-5 px-5 h-[17.1em]">
          <p className="text-neutral-white font-raleway mx-4 w-100 text-sm">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <Button className="mt-5 ">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
