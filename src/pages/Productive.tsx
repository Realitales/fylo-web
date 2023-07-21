import React from "react";

import bannerIMG from "/assets/illustration-stay-productive.png";

export const Productive = () => {
  return (
    <div className="bg-dark-blue-2 px-5 py-32 flex flex-col gap-20 items-center laptop:grid laptop:grid-cols-2 laptop:px-[10%]">
      <img
        src={bannerIMG}
        alt="banner-productive"
        className="w-80 laptop:w-[90%]"
      />
      <div className="flex flex-col gap-5 items-center text-neutral-white p-1 laptop:items-start ">
        <h1 className="font-raleway font-bold text-xl laptop:text-4xl ">
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
          className="self-start text-accent-cyan text-sm mb-2 border-solid border-b-2 border-accent-cyan flex gap-2 
                     hover:text-neutral-white hover:border-neutral-white hover:fill-neutral-white"
        >
          <span>See how Fylo works</span>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="mt-0.5"
          >
            <defs>
              <circle id="b" cx="6" cy="6" r="6" />
              <filter
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="1"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                  in="shadowBlurOuter1"
                />
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 2)">
                <use fill="currentColor" filter="url(#a)" xlinkHref="#b" />
                <use fill="currentColor" xlinkHref="#b" />
              </g>
              <path
                d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                fill="#1B2330"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Productive;
