import axios, { AxiosResponse } from "axios";
import config from "config/env";
import { Recipes, Ingredients } from "types/types";

export const getInitialRecipesFromApi = () =>
  axios
    .get<Recipes>(
      `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    )
    .then(({ data }: AxiosResponse) => data.results);

export const getRecipesWithParamFromApi = (searchParam: string) =>
  axios
    .get<Recipes>(
      `${config.apiUrl}recipes/complexSearch?query=${searchParam}&number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    )
    .then(({ data }: AxiosResponse) => data.results);

export const getIngredientsWithParamFromApi = (searchParam: string) =>
  axios
    .get<Ingredients>(
      `${config.apiUrl}food/ingredients/search?query=${searchParam}&apiKey=${config.apiKey}`
    )
    .then(({ data }: AxiosResponse) => data.results);
