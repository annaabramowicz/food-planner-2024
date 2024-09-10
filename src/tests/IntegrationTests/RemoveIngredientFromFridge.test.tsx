import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { describe, expect, it } from "vitest";
import { router } from "./RouterSetupTests";

describe("Remove ingredient from fridge", () => {
  it("delete ingredient on the Fridge Page, after added them on the Ingredient Page", async () => {
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

    const lemonCard = await screen.findByRole("img", {
      name: "lemon",
    });
    await userEvent.click(lemonCard);

    const fridgeLinkPage = screen.getByRole("link", {
      name: "Fridge",
    });
    await userEvent.click(fridgeLinkPage);

    const closeMark = screen.getByRole("closeMark");
    await userEvent.click(closeMark);

    expect(closeMark).not.toBeInTheDocument();
  });
});
