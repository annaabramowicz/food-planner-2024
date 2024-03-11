import axios from "axios";
import config from "config/env";

export const getRecipesFromApi = () =>
  axios
    .get(
      `${config.apiUrl}recipes/findByNutrients?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data);

export const getIngredientsFromApi = (searchParam) =>
  axios
    .get(
      `${config.apiUrl}food/ingredients/search?query=${searchParam}&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);
