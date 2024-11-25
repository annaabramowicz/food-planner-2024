import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "routes/router";
import store from "store/store";
import { describe, it } from "vitest";

describe("Add ingredient to fridge", () => {
  it("show ingredient on the Fridge Page, after click searching ingredient on the Ingredient Page", async () => {
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
    const recipesInput = screen.getByRole("input");
    const searchParam = "cherry";

    await userEvent.type(recipesInput, `${searchParam}{enter}`);
    const cherryJamCard = await screen.findByRole("img", {
      name: "cherry jam",
    });

    await userEvent.click(cherryJamCard);
    const fridgeLinkPage = screen.getByRole("link", {
      name: "Fridge",
    });

    await userEvent.click(fridgeLinkPage);
    screen.getByRole("img", {
      name: "cherry jam",
    });
  });
});
