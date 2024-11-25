import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { describe, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import router from "routes/router";

describe("Searching recipes", () => {
  it("show image and title of the recipe on the Recipes Page, after entering the search term on the Home Page", async () => {
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
    await screen.findByRole("img", {
      name: "Neah's Fresh Apple Cake",
    });
  });
});
