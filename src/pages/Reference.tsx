import React from "react";
import Card from "../components/Card";

//images
import quotesICON from "../assets/bg-quotes.png";

//feedbacks
import feedbacks from "../utils/feedbacks";

export const Reference = () => {
  return (
    <div className="bg-dark-blue-2 px-5 pb-20">
      <img src={quotesICON} className="w-8 ml-3" alt="quotes-icon" />
      <div className="flex flex-col gap-7">
        {feedbacks.map((feedback) => (
          <Card
            img={feedback.image}
            from={feedback.from}
            message={feedback.message}
            title={feedback.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Reference;
