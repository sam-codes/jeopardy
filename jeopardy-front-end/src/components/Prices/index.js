import React from "react";
import { PriceCell } from "../PriceCell";
import PropTypes from "prop-types";

export const Prices = ({ categories = [] }) => {
  if (!categories?.length) return null;
  const prices = [200, 400, 600, 800, 1000];

  return prices.map((price) => {
    return categories.map((category) => (
      <PriceCell key={`${category}-${price}`} category={category} price={price} />
    ));
  });
};

Prices.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
