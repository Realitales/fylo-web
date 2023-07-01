import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

//icons
import locationICON from "../assets/icon-location.svg";
import phoneICON from "../assets/icon-phone.svg";
import emailICON from "../assets/icon-email.svg";
import logo from "../assets/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const FooterCard = () => {
  return (
    <motion.div
      initial={{ y: "-2em", x: "-50%", opacity: 0 }}
      whileInView={{ y: "-6rem", opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="px-5 py-10 bg-dark-blue-1 flex flex-col items-center rounded-md gap-5  absolute  w-80 left-1/2 laptop:w-[55%] laptop:gap-7 "
    >
      <h1 className="font-bold font-raleway text-neutral-white laptop:text-4xl">
        Get early access today
      </h1>
      <p className="text-center text-sm text-neutral-white laptop:text-base laptop:w-[80%]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any question, our support team would be happy to
        help you.
      </p>
      <div className="grid grid-cols-1 gap-5 w-full laptop:grid-cols-3 laptop:px-[5%]">
        <input
          type="text"
          className="bg-neutral-white p-3 rounded-3xl text-xs w-full laptop:col-span-2"
          placeholder="email@example.com"
        />
        <Button className="px-5 py-3 w-full">Get started for free</Button>
      </div>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <>
      <FooterCard />
      <div className="bg-dark-blue-3 px-8 font-open-sans pt-72 laptop:grid laptop:grid-cols-5 ">
        <img src={logo} alt="fylo-logo" className="w-44 laptop:col-span-5" />

        <div className="text-neutral-white text-sm  mt-9 mr-5 flex flex-col gap-5 laptop:grid laptop:grid-flow-dense laptop:grid-cols-2 ">
          <div className="flex gap-6 laptop:row-span-2 laptop:w-[50%]">
            <img
              src={locationICON}
              alt="location-icon"
              className="w-4 h-full laptop:h-[2em] laptop:w-5"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex gap-6">
            <img src={phoneICON} alt="phone-icon" className="w-4 h-full" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex gap-6">
            <img src={emailICON} alt="email-icon" className="w-4 h-full" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-14 mt-20 text-neutral-white">
          <div className="flex flex-col gap-5">
            <a href="#">About us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-5">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <div className="flex gap-5 p-10 justify-center">
          <a
            href="#"
            className="border-neutral-white border-solid border-2 p-2 rounded-full"
          >
            <FaFacebookF className="text-neutral-white" />
          </a>
          <a
            href="#"
            className="border-neutral-white border-solid border-2 p-2 rounded-full"
          >
            <AiOutlineTwitter className="text-neutral-white" />
          </a>
          <a
            href="#"
            className="border-neutral-white border-solid border-2 p-2 rounded-full"
          >
            <AiOutlineInstagram className="text-neutral-white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
