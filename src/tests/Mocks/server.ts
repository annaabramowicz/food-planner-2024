import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import {
  apiResponseComplexSearchForRecipes,
  apiResponseWithSearchParamAppleForRecipes,
  apiResponseWithSearchParamCherryForIngredients,
} from "./apiResponse";
import config from "config/env";

const handlers = [
  http.get(`${config.apiUrl}recipes/complexSearch`, ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.has("query")) {
      return HttpResponse.json(apiResponseWithSearchParamAppleForRecipes);
    }
    return HttpResponse.json(apiResponseComplexSearchForRecipes);
  }),
  http.get(`${config.apiUrl}food/ingredients/search`, ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.has("query")) {
      return HttpResponse.json(apiResponseWithSearchParamCherryForIngredients);
    }
  }),
];

export const server = setupServer(...handlers);
