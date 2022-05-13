export const getCategories = async (gameId) => {
  return fetch(`/categories?gameId=${gameId}`, {
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
    `/question?gameId=${gameId}&value=${value}&category=${category}`,
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
      return json;
    });
};
