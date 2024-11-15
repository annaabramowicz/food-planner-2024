import { describe, expect, it, vi } from "vitest";
import { saveIngredientInLocalStorage } from "services/localStorage";

describe("Error saving large ingredient ID from local storage", () => {
  it("Throw an error during save ingredient with huge ID to local storage", () => {
    const hugeID = BigInt("1".repeat(1000000));
    const invalidJSONIngredient = {
      id: hugeID,
      name: "apple",
      image: "apple.jpg",
    };

    expect(saveIngredientInLocalStorage(invalidJSONIngredient)).toThrow(
      TypeError
    );
  });

  it("Throw an error during save ingredient with huge array ID to local storage", () => {
    const largeArray = new Array(5 * 1024 * 1024).fill("x");
    const invalidJSONIngredient = {
      id: largeArray,
      name: "apple",
      image: "apple.jpg",
    };

    const consoleSpy = vi.spyOn(console, "error");

    saveIngredientInLocalStorage(invalidJSONIngredient);

    expect(consoleSpy).toHaveBeenCalledWith("An unknown error occurred");
  });
});
