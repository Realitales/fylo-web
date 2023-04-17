import React from "react";

import bannerIMG from "/assets/illustration-stay-productive.png";
import arrowICON from "../assets/icon-arrow.svg";

export const Productive = () => {
  return (
    <div className="bg-dark-blue-2 px-5 py-32 flex flex-col gap-20 items-center">
      <img src={bannerIMG} alt="banner-productive" className="w-80" />
      <div className="flex flex-col gap-5 items-center text-neutral-white p-1">
        <h1 className="font-raleway font-bold  text-xl">
          Stay productive, wherever you are
        </h1>
        <p className="font-raleway ">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-raleway ">
          Securely share files and folders with friends. family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="self-start text-accent-cyan text-sm mb-2 border-solid border-b-2 border-accent-cyan flex gap-2"
        >
          <span>See how Fylo works</span>
          <img src={arrowICON} alt="" className="w-5" />
        </a>
      </div>
    </div>
  );
};

export default Productive;
