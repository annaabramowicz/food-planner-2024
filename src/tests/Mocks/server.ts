import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import {
  apiResponseComplexSearch,
  apiResponseWithSearchParamA,
} from "./apiResponse";
import config from "config/env";

const handlers = [
  http.get(`${config.apiUrl}recipes/complexSearch`, ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.has("query")) {
      return HttpResponse.json(apiResponseWithSearchParamA);
    }
    return HttpResponse.json(apiResponseComplexSearch);
  }),
];

export const server = setupServer(...handlers);
