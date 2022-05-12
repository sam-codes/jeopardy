import React, { useState } from "react";

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
