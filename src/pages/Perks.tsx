import React from "react";

//perks list
import perks from "../utils/perks";

export const Perks = () => {
  return (
    <div className="bg-dark-blue-2 p-5 flex flex-col gap-20">
      {perks.map((perk) => (
        <div
          key={perk.name}
          className="text-neutral-white flex flex-col items-center"
        >
          <img src={perk.image} alt="perk-logo" />
          <div className="mt-8 text-center flex flex-col gap-3">
            <h1 className="font-raleway text-xl font-bold">{perk.header}</h1>
            <p className="text-center font-raleway">{perk.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perks;
