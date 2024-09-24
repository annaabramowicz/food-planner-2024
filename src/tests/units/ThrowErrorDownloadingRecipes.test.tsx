import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import theme from "app/style/theme/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "store/store";
import { beforeEach, describe, expect, it, vi } from "vitest";
import router from "routes/router";
import { getInitialRecipesFromApi } from "services/foodApi";
import { getInitialRecipesAsync } from "store/recipes/recipes";

const getInitialRecipesFromApiMock = vi.mocked(getInitialRecipesFromApi);

beforeEach(async () => {
  vi.mock("services/foodApi");
  render(
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  );
});

describe("Throw error downloading recipes", () => {
  it("show error message, after start application and download initial recipes from Api", async () => {
    const errorMessage = "Network error";
    getInitialRecipesFromApiMock.mockRejectedValue(new Error(errorMessage));

    // Tutaj fn i spyOn dzialaja podobnie, ale spyOn ma nie modyfikowac funkcji w calosci jak fn, tylko
    // we skazanym miejscu

    // const thunkApi = {
    //   rejectWithValue: vi.fn(),
    // };

    const thunkApi = {
      rejectWithValue: (value: string) => value,
    };

    const spy = vi.spyOn(thunkApi, "rejectWithValue");

    await getInitialRecipesAsync(null, thunkApi);

    // expect(thunkApi.rejectWithValue).toHaveBeenCalledWith(errorMessage);
    expect(spy).toHaveBeenCalledWith(errorMessage);
  });
});
