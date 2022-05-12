import React, { useState } from "react";
import PropTypes from "prop-types";

export const PriceCell = ({ price = "unknown", onOpenQuestion }) => {
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    onOpenQuestion();
    setVisited(true);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: visited ? "green" : "blue" }}
    >
      {price}
    </div>
  );
};

PriceCell.propTypes = {
  price: PropTypes.string,
  onOpenQuestion: PropTypes.bool,
};
