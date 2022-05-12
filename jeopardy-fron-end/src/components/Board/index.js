import React, { useState } from "react";
import { PriceCell } from "../PriceCell";
import { Question } from "../Question";

const Board = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div>
      <PriceCell onOpenQuestion={() => setShowQuestion(true)} />
      {showQuestion && <Question onClose={() => setShowQuestion(false)} />}
    </div>
  );
};

export default Board;
