import React from "react";

interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`${className} font-raleway  font-bold text-sm bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full px-20 py-4 text-neutral-white`}
    >
      {children}
    </button>
  );
};

export default Button;
