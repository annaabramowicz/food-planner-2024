import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import App from "app/App";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeAll, describe, expect, it } from "vitest";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";
import HomePage from "app/pages/HomePage/HomePage";
import FridgePage from "app/pages/FridgePage/FridgePage";
import RecipesPage from "app/pages/RecipesPage/RecipesPage";
import IngredientsPage from "app/pages/IngredientsPage/IngredientsPage";
import { userEvent } from "@testing-library/user-event";

const router = createMemoryRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "ingredients",
        element: <IngredientsPage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "fridge",
        element: <FridgePage />,
      },
    ],
  },
]);

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
