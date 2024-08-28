import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeAll, describe, it } from "vitest";
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

describe("Add ingredient to fridge", () => {
  it("show ingredient on the Fridge Page, after click searching ingredient on the Ingredient Page", async () => {
    userEvent.setup();

    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
    );
    const ingredientsLinkPage = screen.getByRole("link", {
      name: "Ingredients",
    });

    await userEvent.click(ingredientsLinkPage);
    screen.getByRole("heading", {
      name: "Ingredients",
    });

    const recipesInput = screen.getByRole("input");
    const searchParam = "cherry";

    await userEvent.type(recipesInput, searchParam);
    const cherryJamCard = await screen.findByRole(
      "img",
      {
        name: "cherry jam",
      },
      { timeout: 5000 }
    );

    await userEvent.click(cherryJamCard);
    const fridgeLinkPage = screen.getByRole("link", {
      name: "Fridge",
    });

    await userEvent.click(fridgeLinkPage);
    screen.getByRole("heading", {
      name: "Fridge",
    });
    screen.getByRole("img", {
      name: "cherry jam",
    });
  });
});
