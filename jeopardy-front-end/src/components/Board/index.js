import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";
import { Prices } from "../Prices";
import { getCategories } from "../API";

export const GameIdContext = createContext("default");

const Board = ({ gameId }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(gameId).then((data) => setCategories(data));
  }, []);

  return (
    <GameIdContext.Provider value={gameId}>
      <Wrapper columns={categories.length}>
        <Categories categories={categories} />
        <Prices categories={categories} />
      </Wrapper>
    </GameIdContext.Provider>
  );
};

Board.propTypes = {
  gameId: PropTypes.string,
};

export default Board;
