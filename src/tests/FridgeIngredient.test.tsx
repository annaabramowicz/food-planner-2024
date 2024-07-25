import { render, screen } from "@testing-library/react";
import FridgeIngredient from "app/pages/FridgePage/FridgeIngredientsList/FridgeIngredient/FridgeIngredient";
import { describe, expect, it, vi } from "vitest";

describe("Fridge Ingredient", () => {
  it("show ingredient name", () => {
    vi.mock("store/store", () => {
      return { useAppDispatch: vi.fn() };
    });

    const ingredient = { id: 9, name: "apple", image: "apple.png" };

    render(<FridgeIngredient ingredient={ingredient} />);

    expect(screen.getByText("apple")).toBeInTheDocument();
  });
});
