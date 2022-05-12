import React from "react";
import "./category.css";

export const CategoryCell = ({ category = "category unknown" }) => (
  <div className="category">
    <span className="category-text">{category}</span>
  </div>
);
