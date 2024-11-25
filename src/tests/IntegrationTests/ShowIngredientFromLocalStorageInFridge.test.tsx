import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeEach, describe, it } from "vitest";
import router from "routes/router";
import { saveIngredientInLocalStorage } from "services/localStorage";

beforeEach(() => {
  const plumIngredient = {
    id: 9279,
    name: "purple plum",
    image: "plum.jpg",
  };
  saveIngredientInLocalStorage(plumIngredient);
});

describe("Show ingredient from localStorage in Fridge Page", () => {
  it("If user have saved ingredient in localStorage, show them in Fridge Page", async () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );
    const fridgeLinkPage = screen.getByRole("link", {
      name: "Fridge",
    });

    await userEvent.click(fridgeLinkPage);
    screen.getByRole("img", {
      name: "purple plum",
    });
  });
});
