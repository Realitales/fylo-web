import React from "react";

import bgcurvemobile from "/assets/bg-curvy-desktop.svg";

export const BackgroundWave = () => {
  return (
    <div
      className="absolute  h-[33em] bg-center top-5 pt-64  w-screen -z-10 bg-no-repeat "
      style={{
        backgroundImage: `url(${bgcurvemobile})`,
        backgroundSize: "115%",
        backgroundPosition: "50% 80%",
      }}
    />
  );
};

export default BackgroundWave;
