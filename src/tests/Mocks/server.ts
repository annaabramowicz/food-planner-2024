import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import {
  apiResponseComplexSearch,
  apiResponseWithSearchParamA,
} from "./apiResponse";
import config from "config/env";

const handlers = [
  // http.get(`${config.apiUrl}recipes/complexSearch?`, ({ request }) => {
  //   const url = new URL(request.url);
  //   const query = url.searchParams.get("query");
  //   url.searchParams.get("number");
  //   url.searchParams.get("minFat");
  //   url.searchParams.get("minProtein");
  //   url.searchParams.get("minCalories");
  //   url.searchParams.get("minCarbs");
  //   url.searchParams.get("apiKey");
  //   if (!query) {
  //     return new HttpResponse(null, {
  //       status: 400,
  //       statusText: "Bad Request",
  //     });
  //   }
  //   return HttpResponse.json(apiResponseWithSearchParamA);
  // }),
  http.get(
    `${config.apiUrl}recipes/complexSearch?query=A&number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`,
    () => {
      return HttpResponse.json(apiResponseWithSearchParamA);
    }
  ),
  http.get(
    `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`,
    () => {
      return HttpResponse.json(apiResponseComplexSearch);
    }
  ),
];

export const server = setupServer(...handlers);
