import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./PriceCell.styled";
import { Question } from "../Question";

export const PriceCell = ({
  price = 0,
  category = "N/A",
  question = "unkown question",
}) => {
  const [visited, setVisited] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleOpenQuestion = (price, category) => {
    console.log(`Request question with value=${price}, category=${category}.`);
    setVisited(true);
    setShowQuestion(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowQuestion(false);
  };

  return (
    <Container onClick={() => handleOpenQuestion(price, category)}>
      {!visited && <Text className="price-text">{`$${price}`}</Text>}
      {showQuestion && <Question question={question} onClose={handleClose} />}
    </Container>
  );
};

PriceCell.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
  question: PropTypes.string,
};
