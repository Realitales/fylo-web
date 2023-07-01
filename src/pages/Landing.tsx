import { motion } from "framer-motion";

//components
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

//images
import illustration1 from "/assets/illustration-intro.png";

export const Landing = () => {
  return (
    <div className="hero flex flex-col overflow-hidden laptop:h-screen ">
      <Navbar />
      <img
        src={illustration1}
        alt="illustration-1"
        className="w-80 self-center translate-x-[5%] mb-16 laptop:w-[33%] laptop:mb-5"
      />
      <div className="flex flex-col items-center text-center pt-[0%] pb-[30%] gap-3 laptop:pb-0">
        <motion.h1
          initial={{ y: "-5em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="font-raleway font-bold text-neutral-white text-[1.5rem] z-20 mx-4 laptop:text-[2.45rem] laptop:w-[20em]"
        >
          All your files in one secure location, accessible anywhere.
        </motion.h1>

        <motion.p
          initial={{ y: "-5em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className="text-neutral-white font-raleway w-72 text-sm laptop:text-[1rem]  laptop:w-[30em] laptop:text-center "
        >
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </motion.p>
        <Button className="mt-5 px-20 py-4 ">Get Started</Button>
      </div>
    </div>
  );
};

export default Landing;
