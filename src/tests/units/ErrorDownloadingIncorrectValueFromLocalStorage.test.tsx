import { describe, expect, it } from "vitest";
import { getIngredientsFromLocalStorage } from "services/localStorage";

describe("Error downloading incorrect value from local storage", () => {
  it.skip("Throw exception during downloading incorrect ingredient data from local storage", () => {
    const invalidJSONIngredient = `{
      "id": 9279,
      "name": "purple plum",
      "image" //comments
    }`;

    window.localStorage.setItem("fridge", invalidJSONIngredient);

    expect(getIngredientsFromLocalStorage()).toThrow(TypeError);
  });
});
