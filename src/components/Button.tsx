import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <motion.button
      initial={{ y: "-5em", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className={`${className} font-raleway  font-bold text-sm bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full  text-neutral-white`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
