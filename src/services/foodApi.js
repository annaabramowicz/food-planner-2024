import axios from "axios";
import config from "config/env";

const API_URL = "https://api.spoonacular.com/";

export const getRecipesFromApi = () =>
  axios
    .get(`${API_URL}recipes/complexSearch?apiKey=${config.apiKey}`)
    .then(({ data }) => data.results);

export const getIngredientsFromApi = (searchParam) =>
  axios
    .get(
      `${API_URL}food/ingredients/search?query=${searchParam}&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);
