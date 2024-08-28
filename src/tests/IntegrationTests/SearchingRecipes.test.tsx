import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeAll, describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { router } from "./RouterSetupTests";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

describe("Searching recipes", () => {
  it("show image and title of the recipe on the Recipes Page, after entering the search term on the Home Page", async () => {
    userEvent.setup();

    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );

    const recipesInput = screen.getByRole("input");
    const searchParam = "apple";
    await userEvent.type(recipesInput, searchParam);

    expect(recipesInput).toHaveValue(searchParam);
    await screen.findByRole(
      "img",
      {
        name: "10 Minute Brownies",
      },
      { timeout: 5000 }
    );
  });
});
