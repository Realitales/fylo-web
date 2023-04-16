import React from "react";
import logo from "../assets/logo.svg";

//icons
import locationICON from "../assets/icon-location.svg";
import phoneICON from "../assets/icon-phone.svg";
import emailICON from "../assets/icon-email.svg";

export const Footer = () => {
  return (
    <div className="bg-dark-blue-3 py-5 px-8 font-open-sans">
      <img src={logo} alt="fylo-logo" className="w-44" />
      <div className="text-neutral-white text-sm  mt-9 mr-5 flex flex-col gap-5">
        <div className="flex gap-6">
          <img src={locationICON} alt="location-icon" className="w-4 h-full" />
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
          <p>About us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
