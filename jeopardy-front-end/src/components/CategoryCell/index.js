import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "./CategoryCell.styled";

export const CategoryCell = ({ category = "N/A" }) => {
  return (
    <Container>
      <Text>{category}</Text>
    </Container>
  );
};

CategoryCell.propTypes = {
  category: PropTypes.string,
};
