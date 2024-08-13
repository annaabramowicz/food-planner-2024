import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { complexSearchApiResponse } from "./apiResponse";
import config from "config/env";

const handlers = [
  http.get(
    `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`,
    () => {
      return HttpResponse.json(complexSearchApiResponse);
    }
  ),
];

export const server = setupServer(...handlers);
