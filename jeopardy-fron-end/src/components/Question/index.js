import React from "react";
import "./question.css";

export const Question = ({ question = "unknown question", onClose }) => (
  <div className="question" onClick={onClose}>
    {question}
  </div>
);
