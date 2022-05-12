import React, { useState } from "react";
import PropTypes from "prop-types";
import { Question } from "../Question";
import "./price.css";

export const PriceCell = ({ price = 0, category = "N/A" }) => {
  const [visited, setVisited] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleClick = (price, category) => {
    console.log(`Request question with value=${price}, category=${category}.`);
    setVisited(true);
    setShowQuestion(true);
  };

  return (
    <div className="price" onClick={() => handleClick(price, category)}>
      {!visited && <span className="price-text">{`$${price}`}</span>}
      {showQuestion && <Question onClose={() => setShowQuestion(false)} />}
    </div>
  );
};

PriceCell.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
  onOpenQuestion: PropTypes.bool,
};
