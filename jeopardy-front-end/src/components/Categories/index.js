import React from "react";
import { CategoryCell } from "../CategoryCell";
import PropTypes from "prop-types";

export const Categories = ({ categories = [] }) => {
  if (!categories?.length) return null;

  return categories.map((category, index) => (
    <CategoryCell key={index} category={category} />
  ));
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
