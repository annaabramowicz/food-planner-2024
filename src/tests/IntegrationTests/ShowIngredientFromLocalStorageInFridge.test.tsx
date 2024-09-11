import { ChakraProvider, theme } from "@chakra-ui/react";
import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { describe, it } from "vitest";
import { router } from "./RouterSetupTests";

describe.skip("Show ingredient from localStorage in Fridge Page", () => {
  it("If user have saved ingredient in localStorage, show them in Fridge Page", async () => {
    const ingredient = {
      id: 9037,
      name: "avocados",
      image: "avocado.jpg",
    };
    // window.localStorage.setItem("fridge", JSON.stringify(ingredient));

    // setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const view = render(
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
    logRoles(view.container);

    // await userEvent.click(ingredientsLinkPage);
    // const recipesInput = screen.getByRole("input");
    // const searchParam = "cherry";

    // await userEvent.type(recipesInput, `${searchParam}{enter}`);
    // const cherryJamCard = await screen.findByRole("img", {
    //   name: "cherry jam",
    // });

    // await userEvent.click(cherryJamCard);

    // screen.getByRole("img", {
    //   name: "cherry jam",
    // });
  });
});
