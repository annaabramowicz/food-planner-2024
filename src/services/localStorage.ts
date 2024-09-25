import { Ingredient } from "lib/types";
import { z } from "zod";

const IngredientSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
  })
);

const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () => {
  console.log("jestem w get Item");
  try {
    const value = localStorage.getItem(FRIDGE);
    if (value !== null) {
      console.log("nie null");
      console.log(value);
      return IngredientSchema.parse(JSON.parse(value));
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

export const saveIngredientInLocalStorage = (ingredient: Ingredient) => {
  console.log(ingredient);
  const existingFridge = getIngredientsFromLocalStorage();
  const newFridge = [...existingFridge, ingredient];
  console.log(`newFridge`);
  console.log(newFridge);
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
  const existingFridge = getIngredientsFromLocalStorage();
  const newFridge = existingFridge.filter((ingredient) => ingredient.id !== id);
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
