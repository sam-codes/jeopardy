//import React from "react";

export const getCategories = async (gameId) => {
  return fetch(`http://localhost/categories?gameId=${gameId}`, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json.categories;
    });
};

export const getAnswer = async (gameId, value, category) => {
  return fetch(
    `http://localhost/question?gameId=${gameId}&value=${value}&category=${category}`,
    {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      return json.categories;
    });
};
