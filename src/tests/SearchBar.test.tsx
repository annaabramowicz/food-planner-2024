import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import App from "app/App";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "routes/router";
import store from "store/store";
import { describe, it } from "vitest";

it("ures can search recepie", () => {
  render(
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  );
});
