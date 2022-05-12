import React, { useState } from "react";
import PropTypes from "prop-types";
import { Question } from "../Question";
import "./price.css";

export const PriceCell = ({ price = "unknown" }) => {
  const [visited, setVisited] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleOpenQuestion = () => {
    setVisited(true);
    setShowQuestion(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowQuestion(false);
  };

  return (
    <div className="price" onClick={handleOpenQuestion}>
      {!visited && <span className="price-text">{price}</span>}
      {showQuestion && <Question onClose={handleClose} />}
    </div>
  );
};

PriceCell.propTypes = {
  price: PropTypes.string,
  onOpenQuestion: PropTypes.bool,
};
