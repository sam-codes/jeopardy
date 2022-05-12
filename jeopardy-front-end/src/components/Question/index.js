import React from "react";
import PropTypes from "prop-types";
import "./question.css";

export const Question = ({ question = "unknown question", onClose }) => (
  <div className="question" onClick={onClose}>
    <span className="question-text">{question}</span>
  </div>
);

Question.propTypes = {
  question: PropTypes.string,
  onClose: PropTypes.bool,
};