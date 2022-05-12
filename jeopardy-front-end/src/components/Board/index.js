import React from "react";
// import { PriceCell } from "../PriceCell";

import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";
import { Prices } from "../Prices";

const Board = () => {
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];
  return (
    <Wrapper columns={categories.length}>
      <Categories categories={categories} />
      <Prices categories={categories} />
    </Wrapper>
  );
};

export default Board;
