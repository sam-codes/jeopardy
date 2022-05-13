import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./PriceCell.styled";
import { Question } from "../Question";
import { getAnswer } from "../API";
import { GameIdContext } from "../Board";
import { DailyDouble } from "../DailyDouble";

export const PriceCell = ({ price = 0, category = "N/A" }) => {
  const [visited, setVisited] = useState(false);
  const [question, setQuestion] = useState(false);
  const [showDailyDouble, setShowDailyDouble] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const gameId = useContext(GameIdContext);

  const handleOpenQuestion = async (price, category) => {
    const res = await getAnswer(gameId, price, category);
    if (res) {
      setQuestion(res.answer);
      setShowDailyDouble(res.dailyDouble);
      setVisited(true);
      setShowQuestion(true);
    }
  };

  const handleDailyDoubleClose = (e) => {
    e.stopPropagation();
    setShowDailyDouble(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowQuestion(false);
  };

  return (
    <Container onClick={() => handleOpenQuestion(price, category)}>
      {!visited && <Text className="price-text">{`$${price}`}</Text>}
      {showDailyDouble && <DailyDouble onClose={handleDailyDoubleClose} />}
      {showQuestion && !showDailyDouble && (
        <Question question={question} onClose={handleClose} />
      )}
    </Container>
  );
};

PriceCell.propTypes = {
  price: PropTypes.number,
  category: PropTypes.string,
};
