import { createSlice } from "@reduxjs/toolkit";
import { Ingredient } from "lib/types";
import { useSelector } from "react-redux";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";
import { useAppDispatch } from "store/useAppDispatch";

type InitialState = {
  ingredients: Ingredient[];
};

const initialState: InitialState = {
  ingredients: getIngredientsFromLocalStorage(),
};

export const saveIngredient = (
  ingredient: Ingredient,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  saveIngredientInLocalStorage(ingredient);
  dispatch(saveIngredientToFridge(ingredient));
};

export const removeIngredient = (
  id: number,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  removeIngredientFromLocalStorage(id);
  dispatch(removeIngredientFromFridge(id));
};

const slice = createSlice({
  name: "fridge",
  initialState: initialState,
  selectors: {
    fridgeData: (state) => state,
  },
  reducers: {
    saveIngredientToFridge: (state, { payload }) => {
      state.ingredients.push(payload);
    },
    saveInitialIngredientsToFridge: (state, { payload }) => {
      state.ingredients = [...state.ingredients, ...payload];
    },
    removeIngredientFromFridge: (state, { payload }) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== payload
      );
    },
  },
});

export const useFridgeData = () => useSelector(slice.selectors.fridgeData);

export const {
  saveIngredientToFridge,
  saveInitialIngredientsToFridge,
  removeIngredientFromFridge,
} = slice.actions;

export default slice.reducer;
