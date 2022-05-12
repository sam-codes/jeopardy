import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./PriceCell.styled";
import { Question } from "../Question";

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
    <Container onClick={handleOpenQuestion}>
      {!visited && <Text className="price-text">{price}</Text>}
      {showQuestion && <Question onClose={handleClose} />}
    </Container>
  );
};

PriceCell.propTypes = {
  price: PropTypes.string,
  question: PropTypes.string,
  onOpenQuestion: PropTypes.bool,
};
