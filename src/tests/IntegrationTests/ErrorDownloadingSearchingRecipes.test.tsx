import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeEach, describe, expect, it } from "vitest";
import router from "routes/router";
import { http, HttpResponse } from "msw";
import { server } from "tests/Mocks/server";
import config from "config/env";
import userEvent from "@testing-library/user-event";

beforeEach(async () => {
  server.use(
    http.get(
      `${config.apiUrl}recipes/complexSearch`,
      () => {
        return new HttpResponse(null, { status: 500 });
      },
      { once: true }
    ),
    http.get(
      `${config.apiUrl}recipes/complexSearch`,
      ({ request }) => {
        new URL(request.url);
        return new HttpResponse(null, { status: 500 });
      },
      { once: true }
    )
  );
});

describe("Error downloading searching recipes", () => {
  it("don't show any recipes, after entering the search term on the Home Page", async () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );

    const recipesInput = screen.getByRole("input");
    const searchParam = "apple";
    await userEvent.type(recipesInput, `${searchParam}{enter}`);

    const allImg = await screen.queryAllByRole("img");
    expect(allImg.length).toBe(0);
  });
});
