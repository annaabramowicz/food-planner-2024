import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme from "./app/style/theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
