import { render, screen } from "@testing-library/react";
import Recipe from "app/pages/RecipesPage/RecipesList/Recipe/Recipe";
import { describe, expect, it } from "vitest";

describe("Recipe", () => {
  it("show recipe name", () => {
    const recipe = {
      id: 2,
      title: "apple pie",
      image: "applePie.jpg",
      imageType: "jpg",
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            unit: "kcal",
            amount: 361.641,
          },
          { name: "Protein", unit: "g", amount: 2 },
          { name: "Fat", unit: "g", amount: 165 },
          { name: "Carbohydrates", unit: "g", amount: 4.7602 },
        ],
      },
    };

    render(<Recipe recipe={recipe} />);

    expect(screen.getByText(/apple pie/i)).toBeInTheDocument();
  });
});
