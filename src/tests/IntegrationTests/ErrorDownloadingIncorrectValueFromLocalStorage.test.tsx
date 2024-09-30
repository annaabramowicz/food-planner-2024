import { ChakraProvider, theme } from "@chakra-ui/react";
import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeEach, describe, it } from "vitest";
import router from "routes/router";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
} from "services/localStorage";

beforeEach(() => {
  const invalidJSONIngredient = `{
    "id": 9279,
    "name": "purple plum",
    "image" //comments
  }`;
  window.localStorage.setItem("fridge", invalidJSONIngredient);
  console.log("tutaj jest window.localStorage.setItem");

  const ingredient = {
    id: 9280,
    name: "green apple",
    image: "apple.jpg",
  };
  saveIngredientInLocalStorage(ingredient);
  console.log("tutaj jest saveIngredientInLocalStorage");

  // getIngredientsFromLocalStorage();
});

describe("Error downloading incorrect value from local storage", () => {
  it("don't show any ingredients on fridge page, after choosing them on the Ingredients Page during previous session", async () => {
    const view = render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );
    console.log("tutaj jest test");
    const fridgeLinkPage = screen.getByRole("link", {
      name: "Fridge",
    });

    await userEvent.click(fridgeLinkPage);
    logRoles(view.container);

    // screen.getByRole("img", {
    //   name: "avocados",
    // });
  });
});
