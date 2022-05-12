import React from "react";
import PropTypes from "prop-types";
import { Container } from "./CategoryCell.styled";

export const CategoryCell = ({ name }) => {
  return <Container>{name}</Container>;
};

CategoryCell.propTypes = {
  name: PropTypes.string,
};
