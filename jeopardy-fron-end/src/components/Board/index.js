import React, { useState } from "react";
import { PriceCell } from "../PriceCell";
import { Question } from "../Question";
import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";

const Board = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const categories = [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
  ];
  return (
    <Wrapper columns={categories.length}>
      <Categories categories={categories} />
      <PriceCell onOpenQuestion={() => setShowQuestion(true)} />
      {showQuestion && <Question onClose={() => setShowQuestion(false)} />}
      {/* <Prices /> */}
    </Wrapper>
  );
};

export default Board;
