import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ResultIngredientsResponse } from "lib/types";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";

type InitialState = {
  ingredients: ResultIngredientsResponse[];
};

const initialState: InitialState = {
  ingredients: getIngredientsFromLocalStorage(),
};

export const saveIngredientToFridgeAsync = createAsyncThunk(
  "saveIngredientToFridge",
  (ingredient: ResultIngredientsResponse, thunkAPI) => {
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

export const { saveIngredientToFridge, removeIngredientFromFridge } =
  slice.actions;

export default slice.reducer;
