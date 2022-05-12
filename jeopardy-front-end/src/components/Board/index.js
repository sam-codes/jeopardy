import React from "react";
import { PriceCell } from "../PriceCell";
import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";

const Board = () => {
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
      <PriceCell />
      {/* <Prices /> */}
    </Wrapper>
  );
};

export default Board;
