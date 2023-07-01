import React from "react";
import { motion } from "framer-motion";

//perks list
import perks from "../utils/perks";

export const Perks = () => {
  return (
    <div className="bg-dark-blue-2 p-5 flex flex-col gap-20 laptop:grid laptop:grid-cols-2 laptop:gap-5 laptop:px-[15%]">
      {perks.map((perk) => (
        <motion.div
          initial={{ y: "-2em", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          key={perk.name}
          className="text-neutral-white flex flex-col items-center laptop:mx-[15%]   "
        >
          <img src={perk.image} alt="perk-logo" />
          <div className="mt-8 text-center flex flex-col gap-3">
            <h1 className="font-raleway text-xl font-bold">{perk.header}</h1>
            <p className="text-center font-raleway">{perk.message}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Perks;
