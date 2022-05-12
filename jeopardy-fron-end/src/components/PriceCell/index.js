import React, { useState } from "react";
import { Question } from "../Question";
import "./price.css";

export const PriceCell = ({ price = "unknown", onOpenQuestion }) => {
  const [visited, setVisited] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleClick = () => {
    setVisited(true);
    setShowQuestion(true);
  };

  return (
    <div className="price" onClick={handleClick}>
      {!visited && <span className="price-text">{price}</span>}
      {showQuestion && <Question onClose={() => setShowQuestion(false)} />}
    </div>
  );
};
