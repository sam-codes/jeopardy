import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./Question.styled";

export const Question = ({ question = "unknown question", onClose }) => (
  <Container onClick={onClose}>
    <Text className="question-text">{question}</Text>
  </Container>
);

Question.propTypes = {
  question: PropTypes.string,
  onClose: PropTypes.func,
};
