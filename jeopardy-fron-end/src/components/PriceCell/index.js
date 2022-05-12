import React, { useState } from "react";
import PropTypes from "prop-types";
import { Question } from "../Question";
import "./price.css";

export const PriceCell = ({ price = "unknown" }) => {
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

PriceCell.propTypes = {
  price: PropTypes.string,
  onOpenQuestion: PropTypes.bool,
};
