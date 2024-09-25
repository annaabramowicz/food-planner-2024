import { ChakraProvider } from "@chakra-ui/react";
import { logRoles, render, screen } from "@testing-library/react";
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
    )
  );
});

describe("Error downloading initial recipes", () => {
  it("don't show any recipes, after start application and switch to recipes page", async () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );

    const ingredientsLinkPage = screen.getByRole("link", {
      name: "Recipes",
    });
    await userEvent.click(ingredientsLinkPage);

    const allImg = await screen.queryAllByRole("img");
    expect(allImg.length).toBe(0);
  });
});
