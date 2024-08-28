import { useAppDispatch } from "store/useAppDispatch";
import {
  removeIngredientFromFridgeAsync,
  saveIngredientToFridgeAsync,
  useFridgeData,
} from "store/fridge/fridge";
import { Ingredient } from "lib/types";

export const useFridgeIngredients = () => {
  const { ingredients } = useFridgeData();
  const dispatch = useAppDispatch();

  const removeFridgeIngredient = (id: number) =>
    dispatch(removeIngredientFromFridgeAsync(id));
  const saveFridgeIngredient = (ingredient: Ingredient) =>
    dispatch(saveIngredientToFridgeAsync(ingredient));
  const isIngredientInFridge = (id: number) =>
    ingredients.some((storeIngredient) => storeIngredient.id === id);

  return {
    ingredients,
    removeFridgeIngredient,
    saveFridgeIngredient,
    isIngredientInFridge,
  };
};
