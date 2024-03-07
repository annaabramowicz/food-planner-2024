import axios from "axios";
import config from "config/env";



export const getRecipesFromApi = () =>
  axios
    .get(`${config.apiUrl}recipes/complexSearch?apiKey=${config.apiKey}`)
    .then(({ data }) => data.results);

export const getIngredientsFromApi = (searchParam) =>
  axios
    .get(
      `${config.apiUrl}food/ingredients/search?query=${searchParam}&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);
