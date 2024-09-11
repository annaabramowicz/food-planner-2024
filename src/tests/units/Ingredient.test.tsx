import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Ingredient from "app/pages/IngredientsPage/IngredientsList/Ingredient/Ingredient";
import { useFridgeData } from "store/fridge/fridge";
import { useAppDispatch } from "store/useAppDispatch";

import { describe, expect, it, vi } from "vitest";

const useFridgeDataMock = vi.mocked(useFridgeData);
const useAppDispatchMock = vi.mocked(useAppDispatch);

vi.mock("store/useAppDispatch");
vi.mock("store/fridge/fridge");

describe("Ingredient", () => {
  it("show ingredient name", () => {
    useFridgeDataMock.mockReturnValue({ ingredients: [] });
    const ingredient = { id: 9, name: "apple", image: "apple.png" };

    render(<Ingredient ingredient={ingredient} />);

    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });

  it("show ingredient image", () => {
    useFridgeDataMock.mockReturnValue({ ingredients: [] });
    const ingredient = { id: 9, name: "apple", image: "apple.png" };

    render(<Ingredient ingredient={ingredient} />);
    const ingredientImg = screen.getByRole("img");

    expect(ingredientImg).toBeInTheDocument();
    expect(ingredientImg).toHaveAttribute(
      "src",
      "https://spoonacular.com/cdn/ingredients_100x100/apple.png"
    );
    expect(ingredientImg).toHaveAttribute("alt", "apple");
  });

  it("shows checkmark if ingredient is present in user's fridge", () => {
    useFridgeDataMock.mockReturnValue({
      ingredients: [{ id: 9, name: "apple", image: "apple.png" }],
    });

    render(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );
    screen.getByRole("checkmark");
  });

  it("does not shows checkmark if ingredient is not present in user's fridge", () => {
    useFridgeDataMock.mockReturnValue({
      ingredients: [{ id: 9, name: "apple", image: "apple.png" }],
    });

    render(
      <Ingredient ingredient={{ id: 7, name: "lemon", image: "lemon.png" }} />
    );
    const checkmark = screen.queryByRole("checkmark");

    expect(checkmark).not.toBeInTheDocument();
  });

  it("show checkmark after click ingredient", async () => {
    user.setup();
    useAppDispatchMock.mockReturnValue(vi.fn());
    useFridgeDataMock.mockReturnValue({
      ingredients: [{ id: 8, name: "onion", image: "onion.png" }],
    });
    const { rerender } = render(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );

    const image = screen.getByRole("img", { name: "apple" });
    await user.click(image);

    useFridgeDataMock.mockReturnValue({
      ingredients: [
        { id: 8, name: "onion", image: "onion.png" },
        { id: 9, name: "apple", image: "apple.png" },
      ],
    }),
      rerender(
        <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
      );

    const checkmark = screen.queryByRole("checkmark");
    expect(checkmark).toBeInTheDocument();
  });

  it("remove checkmark after click ingredient", async () => {
    user.setup();
    useAppDispatchMock.mockReturnValue(vi.fn());
    useFridgeDataMock.mockReturnValue({
      ingredients: [
        { id: 8, name: "onion", image: "onion.png" },
        { id: 9, name: "apple", image: "apple.png" },
      ],
    });

    const { rerender } = render(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );

    const image = screen.getByRole("img", { name: "apple" });
    await user.click(image);
    useFridgeDataMock.mockReturnValue({
      ingredients: [{ id: 8, name: "onion", image: "onion.png" }],
    });

    rerender(
      <Ingredient ingredient={{ id: 9, name: "apple", image: "apple.png" }} />
    );
    const checkmark = screen.queryByRole("checkmark");
    expect(checkmark).not.toBeInTheDocument();
  });
});
