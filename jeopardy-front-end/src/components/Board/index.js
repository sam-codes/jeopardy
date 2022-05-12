import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Board.styled";
import { Categories } from "../Categories";
import { Prices } from "../Prices";
import { getCategories } from "../API";

const Board = ({ gameId }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories(gameId).then((data) => setCategories(data));
  }, []);

  return (
    <Wrapper columns={categories.length}>
      <Categories categories={categories} />
      <Prices categories={categories} />
    </Wrapper>
  );
};

Board.propTypes = {
  gameId: PropTypes.string,
};

export default Board;
