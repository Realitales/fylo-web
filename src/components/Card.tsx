import React from "react";

interface CardProps {
  img: string;
  message: string;
  from: string;
  title: string;
}

export const Card = ({ img, message, from, title }: CardProps) => {
  return (
    <div className="bg-dark-blue-4 p-5 rounded-md laptop:p-14">
      <p className="font-open-sans text-sm text-neutral-white laptop:text-base">
        {message}
      </p>
      <div className="flex mt-4 gap-2 items-center">
        <img src={img} alt="profile-img" className="w-9 h-9 rounded-full" />
        <div className="flex flex-col text-neutral-white">
          <h1 className="font-bold font-raleway text-sm">{from}</h1>
          <h2 className="text-sm">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
