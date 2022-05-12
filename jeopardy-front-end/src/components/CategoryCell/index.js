import React from "react";
import PropTypes from "prop-types";
import { Container } from "./CategoryCell.styled";
import "./category.css";

export const CategoryCell = ({ category = "category unknown" }) => {
  return (
    <Container>
      <span className="category-text">{category}</span>
    </Container>
  );
};

CategoryCell.propTypes = {
  category: PropTypes.string,
};
