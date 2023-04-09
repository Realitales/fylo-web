import React from "react";
import Card from "../components/Card";

//images
import quotesICON from "../assets/bg-quotes.png";

//feedbacks
import feedbacks from "../utils/feedbacks";

export const Reference = () => {
  console.log(feedbacks);
  return (
    <div className="bg-dark-blue-2 px-5 py-5">
      <img src={quotesICON} className="w-8" alt="quotes-icon" />
      {feedbacks.map((feedback) => (
        <Card
          img={feedback.image}
          from={feedback.from}
          message={feedback.message}
          title={feedback.title}
        />
      ))}
    </div>
  );
};

export default Reference;
