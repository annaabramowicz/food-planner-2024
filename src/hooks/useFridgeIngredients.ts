import { useAppDispatch } from "store/useAppDispatch";
import {
  removeIngredientFromFridgeThunk,
  saveIngredientToFridgeThunk,
  useFridgeData,
} from "store/fridge/fridge";
import { Ingredient } from "lib/types";

export const useFridgeIngredients = () => {
  const { ingredients } = useFridgeData();
  const dispatch = useAppDispatch();

  const removeFridgeIngredient = (id: number) =>
    dispatch(removeIngredientFromFridgeThunk(id));
  const saveFridgeIngredient = (ingredient: Ingredient) =>
    dispatch(saveIngredientToFridgeThunk(ingredient));
  const isIngredientInFridge = (id: number) =>
    ingredients.some((storeIngredient) => storeIngredient.id === id);

  return {
    ingredients,
    removeFridgeIngredient,
    saveFridgeIngredient,
    isIngredientInFridge,
  };
};
