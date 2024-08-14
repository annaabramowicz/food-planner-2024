import { ChakraProvider } from "@chakra-ui/react";
import { logRoles, render, screen } from "@testing-library/react";
import App from "app/App";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import {
  createMemoryRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import store from "store/store";
import { beforeAll, describe, expect, it } from "vitest";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";
import HomePage from "app/pages/HomePage/HomePage";
import FridgePage from "app/pages/FridgePage/FridgePage";
import RecipesPage from "app/pages/RecipesPage/RecipesPage";
import IngredientsPage from "app/pages/IngredientsPage/IngredientsPage";
import { userEvent } from "@testing-library/user-event";
import {
  apiResponseComplexSearch,
  apiResponseWithSearchParamA,
} from "./Mocks/apiResponse";
import config from "config/env";
// import router from "routes/router";

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
  it("User can search recipes", async () => {
    userEvent.setup();
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
          {/* <MemoryRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="/" element={<HomePage />} />
                <Route path="ingredients" element={<IngredientsPage />} />
              </Route>
            </Routes>
          </MemoryRouter> */}
        </Provider>
      </ChakraProvider>
    );
    // screen.debug();
    screen.getByText("Home ff");
    const recipesInput = screen.getByRole("input");
    const searchParam = "A";
    await userEvent.type(recipesInput, searchParam);
    expect(recipesInput).toHaveValue(searchParam);
    // screen.getByText("RECIPES PAGE");
    const response = await fetch(
      `${config.apiUrl}recipes/complexSearch?query=${searchParam}&number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    );
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual(apiResponseWithSearchParamA);
  });

  it("fetches the recipes info", async () => {
    const response = await fetch(
      `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
    );
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual(apiResponseComplexSearch);
  });
});
