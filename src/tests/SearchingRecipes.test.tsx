import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import App from "app/App";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "routes/router";
import store from "store/store";
import { beforeAll, describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

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
  it("User can search recipes", () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/home"]}>
            <App />
          </MemoryRouter>
        </Provider>
      </ChakraProvider>
    );

    screen.debug();
  });
});
