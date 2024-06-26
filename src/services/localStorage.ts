import { z } from "zod";

const IngredientSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
  })
);
type IngredientType = z.infer<typeof IngredientSchema>;

const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () => {
  try {
    const value = localStorage.getItem(FRIDGE);
    if (value !== null) {
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

export const saveIngredientInLocalStorage = (ingredient: IngredientType) => {
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
