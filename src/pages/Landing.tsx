import { motion } from "framer-motion";

//components
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import BackgroundWave from "@/components/BackgroundWave";

//images
import illustration1 from "/assets/illustration-intro.png";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className=" text-center flex flex-col  justify-">
        <div className="self-center w-full  flex flex-col justify-center">
          <img
            src={illustration1}
            alt="illustration-1"
            className="w-80 z-20 laptop:w-[37%] self-center relative translate-x-[2%]"
          />

          <BackgroundWave />
        </div>
        <div className="flex flex-col items-center bg-dark-blue-2 mt-32 pt-[16%] ">
          <div className="flex flex-col items-center gap-2 relative -top-28">
            <motion.h1
              initial={{ y: "-5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70 }}
              className="font-raleway font-bold text-neutral-white text-[1.5rem] z-20 mx-4 laptop:text-[2.4rem] laptop:w-[20em]"
            >
              All your files in one secure location, accessible anywhere.
            </motion.h1>

            <motion.p
              initial={{ y: "-5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70 }}
              className="text-neutral-white font-raleway mx-4 w-72 text-sm laptop:text-[1rem]  laptop:w-[30em] "
            >
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </motion.p>
            <Button className="mt-5 px-20 py-4 ">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
