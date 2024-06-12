import axios from "axios";
import config from "config/env";
import {
  RecipesResponse as Recipes,
  IngredientsResponse as Ingredients,
} from "../lib/types";

export const getInitialRecipesFromApi = () =>
  axios
    .get<Recipes>(
      `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);

export const getRecipesWithParamFromApi = (searchParam: string) =>
  axios
    .get<Recipes>(
      `${config.apiUrl}recipes/complexSearch?query=${searchParam}&number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);

export const getIngredientsWithParamFromApi = (searchParam: string) =>
  axios
    .get<Ingredients>(
      `${config.apiUrl}food/ingredients/search?query=${searchParam}&apiKey=${config.apiKey}`
    )
    .then(({ data }) => data.results);
