import React, { useEffect, useState } from "react";
// import { PriceCell } from "../PriceCell";

import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";
import { Prices } from "../Prices";
import { getCategories } from "../API";

const Board = (gameId) => {
	const [categories, setCategories] = useState([]);
	
	useEffect(() => { 
		getCategories(gameId).then(data => setCategories(data)) }, 
		[]
	)

  return (
    <Wrapper columns={categories.length}>
      <Categories categories={categories} />
      <Prices categories={categories} />
    </Wrapper>
  );
};

export default Board;
