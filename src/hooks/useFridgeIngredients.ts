import { useAppDispatch } from "store/store";
import {
  removeIngredient,
  saveIngredient,
  useFridgeData,
} from "store/fridge/fridge";
import { Ingredient } from "lib/types";

export const useFridgeIngredients = () => {
  const { ingredients } = useFridgeData();
  const dispatch = useAppDispatch();

  const removeFridgeIngredient = (id: number) => removeIngredient(id, dispatch);
  const saveFridgeIngredient = (ingredient: Ingredient) =>
    saveIngredient(ingredient, dispatch);
  const isIngredientInFridge = (id: number) =>
    ingredients.some((storeIngredient) => storeIngredient.id === id);

  return {
    ingredients,
    removeFridgeIngredient,
    saveFridgeIngredient,
    isIngredientInFridge,
  };
};
