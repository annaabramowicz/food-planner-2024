import { ResultIngredientsResponse } from "lib/types";

const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () => {
  try {
    const value = localStorage.getItem(FRIDGE);
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  } catch (e) {
    if (e instanceof Error) {
      console.error(`${e.name}: ${e.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    return [];
  }
};

export const saveIngredientInLocalStorage = (
  ingredient: ResultIngredientsResponse
) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = [...existingFridge, ingredient];
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (e) {
    if (e instanceof Error) {
      console.error(`${e.name}: ${e.message}`);
    } else {
      console.error("An unknown error occurred");
    }
  }
};

export const removeIngredientFromLocalStorage = (id: number) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = existingFridge.filter(
    (ingredient: ResultIngredientsResponse) => ingredient.id !== id
  );
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (e) {
    if (e instanceof Error) {
      console.error(`${e.name}: ${e.message}`);
    } else {
      console.error("An unknown error occurred");
    }
  }
};
