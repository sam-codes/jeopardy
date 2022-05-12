import React from "react";
import "./question.css";

export const Question = ({ question = "unknown question", onClose }) => (
  <div className="question" onClick={onClose}>
    <span className="question-text">{question}</span>
  </div>
);
