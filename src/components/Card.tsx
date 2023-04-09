import React from "react";

interface CardProps {
  img: string;
  message: string;
  from: string;
  title: string;
}

export const Card = ({ img, message, from, title }: CardProps) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{message}</p>
      <h1>{from}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
