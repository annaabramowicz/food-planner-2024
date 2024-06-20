import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ingredient } from "lib/types";
import { useSelector } from "react-redux";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";
import { RootState } from "store/store";

const initialState = {
  ingredients: getIngredientsFromLocalStorage(),
};

export const saveIngredientToFridgeAsync = createAsyncThunk(
  "saveIngredientToFridge",
  (ingredient: Ingredient, thunkAPI) => {
    saveIngredientInLocalStorage(ingredient);
    thunkAPI.dispatch(saveIngredientToFridge(ingredient));
  }
);

export const removeIngredientFromFridgeAsync = createAsyncThunk(
  "removeIngredientFromFridge",
  (id: number, thunkAPI) => {
    removeIngredientFromLocalStorage(id);
    thunkAPI.dispatch(removeIngredientFromFridge(id));
  }
);

const slice = createSlice({
  name: "fridge",
  initialState: initialState,
  reducers: {
    saveIngredientToFridge: (state, { payload }) => {
      state.ingredients.push(payload);
    },
    removeIngredientFromFridge: (state, { payload }) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== payload
      );
    },
  },
});

export const useFridgeData = () =>
  useSelector((state: RootState) => state.fridge);

export const { saveIngredientToFridge, removeIngredientFromFridge } =
  slice.actions;

export default slice.reducer;
