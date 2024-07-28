import { logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FridgePage from "app/pages/FridgePage/FridgePage";
import Ingredient from "app/pages/IngredientsPage/IngredientsList/Ingredient/Ingredient";
import { useFridgeData } from "store/fridge/fridge";
import { useAppDispatch } from "store/store";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("store/store", () => {
  return { useAppDispatch: vi.fn() };
});

vi.mock("store/fridge/fridge", () => {
  return {
    useFridgeData: vi.fn(),
    saveIngredientToFridgeAsync: vi.fn(),
  };
});

beforeEach(() => {
  useFridgeData.mockReturnValue({ ingredients: [] });
  useAppDispatch.mockClear();
});

describe("Show Ingredient In Fridge", () => {
  it("show ingredient in fridge page after click ingredient in ingredient page", async () => {
    user.setup();
    useAppDispatch.mockReturnValue(vi.fn());
    // useFridgeData.mockReturnValue({ ingredients: [] });

    const { rerender } = render(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );

    const ingredientElement = screen.getByRole("img", { name: "apple" });
    await user.click(ingredientElement);
    useFridgeData.mockReturnValue({
      ingredients: [{ id: 9, name: "apple", image: "apple.png" }],
    });

    rerender(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );

    const checkmark = screen.queryByRole("checkmark");
    expect(checkmark).toBeInTheDocument();

    const view = render(<FridgePage />);
    logRoles(view.container);

    const fridgeIngredientElement = screen.getByRole("img", {
      name: "apple",
    });
    expect(fridgeIngredientElement).toBeInTheDocument();
  });
});
