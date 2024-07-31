import { logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FridgePage from "app/pages/FridgePage/FridgePage";
import Ingredient from "app/pages/IngredientsPage/IngredientsList/Ingredient/Ingredient";
import { beforeEach, describe, expect, it, vi } from "vitest";

// vi.hoisted(() => {
//   vi.resetModules();
// });

beforeEach(() => {
  //   // vi.clearAllMocks(); // Czyści historię wszystkich mocków
  //   // vi.resetModules();
  //   useFridgeData.mockReturnValue({ ingredients: [] });
  //   // useAppDispatch.mockClear();
  vi.doMock("store/fridge/fridge", () => {
    return { useFridgeData: () => vi.fn() };
  });
});

vi.mock("store/store", () => {
  return { useAppDispatch: vi.fn().mockReturnValue(vi.fn()) };
});

describe("Show Ingredient In Fridge", () => {
  it.skip("show ingredient in fridge page after click ingredient in ingredient page", async () => {
    user.setup();

    const { useFridgeData } = await import("store/fridge/fridge");
    useFridgeData.mockReturnValue({ ingredients: [] });

    const { rerender } = render(
      <Ingredient ingredient={{ id: 2, name: "pink", image: "pink.png" }} />
    );

    const ingredientElement = screen.getByRole("img", { name: "pink" });
    await user.click(ingredientElement);
    useFridgeData.mockReturnValue({
      ingredients: [{ id: 2, name: "pink", image: "pink.png" }],
    });

    // vi.doMock("store/fridge/fridge", () => {
    //   return {
    //     useFridgeData: vi.fn().mockReturnValue({
    //       ingredients: [{ id: 2, name: "pink", image: "pink.png" }],
    //     }),
    //     saveIngredientToFridgeAsync: vi.fn().mockReturnValue({
    //       ingredients: [{ id: 2, name: "pink", image: "pink.png" }],
    //     }),
    //   };
    // });
    rerender(
      <Ingredient ingredient={{ id: 2, name: "pink", image: "pink.png" }} />
    );
    screen.debug();

    const checkmark = screen.queryByRole("checkmark");
    expect(checkmark).toBeInTheDocument();

    const view = render(<FridgePage />);
    logRoles(view.container);

    const fridgeIngredientElement = screen.getByRole("img", {
      name: "pink",
    });
    expect(fridgeIngredientElement).toBeInTheDocument();
  });
});
