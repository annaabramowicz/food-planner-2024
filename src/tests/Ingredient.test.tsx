import { render, screen } from "@testing-library/react";
import Ingredient from "app/pages/IngredientsPage/IngredientsList/Ingredient/Ingredient";
import { useFridgeData } from "store/fridge/fridge";
import { describe, expect, it, vi } from "vitest";

vi.mock("store/store", () => {
  return { useAppDispatch: vi.fn() };
});
vi.mock("store/fridge/fridge", () => {
  return { useFridgeData: vi.fn() };
});

describe("Ingredient", () => {
  it("show ingredient name", () => {
    useFridgeData.mockReturnValue({ ingredients: [] });
    const ingredient = { id: 9, name: "apple", image: "apple.png" };

    render(<Ingredient ingredient={ingredient} />);

    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });

  it("shows checkmark if ingredient is present in user's fridge", () => {
    const ingredient = { id: 9, name: "apple", image: "apple.png" };
    useFridgeData.mockReturnValue({ ingredients: [ingredient] });

    render(<Ingredient ingredient={ingredient} />);

    screen.getByTestId("checkmark");
  });
});
